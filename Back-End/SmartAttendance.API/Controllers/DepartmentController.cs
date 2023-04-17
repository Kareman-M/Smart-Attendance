using Microsoft.AspNetCore.Mvc;
using SmartAttendance.DAL.DBModels;
using SmartAttendance.DAL.Repository.IRepository;

namespace SmartAttendance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentRepository _departmentRepository;
        public DepartmentController(IDepartmentRepository departmentRepository) => _departmentRepository = departmentRepository;


        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            var data = _departmentRepository.GetAll();
            data.Value = ((IEnumerable<Department>)data.Value).Select(x => new Department
            {
                Id = x.Id,
                Name = x.Name,
                Courses = x.Courses.Select(x => new Course
                {
                    Avilable = x.Avilable,
                    DepartmentId = x.DepartmentId,
                    Id = x.Id,
                    Name = x.Name,
                    Department = new Department
                    {
                        Id = x.Id,
                        Name = x.Name,
                    }
                }).ToList()
            });
            return Ok(data);
        }

        [HttpPost("Add")]
        public IActionResult Add([FromQuery] string departmentName)
        {
            var dept = _departmentRepository.Add(new Department
            {
                Name = departmentName,
            });
            return dept.IsCompleted ? Created("", dept) : Ok(dept);
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            var res = _departmentRepository.Remove(id);
            return Ok(res);
        }
    }
}
