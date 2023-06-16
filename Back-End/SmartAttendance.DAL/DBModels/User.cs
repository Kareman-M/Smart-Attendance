using System.ComponentModel.DataAnnotations;

namespace SmartAttendance.DAL.DBModels
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public bool Removed { get; set; }
        public bool FirstLogin { get; set; }
        public bool CurrentlyLogin { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
