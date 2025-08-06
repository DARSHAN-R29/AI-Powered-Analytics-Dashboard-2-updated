import React, { useRef } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

const data = [
  { month: 'Jan', sales: 400 },
  { month: 'Feb', sales: 600 },
  { month: 'Mar', sales: 750 },
  { month: 'Apr', sales: 500 },
  { month: 'May', sales: 800 },
  { month: 'Jun', sales: 700 },
];

export default function SalesTrendChart({ darkMode }) {
  const chartRef = useRef(null);

  const downloadPNG = () => {
    const svg = chartRef.current?.container?.children[0];
    if (!svg) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const img = new Image();
    const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    img.onload = () => {
      canvas.width = svg.clientWidth;
      canvas.height = svg.clientHeight;
      context.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      const a = document.createElement('a');
      a.href = canvas.toDataURL('image/png');
      a.download = 'sales-trend-chart.png';
      a.click();
    };
    img.src = url;
  };

  return (
    <div className={`p-4 rounded-2xl shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">📈 Sales Trend</h2>
        <button onClick={downloadPNG} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">⬇️ Download PNG</button>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} ref={chartRef}>
          <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#444' : '#ccc'} />
          <XAxis dataKey="month" stroke={darkMode ? '#ccc' : '#333'} />
          <YAxis stroke={darkMode ? '#ccc' : '#333'} />
          <Tooltip contentStyle={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }} />
          <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
