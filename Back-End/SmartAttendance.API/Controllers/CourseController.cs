using Microsoft.AspNetCore.Mvc;
using SmartAttendance.API.Models;
using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.IRepository;

namespace SmartAttendance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseRepository _courseRepository;
        public CourseController(ICourseRepository courseRepository) => this._courseRepository = courseRepository;

        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            var data = _courseRepository.GetAll();
            data.Value = ((IEnumerable<Course>)data.Value).Select(x => new CourseDTO
            {
                DepartmentId = x.DepartmentId,
                DepartmentName = x.Department?.Name,
                Avilable = x.Avilable,
                Id = x.Id,
                Name = x.Name,
            });
            return Ok(data);
        }

        [HttpPost("Add")]
        public IActionResult Add(AddCourse course)
        {
            var crs = _courseRepository.Add(new Course
            {
                Name = course.CourseName,
                DepartmentId = course.DepartmentId,
                Avilable = true,
            });
            if (!crs.IsCompleted) return Ok(crs);

            var newCourse = (Course)crs.Value;
            crs.Value = new CourseDTO
            {
                Avilable = newCourse.Avilable,
                DepartmentId = newCourse.DepartmentId,
                DepartmentName = newCourse.Department?.Name,
                Id = newCourse.Id,
                Name = newCourse.Name,
            };
            return Created("", crs);
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            var res = _courseRepository.Remove(id);
            return Ok(res);
        }
    }
}
