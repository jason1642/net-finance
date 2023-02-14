using Microsoft.EntityFrameworkCore;

namespace net_finance.Models;

public class MonthlyHistoricDataContext : DbContext
{
    public MonthlyHistoricDataContext(DbContextOptions<MonthlyHistoricDataContext> options)
        : base(options)
    {
    }

    public DbSet<MonthlyHistoricData> MonthlyHistoricData { get; set; } = null!;
}