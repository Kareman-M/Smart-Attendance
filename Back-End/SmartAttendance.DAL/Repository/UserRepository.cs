using SmartAttendance.DAL.Context;
using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.Models;
using SmartAttendance.DAL.Repository.IRepository;
using SmartAttendance.DAL.Security;

namespace SmartAttendance.DAL.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly SmartAttendanceContext _context;
        private readonly IRSAHealper _rsaHealper;
        private readonly IJWTManager _jwtManager;
        public UserRepository(SmartAttendanceContext context, IRSAHealper rsaHealper, IJWTManager jwtManager)
        {
            _context = context;
            _rsaHealper = rsaHealper;
            _jwtManager = jwtManager;
        }
        public Result Add(User user)
        {
            if (user == null) return new Result(Result.NullValues);
            var userAlreadyExist = _context.User.FirstOrDefault(x => x.UserName.ToLower() == user.UserName.ToLower() && !x.Removed);
            if (userAlreadyExist != null) return new Result("User Is Already Exist");
            //user.Password = _rsaHealper.Encrypt(user.Password);
            var entity = _context.User.Add(user);
            _context.SaveChanges();
            if (user.Role == "instructor")
            {
                _context.Instructor.Add(new Instructor
                {
                    Id = entity.Entity.Id,
                    Name = user.UserName,
                    UserId = entity.Entity.Id,
                });
            }
            return _context.SaveChanges() > 0 ? new Result("User Created Successfully", entity.Entity, true) : new Result(Result.SaveChangesError);
        }

        public Result ChangePassowrd(string username, string newEncryptedPassowrd, string oldEncryptedPassowrd)
        {
            var user = _context.User.FirstOrDefault(x => x.UserName.ToLower() == username.ToLower() && !x.Removed);
            if (user == null) return new Result("User Not Exist");
            // if (_rsaHealper.Decrypt(oldEncryptedPassowrd) != _rsaHealper.Decrypt(user.Password)) return new Result("Incorrect Password");
            user.Password = newEncryptedPassowrd;
            return _context.SaveChanges() >= 0 ? new Result("Password Changes Successfully", null, true) : new Result(Result.SaveChangesError);
        }

        public Result EditName(string username, string newName)
        {
            var user = _context.User.FirstOrDefault(x => x.UserName.ToLower() == username.ToLower() && !x.Removed);
            if (user == null) return new Result("User Not Exist");
            user.Name = newName;
            return _context.SaveChanges() >= 0 ? new Result("User Name Updated Successfully", null, true) : new Result(Result.SaveChangesError);
        }

        public Result UndoRemoved(string username)
        {
            var user = _context.User.FirstOrDefault(x => x.UserName.ToLower() == username.ToLower() && x.Removed);
            if (user == null) return new Result("User Not Exist");
            user.Removed = false;
            return _context.SaveChanges() >= 0 ? new Result("Undo Remove Done Successfully", null, true) : new Result(Result.SaveChangesError);
        }

        public Result Remove(string username, int currentUserId)
        {
            var user = _context.User.FirstOrDefault(x => x.UserName.ToLower() == username.ToLower() && !x.Removed);
            if (user == null) return new Result("User Not Exist");
            if (user.Id == currentUserId) return new Result("You Can't delete your self");
            user.Removed = true;
            return _context.SaveChanges() >= 0 ? new Result("User Removed Successfully", null, true) : new Result(Result.SaveChangesError);
        }

        public Result ResetPassowrd(string username, string newEncryptedPassowrd)
        {
            var user = _context.User.FirstOrDefault(x => x.UserName.ToLower() == username.ToLower() && !x.Removed);
            if (user == null) return new Result("User Not Exist");
            user.Password = newEncryptedPassowrd;
            return _context.SaveChanges() >= 0 ? new Result("Password Reseted Successfully", null, true) : new Result(Result.SaveChangesError);
        }

        public Result Login(string username, string encryptedPassowrd)
        {
            var user = _context.User.FirstOrDefault(x => x.UserName.ToLower() == username.ToLower() && !x.Removed);
            if (user == null) return new Result("No User Exist With this Username");
            // if (_rsaHealper.Decrypt(encryptedPassowrd) != _rsaHealper.Decrypt(user.Password)) return new Result("Incorrect Password");
            if (encryptedPassowrd != user.Password) return new Result("Incorrect Password");
            user.CurrentlyLogin = true;
            _context.SaveChanges();
            return new Result("Password Reseted Successfully", user, true);
        }

        public Result LogOut(string username)
        {
            var user = _context.User.FirstOrDefault(x => x.UserName.ToLower() == username.ToLower() && !x.Removed);
            if (user == null) return new Result("User Not Exist");
            user.CurrentlyLogin = false;
            _context.SaveChanges();
            return new Result("Password Logged Out Successfully", null, true);
        }

        public IEnumerable<User> GetAll()
        {
            return _context.User.Where(x => !x.Removed);
        }

        public Result LogOut(string username, string encryptedPassowrd)
        {
            throw new NotImplementedException();
        }

        public Result ChangePassowrdForFirstLogin(string username, string newPassowrd)
        {
            var user = _context.User.FirstOrDefault(x => x.UserName.ToLower() == username.ToLower() && !x.Removed);
            if (user == null) return new Result("No User Exist With this Username");
            user.CurrentlyLogin = true;
            user.FirstLogin = false;
            user.Password = newPassowrd;
            _context.SaveChanges();
            return new Result("Password Changed Successfully", user, true);
        }
    }
}
