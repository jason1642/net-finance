import * as React from 'react';
import styled from 'styled-components';
import { ApexOptions } from "apexcharts";
import Chart from 'react-apexcharts'


const calculateChangePercentage = (oldNumber:number, newNumber: number)=> {
    return (((newNumber - oldNumber) / oldNumber) * 100).toFixed(1)
}


interface IHeatMapProps {
    accountValueHistoryData: Array<{
        end_of_day_value: number;
        date: string;
        previous_business_day_value: number;
        previous_business_day_date: string;
    }>;
}




const Container = styled.div`
  display:flex;
  width: 100%;
`;

const options: ApexOptions = {
  chart: {
    background: 'white',
    toolbar: {
        show: false
    }
  },
//  dataLabels: {
//     enabled: false,
//  },
xaxis:{
    labels: {
        show: false
    },
     axisTicks: {
        show: false,
     },
     axisBorder: {
        show: false,
     },
   
},
yaxis:{
    reversed: true,
    axisBorder: {
        show: false,

    },
    axisTicks: {
        show: false,
    },
    labels: {
        show: true,
        style: {
            fontSize: '.7em'
        }
    }
  
},

  plotOptions: {

    heatmap: {
    
        radius: 0,
        enableShades: false,
        // useFillColorAsStroke: true,
        // shadeIntensity: 0,
        colorScale: {
           ranges: [
            {
                from: -300,
                to: -0.00001,
                color: '#ff2727',
                name: 'Loss',
              },
              {
                from: 0,
                to: 0,
                color: '#5e5e5e',
                name: 'No Change',
              },
              {
                from: 0.00001,
                to: 400,
                color: '#04de00',
                name: 'Gain',
              }
           ] 
        }
    }
  }
 }

// Use accountValueHistoryData to display heatmap of gain and loss days. Will be comparing the value of the end of that trading date with 
// the value of the end value of the previous trading day that is provided. Need to convert the different into a percentage
const HeatMap: React.FunctionComponent<IHeatMapProps> = ({accountValueHistoryData: dataArray}) => {

    React.useEffect(()=>{ 
       console.log(dataArray) 
    },[])
  return (
    <Container>
       {/* <div>
        This heat map module will show which days your portfolio has seen an increase or decrease in its total value compared to the previous active day. Show in percentages. Shows the following 
        information: Percent change, number change, color red square if it went down, green if up, grey if neutral. You can hover or click on the legend labels to highlight the days the correspond to that label. This 
        heatmap will show the last x amount of weeks.
        </div> */}

<Chart
       
       options={{
           ...options
       }}
       
       series={[
        {
            name: `${dataArray[0].date.slice(0,5)}-${dataArray[6].date.slice(0,5)}`,
            data: dataArray.slice(0,6).map(ele=>{
                return ({
                    x:'1',
                    // Change percentage formula: 
                    // [(new number - old number) / old number ] * 100%
                    y: calculateChangePercentage(ele.previous_business_day_value, ele.end_of_day_value),
                      
                })
            })
          },
          {
            name: `${dataArray[7].date.slice(0,5)}-${dataArray[13].date.slice(0,5)}`,
            data: dataArray.slice(7,13).map(ele=>{
                return ({
                    x:'2',
                    // Change percentage formula: 
                    // [(new number - old number) / old number ] * 100%
                    y: calculateChangePercentage(ele.previous_business_day_value, ele.end_of_day_value),
                      
                })
            })
          }
          ]}
          type={'heatmap'}
          width={'100%'}
          height={128}
        //   style={{borderWidth: 0}}
      />
    </Container>
  );
};

export default HeatMap;
