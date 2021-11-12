import { Doughnut } from 'react-chartjs-2';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

let a;
const socket = io('http://localhost:8008/', {
  transports: ['websocket', 'polling'],
});
let Donut2 = (props) => {
  console.log('hio', props.val);
  const [data, setData] = useState([[]]);
  const state = {
    labels: ['Total effective Hours', 'Uneffective Hours'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [
          props.val[0] ? props.val[0].mtol : 0,
          props.val[0] ? props.val[0].mlen * 24 - props.val[0].mtol : 0,
        ],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
        option: {
          cutoutPercentage: 20, //Here for innerRadius. It's already exists
          outerRadius: 60,
        },
      },
    ],
  };
  useEffect(() => {
    socket.on('cpu', async (cpuPercent) => {
      setData((currentData) => [cpuPercent.sum]);
    });
  }, []);
  return (
    <>
      <div className='gstyle'>
        <Doughnut data={state} />
      </div>
    </>
  );
};
export default Donut2;
