using SmartAttendance.DAL.DBModels;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartAttendance.API.Models
{
    public class LectureDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public double AttendanceGrade { get; set; }
        public string BarCode { get; set; }
        public DateTime Date { get; set; }
        public int InstructorCourseId { get; set; }
        
        public int CourseId { get; set; }
        public string CourseName { get;set; }
    }
}
