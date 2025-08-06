import React from "react";

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-gray-600">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;
