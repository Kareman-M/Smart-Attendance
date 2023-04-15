using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartAttendance.DAL.DBModels
{
    public class Course
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Avilable { get; set; }
        public int? DepartmentId { get; set; }
        [ForeignKey("DepartmentId")]
        public Department Department { get; set; }
        public ICollection<InstructorCourse>? InstructorCourses { get; set; }

    }
}