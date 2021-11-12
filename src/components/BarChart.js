import React from 'react';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
// import './BarChar.css';
import axios from 'axios';
import { Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';
import { red } from '@mui/material/colors';
// Chart.defaults.set('plugins.datalabels', {
//   color: '#FE777B',
// });

let a;
const socket = io('http://localhost:8008', {
  transports: ['websocket', 'polling'],
});

// .then(function ()npm start
//  {
//   // always executed
// });

const xData = [
  40, 30, 50, 40, 10, 20, 30, 40, 43, 38, 36, 10, 15, 16, 32, 40, 49, 43, 44,
  32, 27, 15, 18,
];
let bcol = xData.map(colorzone);
function colorzone(val) {
  if (val >= 40) return 'rgba(97, 223, 83, 0.62)';
  else if (val < 40 && val > 25) return 'rgba(83, 104, 223, 0.62)';
  else return 'rgba(92, 0, 0, 0.62)';
  return '';
}
let BarChart = (props) => {
  socket.emit('times', {
    date: props.sdate.getDate(),
    month: props.sdate.getMonth(),
    year: props.sdate.getYear(),
    edate: props.edate ? props.edate.getDate() : props.sdate.getDate(),
    emonth: props.edate ? props.edate.getMonth() : props.sdate.getMonth(),
    eyear: props.edate ? props.edate.getYear() : props.sdate.getYear(),
    diff:
      props.edate && props.sdate < props.edate
        ? (props.edate.getTime() - props.sdate.getTime()) / 86400000 + 1
        : 1,
  });
  var titles = props.edate
    ? `Hour-Wise Usage from ${props.sdate.getDate()} to ${props.edate.getDate()}`
    : `Hour-Wise Usage of ${props.sdate.getDate()} `;
  console.log(props.sdate);
  const [data, setData] = useState([[]]);
  var state = {
    labels: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
    ],
    datasets: [
      {
        label: titles,
        backgroundColor: bcol,
        borderColor: 'rgba(35, 85, 48, 0.19)',
        borderWidth: 1,
        barThickness: 15,
        barPercentage: 1,
        data: [...data],
      },
    ],
  };
  // 1. listen for a cpu event and update the state
  useEffect(() => {
    socket.on('cpu', async (cpuPercent) => {
      setData((currentData) => [
        ...cpuPercent.value.map((x) => {
          return Math.round(x);
        }),
      ]);
    });
  }, []);

  return (
    <>
      <div className='gstyle'>
        {console.log('i am in ')}
        <Bar
          data={state}
          plugins={[ChartDataLabels]}
          options={{
            animations: {
              delay: 2000,
              tension: {
                duration: 5000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true,
              },
            },
            plugins: {
              datalabels: {
                display: true,
                color: 'red',
                align: 'end',
                anchor: 'end',
                borderRadius: 5,
                font: {
                  size: 10,
                  family: 'Helvetica',
                },
                width: 10,
              },
            },
            // title: {
            //   display: true,
            //   text: '24 Hour Machine Effeciency Analysis ${props.sdate} ',
            //   fontSize: 20,
            // },
            legend: {
              display: false,
            },
            scales: {
              y: {
                suggestedMin: 0,
                suggestedMax: 60,
                //display: true,
                title: {
                  display: true,
                  text: `effective minutes ${props.sdate.getDate()} `,
                },
              },
              x: {
                title: {
                  display: true,
                  text: 'Hours of The day',
                },
              },
            },
          }}
        />
        {console.log('hiiii', Object.values(data))}
        {/* <h1>Real Time CPU Usage from {props.sdate} to {props.edate} </h1>
      <LineChart width={500} height={300} data={data.length >10? data.slice(-10):data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value"
      </LineChart> */}
      </div>
    </>
  );
};

export default BarChart;
