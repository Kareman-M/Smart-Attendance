using Microsoft.EntityFrameworkCore;
using SmartAttendance.DAL.Context;
using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.Models;
using SmartAttendance.DAL.Repository.IRepository;

namespace SmartAttendance.DAL.Repository
{
    public class StudentCourseAttendanceRepository : IStudentCourseAttendanceRepository
    {
        private readonly SmartAttendanceContext _context;
        public StudentCourseAttendanceRepository(SmartAttendanceContext context) => _context = context; 
        public Result Add(StudentCourseAttendance std)
        {
            if (std == null) return new Result(Result.NullValues);
            var stdAtt = _context.StudentCourseAttendance.FirstOrDefault(x => x.LectureId == std.LectureId && x.StudenId == std.StudenId);
            if (stdAtt != null) return new Result("You Already Attended");
            var entity = _context.StudentCourseAttendance.Add(std);
            return _context.SaveChanges() > 0 ? new Result("Attended Successfully", entity.Entity, true) : new Result(Result.SaveChangesError);
        }

        public IEnumerable<StudentCourseAttendance> GetByLectureId(int lectureId)
        {
            return _context.StudentCourseAttendance.Where(x => x.LectureId == lectureId);
        }

        public IEnumerable<StudentCourseAttendance> GetStudentCourseAttendance(int courseId)
        {
            return _context.StudentCourseAttendance
                .Where(x => x.Lucture.InstructorCourseId == courseId)
                .Include(x=> x.Lucture);
        }
    }
}
