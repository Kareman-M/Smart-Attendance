using Microsoft.AspNetCore.Mvc;
using SmartAttendance.API.Models;
using SmartAttendance.DAL.Repository.IRepository;

namespace SmartAttendance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public AccountController(IUserRepository userRepository) => _userRepository = userRepository;

        [HttpPost, Route("Login")]
        public IActionResult Login(UserLogin user)
        {
            try
            {
                return Ok(_userRepository.Login(user.Username, user.Password));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut, Route("ChangePassowrd/{username}/{newPassowrd}/{oldPassowrd}")]
        public IActionResult ChangePassowrd(string username, string newPassowrd, string oldPassowrd)
        {
            try
            {
                var result = _userRepository.ChangePassowrd(username, newPassowrd, oldPassowrd);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
