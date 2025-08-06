import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Sample data for different time ranges
const dataByRange = {
  'Last 7 Days': [
    { day: 'Mon', users: 400 },
    { day: 'Tue', users: 700 },
    { day: 'Wed', users: 500 },
    { day: 'Thu', users: 800 },
    { day: 'Fri', users: 600 },
    { day: 'Sat', users: 300 },
    { day: 'Sun', users: 200 },
  ],
  'Last 30 Days': Array.from({ length: 30 }, (_, i) => ({
    day: `Day ${i + 1}`,
    users: Math.floor(Math.random() * 1000),
  })),
};

const ChartComponent = () => {
  const [selectedRange, setSelectedRange] = useState('Last 7 Days');
  const data = dataByRange[selectedRange];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">
          User Activity ({selectedRange})
        </h2>
        <select
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
          className="border p-1 rounded text-sm"
        >
          {Object.keys(dataByRange).map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#6366f1"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
