import * as React from 'react';
import styled from 'styled-components';
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";



interface ILineGraphPortfolioOverviewProps {
  title: string;
  series: any[];
}


const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #9b9b9b33;
  padding-bottom: 32px;
  align-items: center;
  /* padding: 10px; */
`;

const PanelTitle = styled.h2`
  display:flex;
  font-weight: 300;
  text-align: left;
  /* margin: 0 auto; */
  padding: 0 1.5rem;
  /* width: 100%; */
  /* padding-left: 5rem; */
`;







const options: ApexOptions = {
    chart: {
     id: 'stockPieGraph',
     
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
     background: 'transparent'
     
    },

    labels: ['Technology', 'Energy','Consumer','Materials'],
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        width: 300,
    },

    tooltip: {
      // enabled: false,
     followCursor: true,
     theme: 'dark',
 
 
 },
 dataLabels: {
  enabled: false,
  textAnchor: 'start',
  
  // distributed: true
 },
 plotOptions: {
  pie:{
      donut:{
          size: '82%',
          labels: {show: false}
        },
      
  }
},
 stroke: {
     show: false,     
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
 grid: {
    show: false
 },

//     markers: {
//      size: 0,
//      colors: ['#255aee', '#26cb8a'],
//      // strokeColors: '#000000',
//      strokeWidth: 0,
//      strokeOpacity: 0,
//      strokeDashArray: 0,
//      fillOpacity: 0,
//      discrete: [],
//      shape: "circle",
//     //  radius: 4,
//      offsetX: 0,
//      offsetY: 0,
//      onClick: undefined,
//      onDblClick: undefined,
//      showNullDataPoints: true,
//      hover: {
//        size: undefined,
//        sizeOffset: 2
//      }
//  }
 
 }

const DonutGraphPortfolioOverview: React.FunctionComponent<ILineGraphPortfolioOverviewProps> = ({title, series}) => {
    // const [chartOptions, setChartOptions] = React.useState<any>({
    //     options: {
    //       chart: {
    //         id: "basic-bar",
    //       },
    //       xaxis: {
    //         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    //       }
    //     },
        
    //     series: [
    //       {
    //         name: "series-1",
    //         data: [30, 40, 45, 50, 49, 60, 70, 91]
    //       }
    //     ]
    //   })
 
    return (
    <Container>
            <PanelTitle>{title}</PanelTitle>  


        <Chart
            options={options}
            series={series}
            type={'donut'}
            width={305}
            // style={{borderWidth: 10}}
        />
    </Container>
  );
};

export default DonutGraphPortfolioOverview;
