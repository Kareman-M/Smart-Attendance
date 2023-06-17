using SmartAttendance.DAL.DBModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartAttendance.DAL.Security
{
    public interface IJWTManager
    {
        public string GenerateToken(User user);
    }
}
