using Microsoft.AspNetCore.Mvc;
using SmartAttendance.API.Models;
using SmartAttendance.DAL.Repository.IRepository;

namespace SmartAttendance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LectureController : ControllerBase
    {
        private readonly ILectureRepository _lectureRepository;
        public LectureController(ILectureRepository lectureRepository) => _lectureRepository = lectureRepository;

        [HttpGet, Route("Get/{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_lectureRepository.GetByInstructorCourseId(id).Select(x => new LectureDTO
            {
                Id = x.Id,
                Date = x.Date,
                AttendanceGrade = x.AttendanceGrade,
                BarCode = x.BarCode,
                CourseId = x.InstructorCourse.CourseId,
                CourseName = x.InstructorCourse.Course.Name,
                InstructorCourseId = x.InstructorCourse.CourseId,
                Title = x.Title
            }));
        }

        [HttpPost, Route("Add")]
        public IActionResult Add(AddLucture lucture)
        {
            return Ok(_lectureRepository.Add(new DAL.DBModels.Lucture
            {
                AttendanceGrade = lucture.AttendanceGrade,
                BarCode = Guid.NewGuid().ToString(),
                Date = lucture.Date,
                InstructorCourseId = lucture.InstructorCourseId,
                Title = lucture.Title,
            }));
        }

        [HttpDelete, Route("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_lectureRepository.Delete(id));
        }

        [HttpGet, Route("GetAllInstructorLectures/{instructorId}")]
        public IActionResult GetAllInstructorLectures(int instructorId)
        {
            return Ok(_lectureRepository.GetByInstructorId(instructorId).Select(x => new LectureDTO
            {
                Id = x.Id,
                Date = x.Date,
                AttendanceGrade = x.AttendanceGrade,
                BarCode = x.BarCode,
                CourseId = x.InstructorCourse.CourseId,
                CourseName = x.InstructorCourse.Course.Name,
                InstructorCourseId = x.InstructorCourse.CourseId,
                Title = x.Title
            }));
        }
        [HttpGet, Route("GetAllTodayInstructorLectures/{instructorId}")]
        public IActionResult GetAllTodayInstructorLectures(int instructorId)
        {
            try
            {
                return Ok(_lectureRepository.GetAllInstructorTodayLectures(instructorId).Select(x => new LectureDTO
                {
                    Id = x.Id,
                    Date = x.Date,
                    AttendanceGrade = x.AttendanceGrade,
                    BarCode = x.BarCode,
                    CourseId = x.InstructorCourse.CourseId,
                    CourseName = x.InstructorCourse.Course.Name,
                    InstructorCourseId = x.InstructorCourse.CourseId,
                    Title = x.Title
                }));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



    }
}
