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
            return Ok(_departmentRepository.GetAll());
        }

        [HttpPost("Add")]
        public IActionResult Add(string departmentName)
        {
            var dept = _departmentRepository.Add(new Department
            {
                Name = departmentName,
            });
            return Created("", dept);
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            var res = _departmentRepository.Remove(id);
            return Ok(res);
        }
    }
}
