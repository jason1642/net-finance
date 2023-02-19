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
    public int? price_change { get; set; }

    [BsonElement("price_change_percent")]
    [JsonPropertyName("price_change_percent")]
    public int? price_change_percent { get; set; }

    [BsonElement("market_day_high")]
    [JsonPropertyName("market_day_high")]
    public int? market_day_high { get; set; }

    [BsonElement("market_day_low")]
    [JsonPropertyName("market_day_low")]
    public int? market_day_low { get; set; }

    [BsonElement("market_open_price")]
    [JsonPropertyName("maket_open_price")]
    public int? market_open_price { get; set; }

    [BsonElement("latest_info_date")]
    [JsonPropertyName("latest_info_date")]
    public DateTime? latest_info_date { get; set; }

    [BsonElement("previous_close_price")]
    [JsonPropertyName("previous_close_price")]
    public string? previous_close_price { get; set; }

    [BsonElement("current_price")]
    [JsonPropertyName("current_price")]
    public string? current_price { get; set; }

    [BsonElement("volume")]
    [JsonPropertyName("volume")]
    public int? volume { get; set; }

    [BsonElement("quote_type")]
    [JsonPropertyName("quote_type")]
    public string? quote_type { get; set; }

    [BsonElement("market_cap")]
    [JsonPropertyName("market_cap")]
    public string? market_cap { get; set; }

    [BsonElement("bid")]
    [JsonPropertyName("bid")]
    public string? bid { get; set; }

    [BsonElement("ask")]
    [JsonPropertyName("ask")]
    public string? ask { get; set; }
}