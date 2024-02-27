import React from 'react';
import Footer from './components/footer/Footer'
import Header from './components/header/Header' 
import './App.css';
import MainRoutes from './routes/main-routes';
import {  useVerifyUserQuery } from './redux/features/userApi';
import {  useParams } from 'react-router-dom';
import LoginRegisterHeader from './components/header/LoginRegisterHeader';


const App = () =>{
  // const {data, isLoading } = useVerifyUserQuery()
  const params = useParams();
  const userInfo = useVerifyUserQuery()
  const [pathname, setPathName] = React.useState<string>('')
  React.useEffect(()=>{
    console.log(window.location.pathname)
    setPathName(window.location.pathname)
    console.log(params)
    console.log(userInfo)
    
    // api.get('').then(res=> {
    //   const{ask, bid, symbol, regularMarketChange, regularMarketChangePercent, regularMarketDayHigh, 
    //     regularMarketDayLow, regularMarketOpen, 
    //     regularMarketPreviousClose, regularMarketPrice,regularMarketVolume,
    //     longName, shortName, regularMarketTime, marketCap, quoteType, fiftyTwoWeek
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
    //     latest_info_date: regularMarketTime.timestamp,
    //     current_price: regularMarketPrice,
    //     volume: regularMarketVolume,
    //     market_cap: marketCap,
    //     quote_type: quoteType,

    //   })
    // }).catch(err=>{
    //   console.log(err)
    // })


    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userInfo]) 

  return (  
    <div className="App">
       {
        pathname === ("/login" || "/register") ? 
        <LoginRegisterHeader /> : 
        <Header />} 
       <MainRoutes pathName={pathname}/>

       {/* {!isLoading? 
          <MainRoutes />
          : 
          <div>IS LOADING</div>
      } */}
  
    

      <Footer />
    </div>
  );
}

export default App;
