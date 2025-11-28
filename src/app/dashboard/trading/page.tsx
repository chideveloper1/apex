// src/components/CopyTradingPage.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function CopyTradingPage() {
  const [isVerified, setIsVerified] = useState(false);
  const [userType, setUserType] = useState<"investor" | "strategy" | null>(
    null
  );

  const strategies = [
    {
      id: 1,
      name: "Crypto Bull",
      expert: "John Crypto",
      profit: "+24.5%",
      risk: "Medium",
      followers: "1.2K",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Forex Master",
      expert: "Sarah Forex",
      profit: "+18.2%",
      risk: "Low",
      followers: "890",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Stock Pro",
      expert: "Mike Stocks",
      profit: "+32.1%",
      risk: "High",
      followers: "2.1K",
      rating: 4.9,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold text-white mb-4">Copy Trading</h1>
          <Link href="/dashboard/trading/strategies">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200">
              GET STARTED
            </button>
          </Link>
        </div>
        <p className="text-xl text-slate-300 mb-8">A5 Strategies</p>
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            You don't need to be an expert to earn like one. Or spend hours in
            front of the charts. At least, not anymore! Just follow the experts
            and complete tracking or get up to 50% profit share for your own
            strategies for others to follow!
          </p>

          <div className="flex justify-center items-center space-x-8 text-slate-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Terms & conditions Apply</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Expert Training</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Left Column - Strategies */}
        <div className="space-y-8">
          {/* Featured Strategies */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">
              Featured Strategies
            </h2>
            <div className="space-y-4">
              {strategies.map((strategy) => (
                <div
                  key={strategy.id}
                  className="bg-slate-700 rounded-xl p-4 hover:bg-slate-600 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {strategy.name}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        by {strategy.expert}
                      </p>
                    </div>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {strategy.profit}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">
                      Risk: {strategy.risk}
                    </span>
                    <span className="text-slate-400">
                      {strategy.followers} followers
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-white">{strategy.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learn More Section */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              Learn more from them
            </h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📚</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Beginner's Guide</h4>
                  <p className="text-slate-400 text-sm">
                    Learn the basics of copy trading
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">
                    Advanced Strategies
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Master professional techniques
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📊</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Market Analysis</h4>
                  <p className="text-slate-400 text-sm">
                    Daily insights and updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Action Section */}
        <div className="space-y-8">
          {/* Verification Card */}
          {!isVerified && (
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">
                It's time to take action
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">1</span>
                  </div>
                  <span className="font-medium">Verify your account</span>
                </div>
                <button
                  onClick={() => setIsVerified(true)}
                  className="w-full bg-white text-orange-600 py-3 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors"
                >
                  Verify Account
                </button>
              </div>
            </div>
          )}

          {/* User Type Selection */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">
              Sign up as an Investor or a Strategy Manager
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setUserType("investor")}
                className={`p-6 rounded-xl border-2 transition-all ${
                  userType === "investor"
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-slate-600 bg-slate-700 hover:border-slate-500"
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Investor
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Follow successful strategies and copy expert trades
                    automatically
                  </p>
                </div>
              </button>

              <button
                onClick={() => setUserType("strategy")}
                className={`p-6 rounded-xl border-2 transition-all ${
                  userType === "strategy"
                    ? "border-green-500 bg-green-500/10"
                    : "border-slate-600 bg-slate-700 hover:border-slate-500"
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Strategy Manager
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Share your strategies and earn up to 50% profit share
                  </p>
                </div>
              </button>
            </div>

            {/* Get Started Button */}
            {userType && (
              <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-200">
                GET STARTED AS{" "}
                {userType === "investor" ? "INVESTOR" : "STRATEGY MANAGER"}
              </button>
            )}
          </div>

          {/* Profit Share Banner */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">
              Or Earn Up to 50% Profit Share
            </h2>
            <h3 className="text-xl font-semibold mb-4 opacity-90">
              from Your Strategies
            </h3>
            <p className="text-blue-100 mb-4">
              Share your trading strategies with our community and earn
              competitive profit shares when others copy your successful trades.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Real-time performance tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Transparent fee structure</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg">
          GET STARTED WITH A5 STRATEGIES
        </button>
      </div>
    </div>
  );
}
