import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { metric: 'Engagement', value: 85 },
  { metric: 'Retention', value: 70 },
  { metric: 'Conversion', value: 65 },
  { metric: 'Satisfaction', value: 90 },
  { metric: 'Performance', value: 75 },
];

export default function MetricRadarChart({ darkMode }) {
  return (
    <div
      className={`p-4 rounded-2xl shadow-md ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">🎯 Metrics Overview</h2>
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart data={data}>
          <PolarGrid stroke={darkMode ? '#444' : '#ccc'} />
          <PolarAngleAxis
            dataKey="metric"
            stroke={darkMode ? '#ccc' : '#333'}
          />
          <Radar
            dataKey="value"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
