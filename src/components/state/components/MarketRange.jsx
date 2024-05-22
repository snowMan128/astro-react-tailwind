import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Group A",
      data: [14500, 15000, 14000, 16500, 14000, 15500, 16000, 15000],
      borderColor: "#FF0066",
      backgroundColor: "rgba(255, 0, 102, 0.2)",
      fill: false,
      tension: 0.4,
      pointRadius: 0, // No peak circles
      pointHoverRadius: 0, // No hover effect on points
    },
    {
      label: "Group B",
      data: [14000, 14500, 13500, 13800, 13200, 15000, 15500, 14500],
      borderColor: "#FFC107",
      backgroundColor: "rgba(255, 193, 7, 0.2)",
      fill: false,
      tension: 0.4,
      pointRadius: 0, // No peak circles
      pointHoverRadius: 0, // No hover effect on points
    },
  ],
};
const MarketRangeChart = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: false,
                min: 13000,
                max: 17000,
                ticks: {
                  color: "white",
                  stepSize: 1000, // Setting y-axis interval to 1000
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
              },
              x: {
                ticks: {
                  color: "white",
                  padding: 15,
                },
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  color: "white",
                },
              },
            },
          },
        });
      }
    }
  }, []);
  return (
    <div className="">
      <div className="font-bold text-2xl p-[25px]">
        Market Range
        <br />
        Last 12 M
      </div>
      <div className="w-full h-[238px] p-[25px]">
        <canvas ref={canvasRef}></canvas>
      </div>
      <div className="bg-[#12171D] rounded-b-[25px] h-[188px] w-full p-[25px]">
        <h3 className="mb-2 text-base font-normal text-[#CED8E1] ">
          Good range pricing. Under 15,000€ is a very good pricing.
          <br />
          Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra
          augue. Donec id elit non mi porta gravida at eget metus.
        </h3>
      </div>
    </div>
  );
};
export default MarketRangeChart;
