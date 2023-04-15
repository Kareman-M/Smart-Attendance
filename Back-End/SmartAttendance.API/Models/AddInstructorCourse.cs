
namespace SmartAttendance.API.Models
{
    public class AddInstructorCourse
    {
        public int InstructorId { get; set; }
        public int TotalAttendanceGrade { get; set; }
        public int CourseId { get; set; }
        public List<Lucture>? Lectures { get; set; }
    }
}
