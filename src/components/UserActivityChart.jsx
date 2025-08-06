import React, { useRef } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import html2canvas from 'html2canvas';

const data = [
  { name: 'Active Users', value: 7000 },
  { name: 'Inactive Users', value: 5500 },
];

const COLORS = ['#10b981', '#9ca3af'];

export default function UserActivityChart({ darkMode }) {
  const chartRef = useRef();

  const downloadChart = () => {
    html2canvas(chartRef.current).then(canvas => {
      const link = document.createElement('a');
      link.download = 'user-activity-chart.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div
      ref={chartRef}
      className={`p-4 rounded-2xl shadow-md relative ${
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
      <button
        onClick={downloadChart}
        className="absolute top-4 right-4 px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ⬇️ Download PNG
      </button>
    </div>
  );
}
