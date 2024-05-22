import LinkButton from "../LinkButton";
import SmallButton from "../SmallButton";
import LastSalesTable from "../LastSalesTable";

const lastSales = [
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
];

const LastSales = () => {
  return (
    <div className="text-white">
      <div>
        <div className="flex justify-between pt-[58.5px] pl-[33px]">
          <h2 className="text-[36px] font-bold">LAST SALES</h2>
          <div className="flex mt-[5px] w-[268px] justify-between">
            <SmallButton name="3M" className="bg-[#41528F]" />
            <SmallButton name="6M" />
            <SmallButton name="1Y" />
            <SmallButton name="2Y" />
            <SmallButton name="5Y" />
          </div>
        </div>
        <div className="pt-[29.5px] pl-[21px]">
          {lastSales.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center px-4 py-2 rounded-xl w-[1113px] ${
                index % 2 == 0 ? "bg-[#1E222F]" : "bg-[#12141C]"
              }`}
            >
              <LastSalesTable
                name={item.name}
                available={item.available}
                maxPrice={item.maxPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastSales;
