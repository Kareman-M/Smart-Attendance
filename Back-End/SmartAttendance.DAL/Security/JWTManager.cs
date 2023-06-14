using Microsoft.IdentityModel.Tokens;
using SmartAttendance.DAL.DBModels;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace SmartAttendance.DAL.Security
{
    public class JWTManager
    {
        private const string Secret = "db3OIsj+BXE9NZDy0t8W3TcNekrF+2d/1sFnWG4HnV8TZY30iTOdtVWJG8abWvB1GlOgJuQZdcF2Luqm/hccMw==";
        public string GenerateToken(User user)
        {

            var symmetricKey = Convert.FromBase64String(Secret);
            var tokenHandler = new JwtSecurityTokenHandler();
            var now = DateTime.UtcNow;
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Role, user.Role),
                new Claim(ClaimTypes.Expiration, "20"),
                new Claim(ClaimTypes.Name, user.Name),
                new Claim(ClaimTypes.Email, user.UserName),
            };

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = now.AddDays(Convert.ToInt32(20)),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(symmetricKey), SecurityAlgorithms.HmacSha256Signature)
            };

            var stoken = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(stoken);

        }
    }
}
