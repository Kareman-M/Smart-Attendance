using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.IRepository;
using SmartAttendance.DAL.Repository;
using SmartAttendance.DAL.Repository.IRepository;
using SmartAttendance.DAL.Repository.Repository;
using SmartAttendance.DAL.Security;

namespace SmartAttendance.API
{
    public static class ApplicationDependencyInjectionServices
    {
        public static IServiceCollection AddApplicationDependencyInjectionServices(this IServiceCollection services,
       IConfiguration config)
        {


            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IJWTManager, JWTManager>();
            services.AddScoped<IRSAHealper, RSAHealper>();
            services.AddScoped<ICourseRepository, CourseRepository>();
            services.AddScoped<IDepartmentRepository, DepartmentRepository>();
            services.AddScoped<IInstructorRepository, InstructorRepository>();
            services.AddScoped<ILectureRepository, LectureRepository>();
            services.AddScoped<IStudentRepository, StudentRepository>();
            services.AddScoped<IInstructorRepository, InstructorRepository>();
            services.AddScoped<IInstructorCourseRepository, InstructorCourseRepository>();
            services.AddScoped<IStudentCourseAttendanceRepository, StudentCourseAttendanceRepository>();
            services.AddScoped<IStudentCourseAttendanceRepository, StudentCourseAttendanceRepository>();
            return services;
        }
    }
}
