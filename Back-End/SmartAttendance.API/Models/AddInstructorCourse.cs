
namespace SmartAttendance.API.Models
{
    public class AddInstructorCourse
    {
        public int InstructorId { get; set; }
        public int TotalAttendanceGrade { get; set; }
        public int CourseId { get; set; }
        public string Term { get; set; }
    }
}
