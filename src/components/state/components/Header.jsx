const Header = () => {
  return (
    <div>
      <div className="border-[1px] border-white w-[50px] h-[50px] rounded-full mb-3.5"></div>
      <h1 className="font-bold text-5xl mb-3.5">GMT Master II</h1>
      <div className="w-[432px] flex justify-between">
        <p className="font-normal text-2xl mr-2.5">GMT-Master II (Batgirl)</p>
        <button className="bg-[#02A52F] w-[152px] h-[32px] m-auto rounded-xl">
            <p className="font-normal text-[10px]">Current Production Model</p>
        </button>
      </div>
    </div>
  );
};
export default Header;
