using System.ComponentModel.DataAnnotations;

namespace SmartAttendance.DAL.DBModels
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int NationalId { get; set; }
    }
}