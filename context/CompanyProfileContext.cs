using Microsoft.EntityFrameworkCore;

namespace net_finance.Models;

public class CompanyProfileContext : DbContext
{
    public CompanyProfileContext(DbContextOptions<CompanyProfileContext> options)
        : base(options)
    {
    }

    public DbSet<CompanyProfile> CompanyProfile { get; set; } = null!;
}