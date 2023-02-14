import React from 'react';
import Footer from './components/footer/Footer'
import Header from './components/header/Header' 
import './App.css';
import MainRoutes from './routes/main-routes';
import {  useVerifyUserQuery } from './redux/features/userApi';
// import { userApi } from './redux/features/userApi';



const App = () =>{
  const {data, isLoading } = useVerifyUserQuery()

  React.useEffect(()=>{
   
    console.log(data)

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
