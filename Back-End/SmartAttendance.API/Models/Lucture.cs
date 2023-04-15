namespace SmartAttendance.API.Models
{
    public class Lucture
    {
        public string Title { get; set; }
        public int? AttendanceGrade { get; set; }
        public string BarCode { get; set; }
        public DateTime Date { get; set; }
    }
}