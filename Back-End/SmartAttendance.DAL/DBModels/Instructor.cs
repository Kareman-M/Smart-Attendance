using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartAttendance.DAL.DBModels
{
    public class Instructor
    {
        [Key]
        public int Id { get; set; }
        public String Name { get; set; }
        public int DepartmentId { get; set; }
        [ForeignKey("DepartmentId")]
        public Department Department { get; set; }
        public ICollection<InstructorCourse> InstructorCourses { get; set; }
    }
}