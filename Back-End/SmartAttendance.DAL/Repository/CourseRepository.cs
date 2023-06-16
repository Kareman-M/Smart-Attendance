using Microsoft.EntityFrameworkCore;
using SmartAttendance.DAL.Context;
using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.IRepository;
using SmartAttendance.DAL.Models;

namespace SmartAttendance.DAL.Repository
{
    public class CourseRepository : ICourseRepository
    {
        private readonly SmartAttendanceContext _context;
        public CourseRepository(SmartAttendanceContext context) => _context = context;

        public Result Add(Course course)
        {
            if (course == null) return new Result(Result.NullValues);
            var crs = _context.Course.FirstOrDefault(x => x.Name == course.Name && x.DepartmentId == course.DepartmentId && course.CreatedAt.Date.Year == DateTime.Now.Year );
            if (crs != null) return new Result("This Course Is Already Exist");
            var entity = _context.Course.Add(course);

            return _context.SaveChanges() > 0 ? new Result("Course Created Successfully", entity.Entity, true) : new Result(Result.SaveChangesError);
        }

        public Result GetAll()
        {
            return new Result("", _context.Course.Include(x => x.Department), true);
        }

        public Result GetAllWitInstructorCourses()
        {
            return new Result("", _context.Course
                .Include(x => x.Department)
                .Include(x => x.InstructorCourses.Distinct()).ThenInclude(x => x.Instructor), true);
        }

        public Result Remove(int id)
        {
            if (id == 0) return new Result(Result.ITemNotExist);
            var course = _context.Course.FirstOrDefault(x => x.Id == id);
            if (course == null) return new Result(Result.ITemNotExist);
            _context.Course.Remove(course);
            return _context.SaveChanges() > 0 ? new Result(Result.Deleted,null, true) : new Result(Result.SaveChangesError);
        }
    }
}