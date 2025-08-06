import React, { useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import html2canvas from 'html2canvas';

const data = [
  { day: 'Mon', rate: 28 },
  { day: 'Tue', rate: 35 },
  { day: 'Wed', rate: 30 },
  { day: 'Thu', rate: 32 },
  { day: 'Fri', rate: 36 },
  { day: 'Sat', rate: 31 },
  { day: 'Sun', rate: 29 },
];

export default function BounceRateChart({ darkMode }) {
  const chartRef = useRef();

  const downloadChart = () => {
    html2canvas(chartRef.current).then(canvas => {
      const link = document.createElement('a');
      link.download = 'bounce-rate-chart.png';
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
      <h2 className="text-lg font-semibold mb-2">📉 Bounce Rate Over Time</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? '#333' : '#fff',
              color: darkMode ? '#fff' : '#000',
            }}
          />
          <Line
            type="monotone"
            dataKey="rate"
            stroke={darkMode ? '#38bdf8' : '#3b82f6'}
            strokeWidth={2}
          />
        </LineChart>
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
