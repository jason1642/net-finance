import * as React from 'react';
import styled from 'styled-components';
import { ApexOptions } from "apexcharts";
import Chart from 'react-apexcharts'

interface IHeatMapProps {
    accountValueHistoryData: Array<{
        end_of_day_value: number;
        date: string;
        previous_business_day_value: number;
        previous_business_day_date: string;
    }>;
}

const seriesData = [ 
    {
        name: "09/05/2023",
        x: 'w1',
        y: 32
    }
]


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
    // type: ''
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
                from: -30,
                to: -0.01,
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
                from: 0.01,
                to: 100,
                color: '#04de00',
                name: 'Gain',
              }
           ] 
        }
    }
  }
 }


const HeatMap: React.FunctionComponent<IHeatMapProps> = ({accountValueHistoryData}) => {

    React.useEffect(()=>{ 
       console.log(accountValueHistoryData) 
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
            name: "09/18-09/22",
            data: [{
              x: 'W1',
              y: 22
            }, {
              x: 'W2',
              y: 29
            }, {
              x: 'W3',
              y: 13
            }, {
              x: 'W4',
              y: -30
            }, {
                x: 'W4',
                y: 43
              }, {
                x: 'W4',
                y: 43
              }, {
                x: 'W4',
                y: 43
              }]
          },
          {
            name: "Series 2",
            data: [{
              x: 'W1',
              y: -1
            }, {
              x: 'W2',
              y: 1
            }, {
              x: 'W3',
              y: 0
            }, {
              x: 'W4',
              y: 43
            }, {
                x: 'W4',
                y: 43
              }, {
                x: 'W4',
                y: 43
              }, {
                x: 'W4',
                y: 0
              }]
          }
          ]}
          type={'heatmap'}
        //   width={750}
          height={150}
          style={{borderWidth: 0}}
      />
    </Container>
  );
};

export default HeatMap;
