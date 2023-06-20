using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartAttendance.DAL.DBModels
{
    public class Instructor
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public String Name { get; set; }
        public ICollection<InstructorCourse> InstructorCourses { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}