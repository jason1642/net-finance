import React from 'react';
import Footer from './components/footer/Footer'
import Header from './components/header/Header' 
import './App.css';
import MainRoutes from './routes/main-routes';
import {  useVerifyUserQuery } from './redux/features/userApi';
// import { userApi } from './redux/features/userApi';
import axios from 'axios'

const api = axios.create(
  {
    baseURL: "https://mboum-finance.p.rapidapi.com/qu/quote",
    params: {  symbol: 'NFLX',},
    headers: {
      'X-RapidAPI-Key': 'd5a52648b8mshb8acebbe7a07d99p15602bjsn20ab604f4606',
'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
    }
  }
)
const App = () =>{
  const {data, isLoading } = useVerifyUserQuery()

  React.useEffect(()=>{
   
    console.log(data)

    // api.get('').then(res=> {
    //   const{ask, bid, symbol, regularMarketChange, regularMarketChangePercent, regularMarketDayHigh, 
    //     regularMarketDayLow, regularMarketOpen, 
    //     regularMarketPreviousClose, regularMarketPrice,regularMarketVolume,
    //     longName, shortName, regularMarketTime, marketCap, quoteType, 
    //   } = res.data[0]
    //   console.log({
    //     symbol: symbol,
    //     ask: ask, 
    //     bid: bid, 
    //     short_name: shortName,
    //     long_name: longName, 
    //     price_change: regularMarketChange,
    //     price_change_percent: regularMarketChangePercent,
    //     market_day_high: regularMarketDayHigh,
    //     market_day_low: regularMarketDayLow,
    //     market_open_price: regularMarketOpen,
    //     previous_close_price: regularMarketPreviousClose,
    //     lastest_info_date: regularMarketTime.timestamp,
    //     current_price: regularMarketPrice,
    //     volume: regularMarketVolume,
    //     market_cap: marketCap,
    //     quote_type: quoteType,

    //   })
    // }).catch(err=>{
    //   console.log(err)
    // })




  },[
 
    data
  ]) 

 


  return (  
    <div className="App">
       <Header />
       {/* <main> */}
       {!isLoading? 
          <MainRoutes />
          : 
          <div>IS LOADING</div>
      }
       {/* </main> */}
    

      <Footer />
    </div>
  );
}

export default App;
