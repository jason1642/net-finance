import axios from 'axios'

const api = axios.create({
    baseURL: 'https://alpha-vantage.p.rapidapi.com/query',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_ALPHAVANTAGE_API_KEY,
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
        
    },
    params: {
        datatype: 'json',
        outputsize: 'compact'
    }
})

// console.log(process.env.REACT_APP_ALPHAVANTAGE_API_KEY)
export const fetchDailyStockDataSeries = async (symbol: string) => 
await api.get(`?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}`).then(res=>res,err=>err)
    
 
