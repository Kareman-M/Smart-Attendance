using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.Models;

namespace SmartAttendance.DAL.Repository.IRepository
{
    public interface IUserRepository
    {
        Result Add(User user);
        Result Remove(string username);
        public Result UndoRemoved(string username);
        Result EditName(string username, string newName);
        Result ResetPassowrd(string username, string newPassowrd);
        Result ChangePassowrd(string username, string newPassowrd, string oldPassowrd);
        Result Login(string username, string encryptedPassowrd);
        Result LogOut(string username, string encryptedPassowrd);
    }
}
