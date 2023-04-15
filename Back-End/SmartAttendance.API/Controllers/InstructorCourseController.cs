using Microsoft.AspNetCore.Mvc;
using SmartAttendance.API.Models;
using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.Repository.IRepository;

namespace SmartAttendance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstructorCourseController : ControllerBase
    {
        private readonly IInstructorCourseRepository _instructorCourseRepository;
        public InstructorCourseController(IInstructorCourseRepository instructorCourseRepository) => _instructorCourseRepository = instructorCourseRepository;


        [HttpGet("GetAll/{instructorId}")]
        public IActionResult Get(int instructorId)
        {
            return Ok(_instructorCourseRepository.GetAll(instructorId));
        }

        [HttpPost("Add")]
        public IActionResult Add(AddInstructorCourse insCrs)
        {
            var crs = _instructorCourseRepository.Add(new InstructorCourse
            {
                InstructorId = insCrs.InstructorId,
                CourseId = insCrs.CourseId,
                TotalAttendanceGrade = insCrs.TotalAttendanceGrade,
                Lectures = insCrs?.Lectures?.Select(x => new DAL.DBModels.Lucture
                {
                    AttendanceGrade = x.AttendanceGrade ?? (insCrs.TotalAttendanceGrade / insCrs?.Lectures?.Count) ?? 0,
                    BarCode = x.BarCode,
                    Date = x.Date,
                    Title = x.Title,
                })?.ToList(),
            });
            return Created("", crs);
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            var res = _instructorCourseRepository.Remove(id);
            return Ok(res);
        }
    }
}
