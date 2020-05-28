using System;

namespace Bugtracker.Core.Exceptions
{
    public class ExistantUserException : Exception
    {
        public ExistantUserException() : base() {}
        public ExistantUserException(string message) : base(message) { }
    }
}