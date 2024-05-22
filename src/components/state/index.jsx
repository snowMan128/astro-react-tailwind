import React from "react";
import States from "./components/States";
import Header from "./components/Header";
import TotalPrice from "./components/TotalPrice";
import AuthNum from "../AuthNum";
import SalesProgress from "./components/SalesProgress";
import MarketRangeChart from "./components/MarketRange";
import StatesChart from "./components/StatesChart";

const State = () => {
  return (
    <div className="w-[1150px] text-white">
      <div className="flex justify-between">
        <div className="w-[600px]">
          <div className="w-[494px] h-9"></div>
          <div className="my-[46px]">
            <Header />
          </div>
          <TotalPrice
            title="Retail Price"
            description="Price from authorized dealer"
            color="#7693FF"
            total="10.950€"
            date="as April 2024"
          />
          <div className="my-3">
            <TotalPrice
              title="Market Price"
              description="Our pre-owned price estimate"
              color="#02A52F"
              total="15.950€"
              date="+4,30% today"
            />
          </div>
          <div className="mt-3 h-[667px] rounded-[20px] bg-[#0A0D10]">
            <StatesChart />
          </div>
        </div>
        <div className="w-[532px]">
          <div className="w-[400px] h-[689px] mb-[23px] mx-[66px]">
            <div className="w-[400px] h-[600px] mb-1.5"></div>
            <div className="ml-9 flex w-[324px] justify-between">
              <AuthNum />
              <AuthNum />
              <AuthNum />
              <AuthNum />
              <AuthNum />
            </div>
          </div>
          <div className="w-[532px] bg-[#1E222F] rounded-xl">
            <div className="font-medium text-base px-4 py-6">
              The Rolex 126710BLNR is a watch model from the Rolex brand
              and GMT-Master collection. As of May 2024, the average price of
              the Rolex GMT-Master II (126710BLNR) on the private sales market
              is €15,159, while you can expect to pay €16,244 from a secondary
              market dealer.
              <br />
              <br />
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Nulla vitae elit libero, a pharetra augue. Vestibulum id
              ligula porta felis euismod semper.
              <br />
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Nulla vitae elit libero, a pharetra augue. Vestibulum id
              ligula porta felis euismod semper.Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Nulla vitae elit libero, a
              pharetra augue.
            </div>
            <div className="flex justify-between w-[493px] ml-4">
              <div className="w-[224px] flex justify-between mb-[18px]">
                <button className="bg-[#00202D] h-[37px] text-sm rounded-xl p-2">
                  Steel
                </button>
                <button className="bg-[#00202D] h-[37px] text-sm rounded-xl p-2">
                  40mm
                </button>
                <button className="bg-[#00202D] h-[37px] text-sm rounded-xl p-2">
                  100meters
                </button>
              </div>
              <a href="#" className="text-[#7693FF]">
                <u>all specs</u>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-[41px]">
        <States total="4500" description="Number of Sales (12 M)">
          <SalesProgress />
        </States>
        <States total="€ 14,386 - €15,932" description="Market Range ">
          <MarketRangeChart />
        </States>
        <States total="5,6%" description="Market Volatility" />
      </div>
    </div>
  );
};

export default State;
