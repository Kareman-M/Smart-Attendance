using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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
        [ForeignKey("InstructorCourseId")]
        public InstructorCourse InstructorCourse { get; set; }
    }
}