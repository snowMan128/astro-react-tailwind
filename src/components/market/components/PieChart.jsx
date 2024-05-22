import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
  const data = {
    labels: [
      "Ebay",
      "MarketWatch",
      "Chronos24",
      "MyWatches",
      "WatchChart",
      "Others",
    ],
    datasets: [
      {
        label: "Watches in the market",
        data: [37.5, 12.5, 12.5, 12.5, 12.5, 12.5],
        backgroundColor: [
          "#FFC403",
          "#3B009A",
          "#560BAD",
          "#7209B7",
          "#B5179E",
          "#F72585",
        ],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="bg-[#0A0D10] p-[25px] rounded-[20px] w-[360px] h-[648px] mt-[23px] ml-[19px]">
      <div className="flex mb-[25px]">
        <img src="icons/Pie1.svg" alt="Logo" className="h-6 mr-2.5 mt-1.5" />
        <div className="text-[19px] font-medium">
          Market Watch Share
          <br />
          around over 100 website
        </div>
      </div>
      <div>
        <div className="text-[#C3D9E1] text-[13px] font-normal">May, 2024</div>
        <div className="text-[15px] font-medium">Watches in the Market</div>
      </div>
      <div className="flex justify-center m-5">
        <div className="w-[224px]">
          <Pie data={data} options={options} />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mt-[45px] mb-[25px]">
          <div>List Countries</div>
          <div className="w-10 h-10 rounded-full bg-[#151A20] flex justify-center items-center">
            <img src="icons/Pie2.svg" alt="List" className="w-5 h-[18px]" />
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          {data.labels.map((label, index) => (
            <div key={index} className="flex items-center">
              <div
              className="rounded"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: data.datasets[0].backgroundColor[index],
                  marginRight: "10px",
                }}
              ></div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PieChart;
