using Bugtracker.Core.Models;

namespace Bugtracker.Core.Interfaces
{
    public interface IUserManagementService : IService
    {
        string Authenticate(User user);
        string Logout(User user);
        void Register(User user);
    }
}