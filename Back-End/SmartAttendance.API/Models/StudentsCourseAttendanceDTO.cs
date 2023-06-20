using System.ComponentModel.DataAnnotations.Schema;

namespace SmartAttendance.API.Models
{
    public class StudentsCourseAttendanceDTO
    {
        public int StudenId { get; set; }
        public string Barcode { get; set; }
      
    }
}
