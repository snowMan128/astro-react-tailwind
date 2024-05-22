import React, { useState } from "react";

const years = [2021, 2022, 2023, 2024];
const months = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];

const SalesProgress = () => {
  const [selectedYear, setSelectedYear] = useState(2021);
  return (
    <>
      <div className="px-6">
        <div className="py-6 flex justify-between">
          <div>
            <div className="text-[28px] font-bold m-auto text-white">
              Sales this Month
            </div>
            <div className="text-[#CED8E1] text-[16px] my-2.5">
              263 Sales in the last year
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#151A20] flex justify-center items-center">
            <img src="icons/Option.svg" alt="Setting" />
          </div>
        </div>
        <div className="flex space-x-2">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-3 py-1 rounded-full text-xs font-normal ${
                selectedYear === year
                  ? "bg-[#3DE4ED]"
                  : "text-white border-2 border-[#3DE4ED]"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
        <p className="text-xs text-[#CED8E1] text-[16px] my-3">
          Minim dolor in amet nulla laboris enim dolore consequatt.
        </p>
        <div className="flex mb-4 justify-between">
          {months.map((month) => (
            <div key={month} className="text-sm text-white">
              {month}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12 gap-2 mb-4">
          {Array(12 * months.length)
            .fill(0)
            .map((_, idx) => {
              const randomValue = Math.floor(Math.random() * 4); // Generate a random integer between 0 and 3
              const className = `h-4 w-4 rounded-[1px] ${
                randomValue === 0
                  ? "bg-[#00202D]"
                  : randomValue === 1
                  ? "bg-[#003246]"
                  : randomValue === 2
                  ? "bg-[#007C84]"
                  : "bg-[#A3FECC]"
              }`;
              return <div key={idx} className={className} />;
            })}
        </div>
        <div className="mb-4 flex font-normal text-xs">
          <a href="#" className="underline text-[#5BFFAA] w-1/2">
            Learn how we <br /> count contributions
          </a>
          <div className="flex justify-between mt-2 text-white w-1/2">
            <span>Less</span>
            <div className="h-3 w-3 bg-[#00202D] rounded-[1px] mt-0.5"></div>
            <div className="h-3 w-3 bg-[#003246] rounded-[1px] mt-0.5"></div>
            <div className="h-3 w-3 bg-[#007C84] rounded-[1px] mt-0.5"></div>
            <div className="h-3 w-3 bg-[#A3FECC] rounded-[1px] mt-0.5"></div>
            <span>More</span>
          </div>
        </div>
      </div>
      <div className="mx-[10px] mt-[35px]">
        <button className="w-[330px] py-2 bg-gradient-three-color rounded-lg mb-[28px]">
          Show more activity
        </button>
      </div>
    </>
  );
};

export default SalesProgress;
