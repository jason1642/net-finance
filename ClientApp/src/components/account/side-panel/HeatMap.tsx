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
    grid: {
        show: false,
    },
    chart: {
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: true,
    },
    xaxis: {
        labels: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        tooltip: {
            enabled: false
        }
    },
    tooltip: {
        followCursor: false,
        theme: 'dark',
        y: {
            title:{
                formatter:  ()=>''
            },
            formatter: (value, {w, seriesIndex, dataPointIndex, series})=>{
                const meta = w.config.series[seriesIndex].data[dataPointIndex].meta
                // console.log(value, w.config.series[seriesIndex].data[dataPointIndex].meta)
                return <p>
                    <span>{meta.date}: </span>
                    {` $${meta.end_of_day_value.toFixed(2)}`}
                </p>
            }
        }
    },

    yaxis: {
        
        reversed: true,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: true,
            maxWidth: 60,
            style: {
                fontSize: '.7em',
                colors: ['white']
            }
        }     
    },
    legend: {
        position: 'top',
        labels: {
            colors: 'white',
        },
    },
   stroke:{
    show: true,
    width: 1,
    colors: ['#ffffffb8']
   },
    plotOptions: {
        heatmap: {
            radius: 0,
            enableShades: false,
            // useFillColorAsStroke: true,            
            colorScale: {
                ranges: [
                    {
                        from: -300,
                        to: -0.00001,
                        color: '#f6560b',
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
                        color: '#00c60a',
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
       options={{...options}}
       series={[
        {
            name: `${dataArray[0].date.slice(0,5)}-${dataArray[6].date.slice(0,5)}`,
            data: dataArray.slice(0,6).map(ele=>{
                return ({
                    x:ele.date,
                    meta: ele,
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
                    x:ele.date,
                    meta: ele,
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
      />
    </Container>
  );
};

export default HeatMap;
