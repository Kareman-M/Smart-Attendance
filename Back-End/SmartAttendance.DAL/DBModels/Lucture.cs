using System.ComponentModel.DataAnnotations;

namespace SmartAttendance.DAL.DBModels
{
    public class Lucture
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public double AttendanceGrade { get; set; }
        public string BarCode { get; set; }
        public DateTime Date { get; set; }
        public int InstructorCourseId { get; set; }
        public InstructorCourse InstructorCourse { get; set; }
    }
}