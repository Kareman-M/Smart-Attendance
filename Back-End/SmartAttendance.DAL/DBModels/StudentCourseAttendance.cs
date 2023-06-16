using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartAttendance.DAL.DBModels
{
    public class StudentCourseAttendance
    {
        [Key]
        public int Id { get; set; }
        public int StudenId { get; set; }
        public string  StudentName { get; set; }
        public int LectureId { get; set; }
        public DateTime AttendAt { get; set; }
        [ForeignKey("LectureId")]
        public Lucture Lucture { get; set; }

    }
}
