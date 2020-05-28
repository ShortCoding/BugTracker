using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Bugtracker.Core.Exceptions;
using Bugtracker.Core.Interfaces;
using Bugtracker.Core.Models;
using Bugtracker.Core.Utility;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Bugtracker.Core.Services
{
    public class UserManagementService : IUserManagementService
    {
        private readonly IRepository<User> _repository;
        private readonly IConfiguration _config;


        private readonly User _user = new User
        {
            Username = "Test", Password = "Password"
        };

        public UserManagementService(IRepository<User> userRepo, IConfiguration config)
        {
            this._repository = userRepo;
            _config = config;
        }

        public string Authenticate(User user)
        {
            if (user.Username != _user.Username || user.Password != _user.Password)
                return "";

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_config["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] 
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString()),
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
  
        }

        public string Logout(User user)
        {
            throw new NotImplementedException();
        }

        public void Register(User user)
        {
            User existingUser = _repository.List(u => user.Username == u.Username).FirstOrDefault();
            if(existingUser != null)
                throw new ExistantUserException("Existing Email or Username. Please try another !");
            
            _repository.Insert(new User
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Username = user.Username,
                Email = user.Email,
                Password = Cryptography.Hash(user.Password)
            });
        }
    }
}