 using System;
using System.Text.Json.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace net_finance.Models;





public class CompanyProfile
{

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? _id { get; set; }


    [BsonElement("symbol")]
    [JsonPropertyName("symbol")]
    public string? symbol { get; set; }

    [BsonElement("name")]
    [JsonPropertyName("name")]
    public string? name { get; set; }

    [BsonElement("sector")]
    [JsonPropertyName("sector")]
    public string? sector { get; set; }

    [BsonElement("industry")]
    [JsonPropertyName("industry")]
    public string? industry { get; set; }

    [BsonElement("website")]
    [JsonPropertyName("website")]
    public string? website { get; set; }


    [BsonElement("description")]
    [JsonPropertyName("description")]
    public string? description { get; set; }

    [BsonElement("ceo")]
    [JsonPropertyName("ceo")]
    public string? ceo { get; set; }

    [BsonElement("country")]
    [JsonPropertyName("country")]
    public string? country { get; set; }

    [BsonElement("state")]
    [JsonPropertyName("state")]
    public string? state { get; set; }

    [BsonElement("city")]
    [JsonPropertyName("city")]
    public string? city { get; set; }

    [BsonElement("address")]
    [JsonPropertyName("address")]
    public string? address { get; set; }

    [BsonElement("zip")]
    [JsonPropertyName("zip")]
    public string? zip { get; set; }

    [BsonElement("phone")]
    [JsonPropertyName("phone")]
    public string? phone { get; set; }

    [BsonElement("employees")]
    [JsonPropertyName("employees")]
    public int? employees { get; set; }

    [BsonElement("exchange")]
    [JsonPropertyName("exchange")]
    public string? exchange { get; set; }

    [BsonElement("type")]
    [JsonPropertyName("type")]
    public string? type { get; set; }
}