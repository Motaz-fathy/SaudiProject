/* eslint-disable react/prop-types */

  const StatCard = ({ number, label }) => {
    return (
      <div className="bg-[#1B3B39]  w-[200px] flex flex-col items-center justify-center h-full min-h-[200px] transition-transform hover:scale-105">
        <div className="text-4xl font-bold text-white mb-3">{number}</div>
        <div className="text-xl font-bold text-[#30eb37]">{label}</div>
      </div>
    );
  };
  
  export default StatCard;