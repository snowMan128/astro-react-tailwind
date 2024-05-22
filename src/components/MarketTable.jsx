import LinkButton from "./LinkButton";

const MarketTable = (props) => {
  return (
    <>
      <div className="flex w-[311px]">
        <div className="border-[1px] rounded-2xl border-white w-[60px] h-[60px]"></div>
        <div className="ml-[33px]">
          <h3 className="text-2xl font-bold">{props.name}</h3>
          <p className="text-base font-normal">
            Over {props.available} Available
          </p>
        </div>
      </div>
      <div className="">
        <p className="text-base font-medium">
          Max Price {props.maxPrice} <br /> Min Price {props.minPrice}
        </p>
      </div>
      <LinkButton />
    </>
  );
};
export default MarketTable;
