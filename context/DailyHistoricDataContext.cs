using Microsoft.EntityFrameworkCore;

namespace net_finance.Models;

public class DailyHistoricDataContext : DbContext
{
    public DailyHistoricDataContext(DbContextOptions<DailyHistoricDataContext> options)
        : base(options)
    {
    }

    public DbSet<DailyHistoricData> DailyHistoricData { get; set; } = null!;
}