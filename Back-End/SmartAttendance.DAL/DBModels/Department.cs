using System.ComponentModel.DataAnnotations;


namespace SmartAttendance.DAL.DBModels
{
    public class Department
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Course>? Courses { get; set; }
    }
}