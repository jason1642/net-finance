using Microsoft.EntityFrameworkCore;

namespace net_finance.Models;

public class StockQuotesContext : DbContext
{
    public StockQuotesContext(DbContextOptions<StockQuotesContext> options)
        : base(options)
    {
    }

    public DbSet<StockQuotes> StockQuotes { get; set; } = null!;
}