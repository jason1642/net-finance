using System;
using System.Text.Json.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace net_finance.Models;





public class StockQuotes
{

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? _id { get; set; }


    [BsonElement("symbol")]
    [JsonPropertyName("symbol")]
    public string? symbol { get; set; }

    [BsonElement("short_name")]
    [JsonPropertyName("short_name")]
    public string? short_name { get; set; }

    [BsonElement("long_name")]
    [JsonPropertyName("long_name")]
    public string? long_name { get; set; }

    [BsonElement("price_change")]
    [JsonPropertyName("price_change")]
    [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
    public int? price_change { get; set; }

    [BsonElement("price_change_percent")]
    [JsonPropertyName("price_change_percent")]
    [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
    public int? price_change_percent { get; set; }

    [BsonElement("market_day_high")]
    [JsonPropertyName("market_day_high")]
    [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
    public int? market_day_high { get; set; }

    [BsonElement("market_day_low")]
    [JsonPropertyName("market_day_low")]
    [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
    public int? market_day_low { get; set; }

    [BsonElement("market_open_price")]
    [JsonPropertyName("maket_open_price")]
    [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
    public int? market_open_price { get; set; }

    [BsonElement("latest_info_date")]
    [JsonPropertyName("latest_info_date")]
    public int? latest_info_date { get; set; }

    [BsonElement("previous_close_price")]
    [JsonPropertyName("previous_close_price")]
    [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
    public int? previous_close_price { get; set; }

    [BsonElement("current_price")]
    [JsonPropertyName("current_price")]
    [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
    public int? current_price { get; set; }

    [BsonElement("volume")]
    [JsonPropertyName("volume")]
    public int? volume { get; set; }

    [BsonElement("quote_type")]
    [JsonPropertyName("quote_type")]
    public string? quote_type { get; set; }

    [BsonElement("market_cap")]
    [JsonPropertyName("market_cap")]
    public Int64? market_cap { get; set; }

    [BsonElement("bid")]
    [JsonPropertyName("bid")]
    [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
    public int? bid { get; set; }

    [BsonElement("ask")]
    [JsonPropertyName("ask")]
    [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
    public int? ask { get; set; }

    [BsonElement("ytd_change")]
    [JsonPropertyName("ytd_change")]
    [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
    public int? ytd_change { get; set; }

    [BsonElement("ytd_change_percent")]
    [JsonPropertyName("ytd_change_percent")]
    [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
    public int? ytd_change_percent { get; set; }

    [BsonElement("fifty_two_week_high")]
    [JsonPropertyName("fifty_two_week_high")]
    [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
    public int? fifty_two_week_high { get; set; }

    [BsonElement("fifty_two_week_low")]
    [JsonPropertyName("fifty_two_week_low")]
    [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
    public int? fifty_two_week_low { get; set; }

  
}