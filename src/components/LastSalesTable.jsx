import LinkButton from "./LinkButton";

const LastSalesTable = (props) => {
  return (
    <>
      <div className="flex w-[462px]">
        <div className="border-[1px] rounded-2xl border-white w-[100px] h-[100px]"></div>
        <div className="ml-[33px] my-[21.5px]">
          <h3 className="text-2xl font-bold">{props.name}</h3>
          <p className="text-base font-normal">{props.available}</p>
        </div>
      </div>
      <div className="flex justify-between w-[252px]">
        <p className="text-base font-medium my-auto">{props.maxPrice}</p>
        <LinkButton />
      </div>
    </>
  );
};
export default LastSalesTable;
