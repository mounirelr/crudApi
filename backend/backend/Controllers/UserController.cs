using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{



private static List<User> users = new List<User>
        {
            new User { Id = 1, Name = "Alice", Email = "alice@example.com", Phone = "123-456-7890" },
            new User { Id = 2, Name = "Bob", Email = "bob@example.com", Phone = "234-567-8901" },
            new User { Id = 3, Name = "Charlie", Email = "charlie@example.com", Phone = "345-678-9012" },
            new User { Id = 4, Name = "David", Email = "david@example.com", Phone = "456-789-0123" },
            new User { Id = 5, Name = "Eve", Email = "eve@example.com", Phone = "567-890-1234" },
            new User { Id = 6, Name = "Frank", Email = "frank@example.com", Phone = "678-901-2345" },
            new User { Id = 7, Name = "Grace", Email = "grace@example.com", Phone = "789-012-3456" },
            new User { Id = 8, Name = "Hannah", Email = "hannah@example.com", Phone = "890-123-4567" },
            new User { Id = 9, Name = "Ivan", Email = "ivan@example.com", Phone = "901-234-5678" },
            new User { Id = 10, Name = "Judy", Email = "judy@example.com", Phone = "012-345-6789" }
        };


[HttpGet("getUsers")]


public List<User> Get(){

    return users;

}




}