import { useState } from "react";
import SalesProgress from "./SalesProgress";

const Chart = ({ total, description, children }) => {
  return (
    <div className="max-w-[372px] mx-auto">
      <div className="bg-[#1E222F] rounded-xl p-3">
        <div className="text-4xl text-white font-bold my-4">{total}</div>
        <div className="text-white text-sm mb-8">{description}</div>
        <div className="mb-2 bg-[#0A0D10] rounded-[20px]">
            {children }
        </div>
      </div>
    </div>
  );
};

export default Chart;
