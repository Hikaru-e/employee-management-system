using AngularApp1.Server.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly DataContext context;

        public EmployeeController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Employee>>> GetEmployees()
        {
            return Ok(await context.Employees.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Employee>>> CreateEmployee(Employee employee)
        {
            context.Employees.Add(employee);
            await context.SaveChangesAsync();
            return Ok(await context.Employees.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<Employee>> UpdateEmployee(Employee employee)
        {
            var dbEmployee = await context.Employees.FindAsync(employee.Id);
            if (dbEmployee == null)
                return BadRequest("Employee not found");

            dbEmployee.FirstName = employee.FirstName;
            dbEmployee.LastName = employee.LastName;
            dbEmployee.Email = employee.Email;
            dbEmployee.PhoneNumber = employee.PhoneNumber;
            dbEmployee.Department = employee.Department;
            dbEmployee.Position = employee.Position;

            await context.SaveChangesAsync();
            return Ok(dbEmployee);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> DeleteEmployee(int id)
        {
            var dbEmployee = await context.Employees.FindAsync(id);
            if (dbEmployee == null)
                return BadRequest("Employee not found");

            context.Employees.Remove(dbEmployee);
            await context.SaveChangesAsync();
            return Ok(dbEmployee);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployeeById(int id)
        {
            var dbEmployee = await context.Employees.FindAsync(id);
            if (dbEmployee == null)
                return NotFound("Employee not found");

            return Ok(dbEmployee);
        }

    }
}

