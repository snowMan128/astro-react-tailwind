import React, { useState } from "react";
import PieChart from "./components/PieChart";
import SmallButton from "../SmallButton";
import MarketTable from "../MarketTable";

const marketData = [
  { name: "Ebay", available: 2938, maxPrice: "16.690 €", minPrice: "14.690 €" },
  {
    name: "WordWideWatch",
    available: 1790,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  {
    name: "SearchWatch",
    available: 1234,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  { name: "SEW", available: 456, maxPrice: "16.690 €", minPrice: "14.690 €" },
  {
    name: "Chronos24",
    available: 234,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  { name: "SEW", available: 456, maxPrice: "16.690 €", minPrice: "14.690 €" },
  {
    name: "Chronos24",
    available: 234,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  {
    name: "WordWideWatch",
    available: 1790,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  { name: "Ebay", available: 2938, maxPrice: "16.690 €", minPrice: "14.690 €" },
  {
    name: "SearchWatch",
    available: 1234,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  { name: "SEW", available: 456, maxPrice: "16.690 €", minPrice: "14.690 €" },
  {
    name: "WordWideWatch",
    available: 1790,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  { name: "Ebay", available: 2938, maxPrice: "16.690 €", minPrice: "14.690 €" },
  {
    name: "SearchWatch",
    available: 1234,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  { name: "SEW", available: 456, maxPrice: "16.690 €", minPrice: "14.690 €" },
  {
    name: "Chronos24",
    available: 234,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  { name: "SEW", available: 456, maxPrice: "16.690 €", minPrice: "14.690 €" },
  {
    name: "Chronos24",
    available: 234,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  {
    name: "WordWideWatch",
    available: 1790,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  { name: "Ebay", available: 2938, maxPrice: "16.690 €", minPrice: "14.690 €" },
  {
    name: "SearchWatch",
    available: 1234,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  { name: "SEW", available: 456, maxPrice: "16.690 €", minPrice: "14.690 €" },
  {
    name: "WordWideWatch",
    available: 1790,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  { name: "Ebay", available: 2938, maxPrice: "16.690 €", minPrice: "14.690 €" },
  {
    name: "SearchWatch",
    available: 1234,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  {
    name: "SearchWatch",
    available: 1234,
    maxPrice: "16.690 €",
    minPrice: "14.690 €",
  },
  { name: "SEW", available: 456, maxPrice: "16.690 €", minPrice: "14.690 €" },
];

const MarketShare = () => {
  const [active, setActive] = useState(1);
  const dataPerPage = 5;
  const totalPages = Math.ceil(marketData.length / dataPerPage);
  const displayedPages = marketData.slice(
    (active - 1) * dataPerPage,
    active * dataPerPage
  );

  const next = () => {
    if (active < totalPages) {
      setActive(active + 1);
    }
  };

  const prev = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };

  return (
    <div className="bg-[#1E222F] text-white rounded-xl flex">
      <div>
        <h2 className="text-3xl font-bold pt-10 pl-10">Market Share (23456)</h2>
        <div className="pt-[23px] pl-[27px] h-[535px]">
          {displayedPages.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-4 py-[18px] bg-[#12141C] rounded-xl mb-2 w-[728px]"
            >
              <MarketTable
                name={item.name}
                available={item.available}
                minPrice={item.minPrice}
                maxPrice={item.maxPrice}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-[18px] mb-[21px]">
          <button
            className={`w-11 h-11 px-4 py-[10px] rounded-lg text-white`}
            onClick={prev}
            disabled={active === 1}
          >
            {"<"}
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((index) => (
            <button
              className={`w-11 h-11 px-4 py-[10px] rounded-lg ${
                active === index ? "bg-[#41528F]" : "bg-[#1E222F]"
              } text-white`}
              key={index}
              onClick={() => setActive(index)}
            >
              {index}
            </button>
          ))}
          <button
            className={`w-11 h-11 px-4 py-[10px] rounded-lg text-white`}
            onClick={next}
            disabled={active === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>
      <PieChart />
    </div>
  );
};

export default MarketShare;
