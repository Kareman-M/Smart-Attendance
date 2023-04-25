namespace SmartAttendance.API.Models
{
    public class InstructorCourseDTO
    {
        public int Id { get; set; }
        public int InstructorId { get; set; }
        public double TotalAttendanceGrade { get; set; }
        public string Term { get; set; }
        public DateTime CreatedAt { get; set; }
        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public string DepartmentName { get; set; }
        public int DepartmentId { get; set; }
        public ICollection<DAL.DBModels.Lucture>? Lectures { get; set; } 

    }
}
