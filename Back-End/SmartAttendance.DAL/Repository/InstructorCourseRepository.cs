using Microsoft.EntityFrameworkCore;
using SmartAttendance.DAL.Context;
using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.Models;
using SmartAttendance.DAL.Repository.IRepository;

namespace SmartAttendance.DAL.Repository
{
    public class InstructorCourseRepository : IInstructorCourseRepository
    {
        private readonly SmartAttendanceContext _context;
        public InstructorCourseRepository(SmartAttendanceContext context) => _context = context;
        public Result Add(InstructorCourse instructorCourse)
        {
            if (instructorCourse == null) return new Result(Result.NullValues);
            var insCrs = _context.InstructorCourse
                .Where(x => x.CourseId == instructorCourse.CourseId && x.Term.ToLower() == instructorCourse.Term.ToLower() && x.CreatedAt.Year == instructorCourse.CreatedAt.Year);
            if (insCrs.Any()) return new Result("This Course Is Already Taken");
            var entity = _context.InstructorCourse.Add(instructorCourse);
            return _context.SaveChanges() > 0 ? new Result("Created Successfully", entity.Entity,true) : new Result(Result.SaveChangesError);

        }

        public Result GetAll(int instructorId)
        {
            return new Result("", _context.InstructorCourse.Include(x => x.Course).ThenInclude(x=> x.Department).Include(x => x.Instructor));
        }

        public Result Remove(int id)
        {
            if (id == 0) return new Result(Result.ITemNotExist);
            var insCrs = _context.InstructorCourse.FirstOrDefault(x => x.Id == id);
            if (insCrs == null) return new Result(Result.ITemNotExist);
            _context.InstructorCourse.Remove(insCrs);
            return _context.SaveChanges() > 0 ? new Result(Result.Deleted) : new Result(Result.SaveChangesError);
        }
    }
}