using Microsoft.EntityFrameworkCore;
using SmartAttendance.DAL.DBModels;

namespace SmartAttendance.DAL.Context
{
    public class SmartAttendanceContext : DbContext
    {
        public SmartAttendanceContext(DbContextOptions<SmartAttendanceContext> options) : base(options)
        {

        }

        public DbSet<Course> Course { get; set; }
        public DbSet<Department> Department { get; set; }
        public DbSet<Instructor> Instructor { get; set; }
        public DbSet<Student> Student { get; set; }
        public DbSet<Lucture> Lucture { get; set; }
        public DbSet<InstructorCourse> InstructorCourse { get; set; }
        public DbSet<StudentCourseAttendance> StudentCourseAttendance { get; set; }

    }
}