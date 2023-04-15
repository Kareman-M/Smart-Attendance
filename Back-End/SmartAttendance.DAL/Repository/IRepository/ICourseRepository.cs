using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.Models;

namespace SmartAttendance.DAL.IRepository
{
    public interface ICourseRepository
    {
        Result Add(Course course);
        Result Remove(int id);
        Result GetAll();
        Result GetAllWitInstructorCourses();
    }
}