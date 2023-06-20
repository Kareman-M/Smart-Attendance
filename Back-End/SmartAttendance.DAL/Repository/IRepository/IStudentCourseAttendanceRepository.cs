using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.Models;

namespace SmartAttendance.DAL.Repository.IRepository
{
    public interface IStudentCourseAttendanceRepository
    {
        public Result Add(int studentId, string barcode);
        public IEnumerable<StudentCourseAttendance> GetByLectureId(int lectureId);
        public IEnumerable<StudentCourseAttendance> GetStudentCourseAttendance(int courseId);


    }
}
