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
            return Ok(_courseRepository.GetAll());
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
