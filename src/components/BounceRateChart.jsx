import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { day: 'Mon', rate: 28 },
  { day: 'Tue', rate: 30 },
  { day: 'Wed', rate: 32 },
  { day: 'Thu', rate: 31 },
  { day: 'Fri', rate: 33 },
  { day: 'Sat', rate: 29 },
  { day: 'Sun', rate: 34 },
];

export default function BounceRateChart({ darkMode }) {
  return (
    <div className={`p-4 rounded-2xl shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-lg font-semibold mb-2">📉 Bounce Rate</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#444' : '#ccc'} />
          <XAxis dataKey="day" stroke={darkMode ? '#ccc' : '#333'} />
          <YAxis stroke={darkMode ? '#ccc' : '#333'} />
          <Tooltip contentStyle={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }} />
          <Bar dataKey="rate" fill="#f97316" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
