import * as React from 'react';
import styled from 'styled-components';
import Chart from 'react-apexcharts'
// import {stockTimeData} from './testOptions'
import './apexChart.css'
import { ApexOptions } from "apexcharts";
import { fetchDailyStockDataSeries } from '../../api-requests/alphavantage-requests';

interface IStockLineGraphProps {
    symbol: string;
}


// const dates = Object.keys(stockTimeData['Time Series (Daily)']).slice(0, 12).reverse()


// console.log(dates)
const Container = styled.div`
  display: flex;
  width: 100%;
  * > {
  }
`;

const options: ApexOptions = {
   chart: {
    id: 'stockLineGraph',
    animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 500,
        animateGradually: {
            enabled: true,
            delay: 100
        },
        dynamicAnimation: {
            enabled: true,
            speed: 300
        }
    },

   },


   tooltip: {
    followCursor: true,
    theme: 'dark',


},
stroke: {
    show: true,
    // curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 2,
    dashArray: 0,      
},
theme: {
    mode: 'dark', 
    palette: 'palette1', 
    monochrome: {
        enabled: false,
        color: '#255aee',
        shadeTo: 'dark',
        shadeIntensity: 0.65
    },
},

   markers: {
    size: 3,
    colors: ['#255aee', '#26cb8a'],
    // strokeColors: '#000000',
    strokeWidth: 0,
    strokeOpacity: 0,
    strokeDashArray: 0,
    fillOpacity: 0,
    discrete: [],
    shape: "circle",
    radius: 4,
    offsetX: 0,
    offsetY: 0,
    onClick: undefined,
    onDblClick: undefined,
    showNullDataPoints: true,
    hover: {
      size: undefined,
      sizeOffset: 2
    }
}

}


const StockLineGraph: React.FunctionComponent<IStockLineGraphProps> = ({symbol}) => {

    const [stockDailyData, setStockDailyData] = React.useState<any>()
    const [stockDates, setStockDates] = React.useState<Array<any>>()
    React.useEffect(()=>{
        fetchDailyStockDataSeries(symbol).then(res=>{
            setStockDailyData(res.data)
            setStockDates(Object.keys(res.data['Time Series (Daily)']).slice(0, 12).reverse())
            console.log(stockDailyData, stockDates)
        })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
    <Container>
       {
        stockDailyData && stockDates && <Chart
       
        options={{
            ...options,
            xaxis: {
            categories: stockDates.map((item: string)=>item.split('-').slice(1).join('/'))
           }
        }}
        series={[
            
            {
                name: 'Open Price',
                data: stockDates.map((item: string)=>Number(stockDailyData['Time Series (Daily)'][item]['1. open']).toFixed(2))
            },
            {
                name: 'Close Price',
                data: stockDates.map((item: string)=>stockDailyData['Time Series (Daily)'][item]['4. close'])
            }
           ]}
           type={'line'}
           width={800}
           style={{borderWidth: 10}}
       />
}
    </Container>
  );
};

export default StockLineGraph;
