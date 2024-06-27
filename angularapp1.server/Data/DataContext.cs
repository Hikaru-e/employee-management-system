
using Microsoft.EntityFrameworkCore;

namespace AngularApp1.Server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Employee> Employees => Set<Employee>();
    }
}
