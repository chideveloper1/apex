// src/components/CopyTradingStrategies.tsx
export default function CopyTradingStrategies() {
  const strategies = [
    {
      name: "Hero Cup",
      amount: "$15,000.00",
      checked: false,
    },
    {
      name: "Hero Cup",
      amount: "$15,000.00",
      checked: false,
    },
    {
      name: "Mikes Traders",
      amount: "$10,000.00",
      checked: false,
    },
  ];

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">
        Copy Trading Strategies
      </h3>

      <div className="space-y-3">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-slate-750 rounded-lg border border-slate-600"
          >
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#0D26FF] bg-slate-700 border-slate-600 rounded focus:ring-[#0D26FF] focus:ring-2"
                  checked={strategy.checked}
                  onChange={() => {}}
                />
              </div>
              <span className="text-white font-medium">{strategy.name}</span>
            </div>
            <div className="text-right">
              <div className="text-white font-semibold">{strategy.amount}</div>
              <div className="text-xs text-slate-400">plus its Return</div>
            </div>
          </div>
        ))}
      </div>

      {/* No. of Withdrawals at bottom */}
      <div className="mt-6 pt-4 border-t border-slate-700">
        <div className="bg-slate-800 rounded-lg p-3">
          <h3 className="text-sm font-medium text-slate-400 mb-1">
            No. of Withdrawals
          </h3>
          <div className="text-xl font-bold text-white mb-1">0</div>
          <p className="text-xs text-slate-500">Progressive</p>
        </div>
      </div>
    </div>
  );
}
