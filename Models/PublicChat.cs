using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace net_finance.Models;







public class SingleMessage
{
    [BsonElement("senderId")]
    [JsonPropertyName("senderId")]
    public string? SenderID { get; set; }

    [BsonElement("message")]
    [JsonPropertyName("message")]
    public string? Message { get; set; }


    [BsonElement("created_at")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime created_at { get; set; }


    // Manually set new updated_at in controllers with - put, create, 
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    [BsonElement("updated_at")]
    public DateTime updated_at { get; set; }
}





public class PublicChat
{
    

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? _id { get; set; }

    [BsonElement("created_at")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime created_at { get; set; }


    // Manually set new updated_at in controllers with - put, create, 
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    [BsonElement("updated_at")]
    public DateTime updated_at { get; set; }

    [BsonElement("messages")]
    [JsonPropertyName("messages")]
    public SingleMessage[]? Messages { get; set; }



}
