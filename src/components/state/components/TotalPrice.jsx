import React from "react";

const TotalPrice = (props) => {
const colorStyle = { color: props.color };

    return (
        <div className="rounded-xl w-full h-[88px] bg-[#1E222F] flex justify-between">
            <div className="my-auto ml-4">
                <h1 className="font-bold text-xl">{props.title}</h1>
                <p className="font-normal text-sm">{props.description}</p>
            </div>
            <div style={colorStyle} className="mr-4 my-auto">
                <h1 className='font-bold text-[32px]'>{props.total}</h1>
                <p className='font-medium text-sm'>{props.date}</p>
            </div>
        </div>
    );
};
export default TotalPrice;