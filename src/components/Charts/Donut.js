import { Doughnut } from "react-chartjs-2";
const data = {
  labels: ["Total effective Hours", "Uneffective Hours"],
  datasets: [
    {
      label: "My First Dataset",
      data: [16, 24 - 16],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
      option: {
        cutoutPercentage: 20, //Here for innerRadius. It's already exists
        outerRadius: 60,
      },
    },
  ],
};
let Donut = () => {
  return (
    <>
      <div className="gstyle">
        <Doughnut data={data} />
      </div>
    </>
  );
};
export default Donut;
