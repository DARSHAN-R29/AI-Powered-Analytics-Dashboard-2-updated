import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Active Users', value: 7000 },
  { name: 'Inactive Users', value: 5500 },
];

const COLORS = ['#3b82f6', '#e5e7eb'];

export default function UserActivityChart({ darkMode }) {
  return (
    <div
      className={`p-4 rounded-2xl shadow-md ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">👤 User Activity</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? '#333' : '#fff',
              color: darkMode ? '#fff' : '#000',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
