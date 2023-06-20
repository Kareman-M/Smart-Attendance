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
        public Result Add(int studentId, string barcode)
        {
            if (studentId == 0 ) return new Result(Result.NullValues);
            var student = _context.User.FirstOrDefault(x=> x.Id == studentId && x.Role == "");
            if(student == null) return new Result("انت مش طالب ي استا ما تحورش");
            var stdAtt = _context.StudentCourseAttendance.FirstOrDefault(x => x.StudenId == studentId);
            if (stdAtt != null) return new Result("You Already Attended");
            var lecture = _context.Lucture.FirstOrDefault(x => x.BarCode == barcode);
            if(lecture == null) return new Result("You scan an invalid QRCode");
            var entity = _context.StudentCourseAttendance.Add(new StudentCourseAttendance
            {
                AttendAt = DateTime.Now,
                LectureId = lecture.Id,
                StudenId = studentId,
                StudentName = student.Name,
            });
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
