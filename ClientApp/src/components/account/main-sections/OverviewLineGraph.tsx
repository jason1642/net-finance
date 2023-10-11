import * as React from 'react';
import styled from 'styled-components';
import { ApexOptions } from "apexcharts";
import Chart from 'react-apexcharts'
// import { fetchDailyStockDataSeries } from '../../../api-requests/alphavantage-requests';
import { stockTimeData } from '../../graphs/testOptions';

interface IOverviewLineGraphProps {
    symbol: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid white; */
  margin: 0 auto;
  margin-bottom: 2rem;
  padding-top: 10px;
  width: 100%;
  max-width: 1000px;
  @media (max-width: 485px) {
  /* flex-direction: column; */
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
}
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 2em;
`;
const PortfolioValueNumber = styled.div`
  display: flex;
  margin-top: .5em;
  font-size: 1.25em;
`;

const ValueChangeToday = styled.div`
  color: #21ce9a;
  font-size: .45em;
  margin: 2px 0 2px 0;

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
     background: '#32323e',
     toolbar: {
        show: false,
    },
    zoom: {
        enabled: false,
    }
    
    },
 
   
    tooltip: {
        // enabled: false,
     followCursor: true,
     theme: 'dark',
 
 
 },
 xaxis: {
    type: 'datetime',
    labels: {
        show: false,
        formatter: val => ''
    },
    axisBorder:{
        show: false,
    },
     axisTicks: {
        show: false,
     },
     
 },
 yaxis: {
    labels: {
        show: false,
    }
 },

grid: {
    xaxis: {
        lines: {
            show: false,
        },
    },
    yaxis: {
        lines: {
            show: false,
        },
        
    }
},
dataLabels: {
    enabled: false,
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
    size: 0,
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
const OverviewLineGraph: React.FunctionComponent<IOverviewLineGraphProps> = ({}) => {

    // const [stockDailyData, setStockDailyData] = React.useState<any>(stockTimeData)
    const stockDailyData = stockTimeData
    const stockDates = Object.keys(stockTimeData['Time Series (Daily)']).slice(0, undefined).reverse()
    // const [stockDates, setStockDates] = React.useState<Array<any>>(Object.keys(stockTimeData['Time Series (Daily)']).slice(0, undefined).reverse())



    // React.useEffect(()=>{
        // fetchDailyStockDataSeries(symbol).then(res=>{
        //     setStockDailyData(res.data)
        //     setStockDates(Object.keys(res.data['Time Series (Daily)']).slice(0, 12).reverse())
        //     console.log(stockDailyData, stockDates)
        // })
    // },[])


    


  return (
    <Container>
        <Header>
            <PortfolioValueNumber>$1,196.15</PortfolioValueNumber>
            <ValueChangeToday>
                +5.17 (2.32%) 
                <span style={{color: '#919191'}}>TODAY</span>
            </ValueChangeToday>
            <div style={{fontSize: '.4em'}}>Past 4 months:</div>
        </Header>
          {
              stockDailyData && stockDates &&
              <Chart
                  options={{
                      ...options,
                      xaxis: {
                          labels: { show: false },
                          axisBorder: { show: false },
                          categories: stockDates.map((item: string) => item.split('-').slice(1).join('/'))
                      }
                  }}
                  series={[
                      {
                          name: 'Open Value',
                          data: stockDates.map((item: string) => +(stockDailyData['Time Series (Daily)'][item]['1. open'] * 5).toFixed(2))
                      },
                      {
                          name: 'Close Value',
                          data: stockDates.map((item: string) => +(stockDailyData['Time Series (Daily)'][item]['4. close'] * 5).toFixed(2))
                      }
                  ]}
                  width={"100%"}
                //   height={340}
                //   style={{ borderWidth: 0 }}
              />
          }
    </Container>
  );
};

export default OverviewLineGraph;
