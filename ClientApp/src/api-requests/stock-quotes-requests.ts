import axios from 'axios'
import type { StockQuotesTypes } from '../types/stock-quotes'

const api = axios.create(
    {baseURL: process.env.NODE_ENV === 'production' ?
    'https://netfinance.azurewebsites.net/api' 
    :'https://localhost:7108/api',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}
)


export const getAllStockQuotes = async () => 
    await api.get('/StockQuotes').then(res=>{
        console.log(res)
        return res
    }, err=> err)


export const getQuoteBySymbol = async (symbol: string)=>
    await api.get(`/StockQuotes/${symbol}`).then(res=>{
        console.log(res)
        return res.data
    }, err=>{ 
        console.error(err)
    })