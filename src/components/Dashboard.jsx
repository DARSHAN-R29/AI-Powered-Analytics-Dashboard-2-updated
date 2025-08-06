import React from "react";
import StatCard from "./StatCard";
import ChartComponent from "./ChartComponent";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <StatCard title="Total Users" value="12,500" />
        <StatCard title="Active Sessions" value="1,134" />
        <StatCard title="Bounce Rate" value="32%" />
      </div>

      <ChartComponent />
    </div>
  );
};

export default Dashboard;
