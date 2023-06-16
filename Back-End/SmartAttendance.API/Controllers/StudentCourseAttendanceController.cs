
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmartAttendance.API.Models;
using SmartAttendance.DAL.Repository.IRepository;

namespace SmartAttendance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentCourseAttendanceController : ControllerBase
    {
        private readonly IStudentCourseAttendanceRepository _studentCourseAttendanceRepository;
        public StudentCourseAttendanceController(IStudentCourseAttendanceRepository studentCourseAttendanceRepository)
        {
            _studentCourseAttendanceRepository = studentCourseAttendanceRepository;
        }

        [HttpPost, Route("Add")]
        public IActionResult Add()
        {
            return Ok(_studentCourseAttendanceRepository.Add(new DAL.DBModels.StudentCourseAttendance
            {

            }));
        }

        [HttpGet, Route("GetLecturesAttendance/{instructorCourseId}")]
        public IActionResult GetLecturesAttendance(int instructorCourseId)
        {
            return Ok(_studentCourseAttendanceRepository.GetStudentCourseAttendance(instructorCourseId)
                .GroupBy(x=> x.Lucture)
                .Select(x=> new 
                {
                    LectureTitle = x.Key.Title,
                    AttendanceGrade = x.Key.AttendanceGrade,
                    LectureDate = x.Key.Date,
                    LectureId = x.Key.Id,
                    Students= x.Select(y =>  new
                    {
                        Id = y.Id,                
                        StudenId = y.StudenId,
                        StudentName =y.StudentName,
                        AttendAt = y.AttendAt
                    })
                }));
        }

        [HttpGet, Route("GetLectureAttendance/{lectureId}")]
        public IActionResult GetLectureAttendance(int lectureId)
        {
            return Ok(_studentCourseAttendanceRepository.GetByLectureId(lectureId));
        }
    }
}
