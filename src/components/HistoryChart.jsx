import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HistoryChart = () => {
  const { id } = useParams();
  const { response } = useAxios(
    `/coins/${id}/market_chart?vs_currency=usd&days=max`
  );
  console.log(response);

  if (!response) {
    return <div>Loading...</div>;
  }

  const coinChartData = response.prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));
  console.log("CCCCCCCCCCCCCCC", coinChartData);
  const options = {
    responsive: true,
  };
  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMMDD')),
    datasets: [
      {
        label: id,
        data: coinChartData.map(value => value.y),
        borderColor: 'rgb(52, 235, 131)',
        backgroundColor: 'rgb(52, 235, 131)',
        borderWidth: '1',
        pointRadius: '1'


      },
    ],
  };
  // borderColor: 'black',
  // backgroundColor:'slate-500'
  //}
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default HistoryChart;
//fxghdrjd
