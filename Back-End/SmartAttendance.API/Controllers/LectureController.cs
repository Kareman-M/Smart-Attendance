using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmartAttendance.API.Models;
using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.Repository.IRepository;

namespace SmartAttendance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LectureController : ControllerBase
    {
        private readonly ILectureRepository _lectureRepository;
        public LectureController(ILectureRepository lectureRepository)  =>  _lectureRepository  = lectureRepository;

        [HttpGet,Route("Get/{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_lectureRepository.GetByInstructorCourseId(id));
        }

        [HttpPost, Route("Add")]
        public IActionResult Add(AddLucture lucture)
        {
            return Ok(_lectureRepository.Add(new DAL.DBModels.Lucture
            {
                AttendanceGrade = lucture.AttendanceGrade,
                BarCode = lucture.BarCode,
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
            return Ok(_lectureRepository.GetByInstructorId(instructorId));
        }

    }
}
