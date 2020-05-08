using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Bugtracker.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TrackerController : ControllerBase
    {
        private readonly ILogger<TrackerController> _logger;

        public TrackerController(ILogger<TrackerController> logger)
        {
            _logger = logger;
        }
        
    }
}