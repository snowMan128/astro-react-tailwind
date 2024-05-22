import React from 'react';

const data = [
  { month: 'Jan', value: 70 },
  { month: 'Feb', value: 140 },
  { month: 'Mar', value: 120 },
  { month: 'Apr', value: 150 },
  { month: 'May', value: 110 },
  { month: 'Jun', value: 165 },
  { month: 'Jul', value: 100 },
  { month: 'Aug', value: 140 },
  { month: 'Sep', value: 60 },
  { month: 'Oct', value: 120 },
  { month: 'Nov', value: 70 },
  { month: 'Dec', value: 110 }
];

const BarChart = () => {
  return (
    <div className="flex items-end justify-around h-52 w-full p-2.5 box-border rounded-lg bg-backGray">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div 
            className="w-5 mb-1.5 transition-colors ease-in-out duration-300" 
            style={{ 
              height: `${item.value}px`,
              width: '39.07px', 
              backgroundColor: item.month === 'Jun' ? '#6a9af4' : '#ffffff',
              borderRadius: '8px',
            }}
          ></div>
          <span className="text-white text-xs">{item.month}</span>
        </div>
      ))}
    </div>
  );
}

export default BarChart;
