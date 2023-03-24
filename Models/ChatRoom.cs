using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace net_finance.Models;







public class SingleMessage
{

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? _id { get; set; }

    [BsonElement("sender_id")]
    [JsonPropertyName("sender_id")]
    public string? sender_id { get; set; }

    [BsonElement("message")]
    [JsonPropertyName("message")]
    public string? message { get; set; }


    [BsonElement("created_at")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime created_at { get; set; }


    // Manually set new updated_at in controllers with - put, create, 
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    [BsonElement("updated_at")]
    public DateTime updated_at { get; set; }
}





public class ChatRoom
{
    

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? _id { get; set; }

    [BsonElement("room_name")]
    [JsonPropertyName("room_name")]
    public string? room_name { get; set; }

    [BsonElement("created_at")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime created_at { get; set; }


    // Manually set new updated_at in controllers with - put, create, 
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    [BsonElement("updated_at")]
    public DateTime updated_at { get; set; }

    [BsonElement("messages")]
    [JsonPropertyName("messages")]
    public SingleMessage[]? messages { get; set; }



}
