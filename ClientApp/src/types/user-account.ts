

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
   portfolio: Array<{
    current_account_value: number;
    daily_account_value_history: Array<any>;
    positions: Array<any>;

   }>;   
}