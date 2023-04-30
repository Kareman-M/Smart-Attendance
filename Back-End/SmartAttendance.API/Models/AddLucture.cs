namespace SmartAttendance.API.Models
{
    public class AddLucture
    {
        public string Title { get; set; }
        public int AttendanceGrade { get; set; }
        public string BarCode { get; set; }
        public DateTime Date { get; set; }
        public int InstructorCourseId { get; set; }
    }
}
