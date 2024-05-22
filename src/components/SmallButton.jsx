import React from "react";

const SmallButton = (props) => {
  return <button className={`w-11 h-11 rounded-lg ${props.className}`}>{props.name}</button>;
};

export default SmallButton;
