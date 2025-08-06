import React from 'react';

export default function AISummaryBox({ darkMode }) {
  return (
    <div className={`p-4 rounded-2xl shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-lg font-semibold mb-2">🧠 AI Summary</h2>
      <p>
        This dashboard summarizes key user metrics. Total users are steady at 12,500, with 1,134 active sessions. The bounce rate is 32%, showing consistent user engagement. Sales trends are positive, and user activity remains high through the week.
      </p>
    </div>
  );
}
