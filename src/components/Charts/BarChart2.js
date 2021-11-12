import React from 'react';
import { Bar } from 'react-chartjs-2';
import './BarChar.css';
const xData = [
  20, 7, 13, 17, 11, 20, 13, 14, 13, 18, 16, 10, 15, 16, 12, 14, 19, 15, 9, 3,
  12, 16, 11, 13, 13, 13, 20, 11, 21, 13, 8,
];
// let bcol = xData.map(colorzone);
// function colorzone(val) {
//   if (
//     val == 18 ||
//     val == 16 ||
//     val == 10 ||
//     val == 15 ||
//     val == 12 ||
//     val == 14 ||
//     val == 19 ||
//     val == 15 ||
//     val == 9 ||
//     val == 3
//   ) {
//     if (val >= 18) return 'rgba(97, 223, 83, 0.62)';
//     else if (val < 18 && val > 12) return 'rgba(83, 104, 223, 0.62)';
//     else return 'rgba(92, 0, 0, 0.62)';
//   } else {
//     return 'rgba(128,128,128)';
//   }
// }

let BarChart2 = (props) => {
  var date = props.date ? props.date : new Date();
  var year = props.date ? props.date.getYear() : 0;
  var month = props.date ? props.date.getMonth() : 2021;
  var sdate = props.date ? props.date.getDate() : 32;
  var edate = props.edate ? props.edate.getDate() : 0;
  var len = new Date(1900 + year, month + 1, 0).getDate();
  console.log('length', len);

  let bcol = [...Array(len + 1).keys()].slice(1).map((e) => {
    if (e >= sdate && e <= edate) {
      return 'rgba(0, 230, 64, 1)';
    } else return 'rgba(0, 0, 0, 0.22)';
  });

  const state = {
    labels: [...Array(len + 1).keys()].slice(1),
    datasets: [
      {
        label: `Day Wise Usage Of ${date.toLocaleString('default', {
          month: 'long',
        })}`,
        backgroundColor: bcol,
        borderColor: 'rgba(35, 85, 48, 0.19)',
        borderWidth: 1,
        barThickness: 10,
        barPercentage: 1,
        data: props.mon,
      },
    ],
  };

  console.log('hi', props.mon ? props.mon.length : 0);
  return (
    <>
      <div className='gstyle'>
        {console.log('i am in')}
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: '24 Hour Machine Effeciency Analysis',
              fontSize: 20,
            },
            legend: {
              display: true,
              text: 'i am fine',
              position: 'right',
            },
            scales: {
              y: {
                suggestedMin: 0,
                max: 24,
                //display: true,
                title: {
                  display: true,
                  text: 'Effective Hours',
                },
                barPercentage: 0.4,
              },
              //   myScale: {
              //     type: "logarithmic",
              //     position: "right", // `axis` is determined by the position as `'y'`
              //   },
              x: {
                title: {
                  display: true,
                  text: 'Days of the Month',
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};
export default BarChart2;
