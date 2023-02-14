using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace net_finance.Models;





public class Positions
{
    [BsonElement("symbol")]
    public string? symbol { get; set; }

    [BsonElement("average_price")]
    public int average_price { get; set; }

    [BsonElement("total_value")]
    public int total_value { get; set; }

    [BsonElement("type")]
    public string? type { get; set; }
    // stock, call, put, spread, etc

    [BsonElement("sector")]
    public string? sector { get; set; }

    [BsonElement("quantity")]
    public int quantity { get; set; }

}



public class DailyAccountValueHistory
{

    [BsonElement("current_value")]
    public int current_value { get; set; }

    [BsonElement("previous_business_day_value")]
    public int previous_business_day_value { get; set; }

    [BsonElement("previous_business_day_date")]
    public string? previous_business_day_date { get; set; }





}





public class Portfolio
{
  
    [BsonElement("current_account_value")]
    public int current_account_value { get; set; }

    [BsonElement("account_value_history")]
    public DailyAccountValueHistory[]? daily_account_value_history { get; set; }

    [BsonElement("positions")]
    public Positions[] positions { get; set;}

  public Portfolio()
    {
        current_account_value = 0;
        positions = new Positions[0];
        daily_account_value_history = new DailyAccountValueHistory[0];
    }

}


public class OrderHistory
{
    [BsonElement("symbol")]
    public string? symbol { get; set; }

    [BsonElement("currency")]
    public int currency {  get; set;}


    [BsonElement("price")]
    public int price { get; set; }

    [BsonElement("action")]
    public string? action { get; set; }

    [BsonElement("quantity")]
    public int? quantity { get; set; }

    [BsonElement("status")]
    public string? status { get; set;}



}


public class Users
{
   
    // public Users ()
    // {
        
        
    // }
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? _id { get; set; }

    //[BsonDefaultValue(c)]
    
    [BsonElement("created_at")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public DateTime created_at { get; set; }


    // Manually set new updated_at in controllers with - put, create, 
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    [BsonElement("updated_at")]
    public DateTime updated_at { get; set; }


    // Default to no date, re set last online on login or verify; potentially even on message send and more 
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    [BsonElement("last_online")]
    public DateTime last_online { get; set; }


    [BsonElement("first_name")]
    [JsonPropertyName("first_name")]
    public string? first_name { get; set; }

    [BsonElement("last_name")]
    [JsonPropertyName("last_name")]
    public string? last_name { get; set; }

    [BsonElement("username")]
    [JsonPropertyName("username")]
    public string? username { get; set; }

    [BsonElement("email")]
    [JsonPropertyName("email")]
    public string? email { get; set; }

    //[BsonIgnore]
    [JsonPropertyName("password")]
    public string? password { get; set; }

    public string? refresh_token { get; internal set; }


    [BsonDefaultValue(0)]
    [BsonElement("cash")]
    [JsonPropertyName("cash")]
    public int cash { get; set;}

    [BsonElement("portfolio")]
    public Portfolio? portfolio { get; set; }


    //[MapTo("order_history")]
    [BsonElement("order_history")]
    public OrderHistory[]? order_history { get; set; }


 

    }