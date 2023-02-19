

export interface StockQuotesTypes  {
    _id: string;
    symbol: string;
    short_name: string;
    long_name: string;
    price_change: number;
    price_change_percent: number;
    market_day_high: number;
    market_day_low: number;
    market_open_price: number;
    latest_info_date: number;
    previous_close_price: number;
    current_price: number;
    volume: number;
    quote_type: string;
    market_cap: number;
    bid: number;
    ask: number;
}
