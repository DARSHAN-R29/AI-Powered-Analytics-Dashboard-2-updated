import React, { useRef } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip
} from 'recharts';
import html2canvas from 'html2canvas';

const data = [
  { metric: 'Speed', value: 85 },
  { metric: 'Engagement', value: 90 },
  { metric: 'Reach', value: 75 },
  { metric: 'Retention', value: 60 },
  { metric: 'Conversion', value: 70 },
];

export default function MetricRadarChart({ darkMode }) {
  const chartRef = useRef();

  const downloadChart = () => {
    html2canvas(chartRef.current).then(canvas => {
      const link = document.createElement('a');
      link.download = 'metrics-overview-chart.png';
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
      <h2 className="text-lg font-semibold mb-2">📈 Metrics Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? '#333' : '#fff',
              color: darkMode ? '#fff' : '#000',
            }}
          />
          <Radar
            name="Metrics"
            dataKey="value"
            stroke={darkMode ? '#60a5fa' : '#3b82f6'}
            fill={darkMode ? '#60a5fa' : '#3b82f6'}
            fillOpacity={0.6}
          />
        </RadarChart>
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
