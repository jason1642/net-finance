using Microsoft.EntityFrameworkCore;

namespace net_finance.Models;

public class PublicChatContext : DbContext
{
    public PublicChatContext(DbContextOptions<PublicChatContext> options)
        : base(options)
    {
    }

    public DbSet<PublicChat> Users { get; set; } = null!;

}