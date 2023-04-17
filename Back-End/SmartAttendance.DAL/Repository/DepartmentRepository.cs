using Microsoft.EntityFrameworkCore;
using SmartAttendance.DAL.Context;
using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.Models;
using SmartAttendance.DAL.Repository.IRepository;

namespace SmartAttendance.DAL.Repository.Repository
{
    public class DepartmentRepository : IDepartmentRepository
    {
        private readonly SmartAttendanceContext _context;
        public DepartmentRepository(SmartAttendanceContext context) => _context = context;

        public Result Add(Department department)
        {

            if (department == null) return new Result(Result.NullValues);
            var dept = _context.Department.FirstOrDefault(x => x.Name == department.Name);
            if (dept != null) return new Result("This Department Is Already Exist");
            var entity = _context.Department.Add(department);

            return _context.SaveChanges() > 0 ? new Result("Department Created Successfully", entity.Entity, true) : new Result(Result.SaveChangesError);
        }

        public Result Remove(int id)
        {
            if (id == 0) return new Result(Result.ITemNotExist);
            var dept = _context.Department.FirstOrDefault(x => x.Id == id);
            if (dept == null) return new Result(Result.ITemNotExist);
            _context.Department.Remove(dept);
            return _context.SaveChanges() > 0 ? new Result(Result.Deleted) : new Result(Result.SaveChangesError);
        }

        public Result GetAll()
        {
            return new Result("", _context.Department.Include(x => x.Courses));
        }
    }
}