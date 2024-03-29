﻿namespace net_finance.Models;

public class NetFinanceDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string UsersCollectionName { get; set; } = null!;

    public string? MonthlyHistoricDataCollectionName { get; set; }

    public string? DailyHistoricDataCollectionName { get; set; }

    public string? StockQuotesCollectionName { get; set; }

    public string? CompanyProfileCollectionName { get; set; }

    public string? ChatRoomCollectionName { get; set; }

}