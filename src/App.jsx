import React, { useState } from 'react';
import AISummaryBox from './components/AISummaryBox';
import SalesTrendChart from './components/SalesTrendChart';
import MetricRadarChart from './components/MetricRadarChart';
import BounceRateChart from './components/BounceRateChart';
import UserActivityChart from './components/UserActivityChart';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white min-h-screen p-6' : 'bg-gray-100 text-black min-h-screen p-6'}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">📊 AI-Powered Analytics Dashboard</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white text-sm"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <AISummaryBox darkMode={darkMode} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <SalesTrendChart darkMode={darkMode} />
        <BounceRateChart darkMode={darkMode} />
        <UserActivityChart darkMode={darkMode} />
        <MetricRadarChart darkMode={darkMode} />
      </div>
    </div>
  );
}
