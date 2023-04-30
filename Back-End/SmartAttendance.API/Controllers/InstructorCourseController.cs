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
            var res = _instructorCourseRepository.GetAll(instructorId);
            res.Value = ((IEnumerable<InstructorCourse>)res.Value).Select(x => new InstructorCourseDTO
            {
                CourseId = x.CourseId,
                CourseName = x.Course.Name,
                DepartmentId = x.Course.DepartmentId ?? 0,
                DepartmentName = x.Course.Department.Name,
                CreatedAt = x.CreatedAt,
                Id = x.Id,
                InstructorId = x.InstructorId,
                Term = x.Term,
                TotalAttendanceGrade = x.TotalAttendanceGrade,
                Lectures = x.Lectures
            });
            return Ok(res);
        }

        [HttpPost("Add")]
        public IActionResult Add(AddInstructorCourse insCrs)
        {
            var crs = _instructorCourseRepository.Add(new InstructorCourse
            {
                InstructorId = insCrs.InstructorId,
                CourseId = insCrs.CourseId,
                TotalAttendanceGrade = insCrs.TotalAttendanceGrade,
                CreatedAt = DateTime.Now,
                Term = insCrs.Term
            });
            return Ok(crs);
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            var res = _instructorCourseRepository.Remove(id);
            return Ok(res);
        }
    }
}
