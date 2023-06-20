using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace SmartAttendance.DAL.DBModels
{
    public class InstructorCourse
    {
        [Key]
        public int Id { get; set; }
        public int InstructorId { get; set; }
        public double TotalAttendanceGrade { get; set; }
        public string Term { get; set; }
        public DateTime CreatedAt { get; set; }
        public int CourseId { get; set; }
        [ForeignKey("InstructorId")]
        public User Instructor { get; set; }
        [ForeignKey("CourseId")]
        public Course Course { get; set; }
        public ICollection<Lucture>? Lectures { get; set; }
    }
}