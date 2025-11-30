import Link from "next/link";

// src/components/InvestmentPlans.tsx
export default function InvestmentPlans({ wallet }: { wallet: any }) {
  const investmentPlans = [
    {
      name: "Basic",
      amount: "$5000.00",
      maxInvest: "$24,999.00",
      reward: "+10%",
      duration: "Daily",
      // features: ["Reward: +10%", "Duration: 30 Days"],
    },
    {
      name: "Rookie",
      amount: "$25,000.00",
      maxInvest: "$49,999.00",
      reward: "+15%",
      duration: "Daily",
      // features: ["Reward: +15%", "Duration: 30 Days"],
    },
    {
      name: "Standard",
      amount: "$50,000.00",
      maxInvest: "$99,999.00",
      reward: "+20%",
      duration: "Daily",
      // features: ["Reward: +20%", "Duration: 30 Days"],
    },
    {
      name: "Premium",
      amount: "$100,000.00",
      maxInvest: "$399,999.00",
      reward: "+25%",
      duration: "Daily",
      // features: ["Reward: +25%", "Duration: 30 Days"],
    },
    {
      name: "Ultimate",
      amount: "$400,000.00",
      maxInvest: "$99,999,999,999.00",
      reward: "+30%",
      duration: "Daily",
      // features: ["Reward: +30%", "Duration: 30 Days"],
    },
  ];

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Investment Plans</h2>
        <p className="text-slate-300 leading-relaxed">
          Quantrix Markets provides investors with knowledge about investments
          and about how they can take advantage of the financial industry
          freely, as part of our values.
        </p>
      </div>

      {/* Warning Note */}
      {wallet?.balance < 25000 && (
        <div className="bg-amber-900 border border-amber-700 rounded-lg p-4 mb-8">
          <p className="text-amber-200 text-sm">
            <strong>Note:</strong> You cannot make any investment now because
            you do not have sufficient balance in your wallet.{" "}
            <Link
              href="/dashboard/wallet"
              className="text-amber-100 underline hover:text-white"
            >
              Top up wallet now
            </Link>
          </p>
        </div>
      )}

      {/* Investment Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {investmentPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-slate-750 rounded-lg border border-slate-600 p-6 hover:border-slate-500 transition-colors"
          >
            {/* Plan Header */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-2xl font-bold text-green-400 mb-1">
                {plan.amount}
              </div>
              <p className="text-slate-400 text-sm">
                Maximum Invest: {plan.maxInvest}
              </p>
            </div>

            {/* Reward Percentage */}
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-amber-400">
                {plan.reward}
              </div>
            </div>

            {/* Features */}
            {/* <div className="space-y-3 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>
              ))}
            </div> */}

            {/* Action Button */}
            {wallet?.balance < 25000 && (
              <Link href="/dashboard/wallet">
                <button className="w-full bg-blue-600 hover:bg-[#0a1ecc] text-white py-3 rounded-lg font-semibold transition-colors">
                  Top Up Wallet
                </button>
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="mt-8 pt-6 border-t border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-slate-750 rounded-lg p-4">
            <div className="text-green-400 text-2xl font-bold mb-2">24/7</div>
            <div className="text-slate-300 text-sm">Support Available</div>
          </div>
          <div className="bg-slate-750 rounded-lg p-4">
            <div className="text-blue-400 text-2xl font-bold mb-2">Secure</div>
            <div className="text-slate-300 text-sm">Encrypted Transactions</div>
          </div>
          <div className="bg-slate-750 rounded-lg p-4">
            <div className="text-purple-400 text-2xl font-bold mb-2">
              Instant
            </div>
            <div className="text-slate-300 text-sm">Withdrawals</div>
          </div>
        </div>
      </div>
    </div>
  );
}
