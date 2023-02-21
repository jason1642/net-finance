

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


export interface MergedQuoteCompanyData {
    _id: string;
    symbol: string;
    name: string;
    sector: string;
    industry: string;
    website: string;
    description: string;
    ceo: string;
    country: string;
    state: string;
    city: string;
    address: string;
    zip: string;
    phone: string;
    exchange: string;
    employees: number;
    type: string;
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