import LineChart from "../../LineChart";
import BarChart from "../../BarChart";
import SmallButton from "../../SmallButton";

const StatesChart = () => {
  return (
    <>
      <div className="flex justify-between items-center p-[25px]">
        <div className="font-bold text-2xl">GMT Master Batgirl</div>
        <div className="flex mt-[5px] w-[268px] justify-between">
          <SmallButton name="3M" className="bg-[#41528F]" />
          <SmallButton name="6M" />
          <SmallButton name="1Y" />
          <SmallButton name="2Y" />
          <SmallButton name="5Y" />
        </div>
      </div>
      <LineChart>
        <BarChart />
      </LineChart>
    </>
  );
};
export default StatesChart;
