using Microsoft.EntityFrameworkCore;

namespace net_finance.Models;

public class ChatRoomContext : DbContext
{
    public ChatRoomContext(DbContextOptions<ChatRoomContext> options)
        : base(options)
    {
    }

    public DbSet<ChatRoom> ChatRoom { get; set; } = null!;

}