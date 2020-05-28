using System;
using Bugtracker.Core.Interfaces;
using Bugtracker.Core.Models;
using Bugtracker.Core.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Bugtracker.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserController
    {
        private readonly IUserManagementService _service;
        
        public UserController(IUserManagementService service)
        {
            _service = service ?? throw new ArgumentNullException(nameof(service));
        }
        
        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Authenticate([FromBody] User user)
        {
            string token = _service.Authenticate(user);
            if (String.IsNullOrEmpty(token))
                return new ObjectResult(token);
                
            return new UnauthorizedObjectResult(new { message = "Erreur"});
        }
        
        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            try {
                _service.Register(user);
                return new ObjectResult(new { Status = "Success", Message = "Registration done successfully." });
            }
            catch (Exception e)
            {
                return new ObjectResult(new { Status = "Error", e.Message });
            }
            
        }
        
        
        
    }
}