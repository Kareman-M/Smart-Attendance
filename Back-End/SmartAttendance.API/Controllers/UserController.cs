using Microsoft.AspNetCore.Mvc;
using SmartAttendance.API.Models;
using SmartAttendance.DAL.Repository.IRepository;

namespace SmartAttendance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : BaseController
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository) => _userRepository = userRepository;

        [HttpGet, Route("GetAll")]
        public IActionResult Get()
        {
            return Ok(_userRepository.GetAll());
        }

        [HttpPost, Route("Add")]
        public IActionResult Add(AddUser user)
        {
            try
            {
                var result = _userRepository.Add(new DAL.DBModels.User
                {
                    Name = user.Name,
                    Password = user.Password,
                    Removed = false,
                    Role = user.Role.ToLower(),
                    UserName = user.UserName,
                    FirstLogin = true,
                    CurrentlyLogin = false,
                    CreatedAt = DateTime.Now,
                });
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete, Route("Remove/{username}")]
        public IActionResult Remove(string username)
        {
            try
            {
                var result = _userRepository.Remove(username, GetUserId());
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut, Route("UndoRemoved/{username}")]
        public IActionResult UndoRemoved(string username)
        {
            try
            {
                var result = _userRepository.UndoRemoved(username);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut, Route("EditName/{username}/{newname}")]
        public IActionResult EditName(string username, string newname)
        {
            try
            {
                var result = _userRepository.EditName(username, newname);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut, Route("ResetPassowrd/{username}/{newPassowrd}")]
        public IActionResult ResetPassowrd(string username, string newPassowrd)
        {
            try
            {
                var result = _userRepository.ResetPassowrd(username, newPassowrd);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut, Route("ChangePassowrdForFirstLogin/{username}/{newPassowrd}")]
        public IActionResult ChangePassowrdForFirstLogin(string username, string newPassowrd)
        {
            try
            {
                var result = _userRepository.ChangePassowrdForFirstLogin(username, newPassowrd);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
