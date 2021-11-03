import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarChar.css";
const xData = [
  20, 7, 13, 17, 11, 20, 13, 14, 13, 18, 16, 10, 15, 16, 12, 14, 19, 15, 9, 3,
  12, 16, 11, 13, 13, 13, 20, 11, 21, 13, 8,
];
let bcol = xData.map(colorzone);
function colorzone(val) {
  if (
    val == 18 ||
    val == 16 ||
    val == 10 ||
    val == 15 ||
    val == 12 ||
    val == 14 ||
    val == 19 ||
    val == 15 ||
    val == 9 ||
    val == 3
  ) {
    if (val >= 18) return "rgba(97, 223, 83, 0.62)";
    else if (val < 18 && val > 12) return "rgba(83, 104, 223, 0.62)";
    else return "rgba(92, 0, 0, 0.62)";
  } else {
    return "rgb(128,128,128)";
  }
}
const state = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ],
  datasets: [
    {
      label: "Day Wise Usage Of October",
      backgroundColor: bcol,
      borderColor: "rgba(35, 85, 48, 0.19)",
      borderWidth: 1,
      barThickness: 10,
      barPercentage: 1,
      data: [
        20, 18, 13, 17, 10, 20, 13, 14, 13, 18, 16, 10, 15, 16, 12, 14, 19, 15,
        9, 3, 9, 7, 10, 13, 15, 16, 12, 11, 21, 13, 8,
      ],
    },
  ],
};

// export default class BarChart extends React.Component {
//     render() {
//       return (
//         <div>
//           <Bar
//             data={state}
//             options={{
//               title: {
//                 display: true,
//                 text: "Average Rainfall per month",
//                 fontSize: 20,
//               },
//               legend: {
//                 display: true,
//                 position: "right",
//               },
//             }}
//           />
//         </div>
//       );
//     }
//   }
let BarChart2 = () => {
  console.log("hi");
  return (
    <>
      <div className="gstyle">
        {console.log("i am in")}
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "24 Hour Machine Effeciency Analysis",
              fontSize: 20,
            },
            legend: {
              display: true,
              text: "i am fine",
              position: "right",
            },
            scales: {
              y: {
                suggestedMin: 0,
                max: 24,
                //display: true,
                title: {
                  display: true,
                  text: "Effective Hours",
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
                  text: "Days of the Month",
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
