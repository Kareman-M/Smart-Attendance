namespace SmartAttendance.API.Models
{
    public class CourseDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Avilable { get; set; }
        public int? DepartmentId { get; set; }
        public string? DepartmentName { get; set; }

    }
}
