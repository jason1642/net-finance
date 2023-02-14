using System;
using System.Text.Json.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace net_finance.Models;

// For MetaData and DailyTimeSeries class changes, see DailyHistoricData.cs

//public class MetaData
//{
//    [BsonElement("1. Information")]
//    [JsonPropertyName("1. Information")]
//    public string? Information { get; set; }

//    [BsonElement("2. Symbol")]
//    [JsonPropertyName("2. Symbol")]
//    public string?  Symbol { get; set; }

//    [BsonElement("3. Last Refreshed")]
//    [JsonPropertyName("3. Last Refreshed")]
//    public string? LastRefreshed { get; set; }

//    [BsonElement("4. Time Zone")]
//    [JsonPropertyName("4. Time Zone")]
//    public string? TimeZone { get; set; }
//}



public class DailyTimeSeries
{
    [BsonElement("1. open")]
    [JsonPropertyName("1. open")]
    public string? Open { get; set; }

    [BsonElement("2. high")]
    [JsonPropertyName("2. high")]
    public string? High { get; set; }

    [BsonElement("3. low")]
    [JsonPropertyName("3. low")]
    public string? Low { get; set; }

    [BsonElement("4. close")]
    [JsonPropertyName("4. close")]
    public string? Close { get; set; }

    [BsonElement("5. volume")]
    [JsonPropertyName("5. volume")]
    public string? Volume { get; set; }

}



public class DailyHistoricData
{
	//public DailyHistoricData()
	//{

	//}

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? _id { get; set; }



    [BsonElement("symbol")]
    [JsonPropertyName("symbol")]
    public string? symbol { get; set; }


    [BsonElement("Meta Data")]
    [JsonPropertyName("Meta Data")]
    public MetaData? MetaData { get; set; }

    [BsonElement("Time Series (Daily)")]
    [JsonPropertyName("Time Series (Daily)")]
    public Dictionary<string, DailyTimeSeries>? Objects { get; set; }
}


