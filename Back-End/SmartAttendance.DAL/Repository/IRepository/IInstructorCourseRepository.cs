using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.Models;

namespace SmartAttendance.DAL.Repository.IRepository
{
    public interface IInstructorCourseRepository
    {
        Result GetAll(int instructorId);
        Result Add(InstructorCourse instructorCourse);
        Result Remove(int id);

    }
}