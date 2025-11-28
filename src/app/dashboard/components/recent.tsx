// src/components/RecentInvestments.tsx
export default function RecentInvestments() {
  const tableHeaders = [
    "INSCIENT SELECTED",
    "ANNUAL",
    "CORPORATE",
    "DATE GIVE",
    "STATION",
    "GIVE",
    "OTHER",
  ];

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Recent Investments</h3>
        <button className="text-[#0D26FF] hover:text-[#0a1ecc] text-sm font-medium">
          Show!
        </button>
      </div>

      {/* Table Headers - Exact from screenshot */}
      <div className="grid grid-cols-7 gap-2 mb-4 px-2 py-3 bg-slate-750 rounded">
        {tableHeaders.map((header, index) => (
          <div
            key={index}
            className="text-xs font-medium text-slate-300 uppercase tracking-wide text-center"
          >
            {header}
          </div>
        ))}
      </div>

      {/* No Data Message - Exact text from screenshot */}
      <div className="text-center py-12 border-2 border-dashed border-slate-700 rounded-lg">
        <div className="text-slate-500 mb-3">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <p className="text-slate-400 text-lg font-medium mb-2">
          Not data to show
        </p>
        <p className="text-slate-500 text-sm">
          Start your first investment to see data here
        </p>
      </div>

      {/* Intake section */}
      <div className="mt-6 pt-4 border-t border-slate-700">
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">intake:</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded text-sm transition-colors">
              Filter
            </button>
            <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded text-sm transition-colors">
              Sort
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
