using Microsoft.AspNetCore.Mvc;

namespace SmartAttendance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        protected int GetUserId()
        {
            string userId = HttpContext.Response.Headers.FirstOrDefault(x => x.Key == "userId").Value;
            if (userId == null) return 0;
            return int.Parse(userId);
        }
    }
}
