using SmartAttendance.DAL.IRepository;
using SmartAttendance.DAL.Repository;
using SmartAttendance.DAL.Repository.IRepository;
using SmartAttendance.DAL.Repository.Repository;

namespace SmartAttendance.API
{
    public static class ApplicationDependencyInjectionServices
    {
        public static IServiceCollection AddApplicationDependencyInjectionServices(this IServiceCollection services,
       IConfiguration config)
        {


            services.AddScoped<ICourseRepository, CourseRepository>();
            services.AddScoped<IDepartmentRepository, DepartmentRepository>();
            services.AddScoped<IInstructorRepository, InstructorRepository>();
            services.AddScoped<ILectureRepository, LectureRepository>();
            services.AddScoped<IStudentRepository, StudentRepository>();
            services.AddScoped<IInstructorRepository, InstructorRepository>();

            return services;
        }
    }
}
