using System.ComponentModel.DataAnnotations.Schema;

namespace SmartAttendance.API.Models
{
    public class StudentsCourseAttendanceDTO
    {
        public int Id { get; set; }
        public int StudenId { get; set; }
        public string StudentName { get; set; }
        public int LectureId { get; set; }
        public string LectureTitle { get; set; }
        public DateTime LectureDate { get; set; }
        public double AttendanceGrade { get; set; }
    }
}
