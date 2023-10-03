

export interface UserAccountTypes  {
   _id: string;
   first_name: string;
   last_name: string;
   username: string;
   last_online: Date;
   created_at: Date;
   updated_at: Date;
   email: string;
   refresh_token: string;
   cash: number;




   order_history: Array<{
    action: string;
    created_at: Date;
    currency: any;
    price: number;
    quantity: number;
    status: string;
    symbol: string;
    updated_at: Date;
   }>;
   portfolio:{
    current_account_value: number;
    daily_account_value_history: Array<{
        end_of_day_value: number;
        date: string;
        previous_business_day_value: number;
        previous_business_day_date: string;
    }>;
    positions: Array<any>;

   };   
}



export interface OrderHistoryItemTypes {
    action: string;
    created_at: Date;
    currency: any;
    price: number;
    quantity: number;
    status: string;
    symbol: string;
    updated_at: Date;
}