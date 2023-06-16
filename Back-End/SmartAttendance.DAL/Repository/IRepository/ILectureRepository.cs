using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.Models;

namespace SmartAttendance.DAL.Repository.IRepository
{
    public interface ILectureRepository
    {
        IEnumerable<Lucture> GetByInstructorCourseId(int insCrsId);
        IEnumerable<Lucture> GetByInstructorId(int insstructorId);
        IEnumerable<Lucture> GetAllInstructorTodayLectures(int insstructorId);
        Result Add(Lucture lecture);
        Result Delete(int id);
    }
}