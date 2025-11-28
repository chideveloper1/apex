// src/app/trading-tools/page.tsx
"use client";

import Image from "next/image";

// Tool data with placeholder images
const tools = [
  {
    id: 1,
    title: "Trade Copier",
    url: "https://apextradefundings.com/en/trading-tools#?R=https://apexinvesting.com/ninjatrader-8-trade-copier-for-multiple-accounts/",
    description: "Trade Multiple Accounts With A Single Click",
    image: "/image/1.png",
  },
  {
    id: 2,
    title: "Tick Strike",
    url: "https://apextradefundings.com/en/trading-tools#?R=https://apexinvesting.com/tickstrike",
    description: "Hear and Read Market Order Flow With Tick Strike",
    image: "/image/2.png",
  },
  {
    id: 3,
    title: "Apex Sniper Trading Bootcamp",
    url: "https://apextradefundings.com/en/trading-tools#?R=http://apexinvesting.com/bootcamp",
    description: "Advanced trading education and bootcamp",
    image: "/image/3.png",
  },
  {
    id: 4,
    title: "30-Day Free Education",
    url: "https://apextradefundings.com/en/trading-tools#?R=https://www.ninjamobiletrader.com/?rfsn=6127620.5d3643",
    description: "Get 30 Day Free Education, Tools, and Trade Room",
    image: "/image/4.png",
  },
  {
    id: 5,
    title: "Mobile Trading & Backup",
    url: "https://apextradefundings.com/en/trading-tools#?R=https://apexinvesting.net/tradeassistant/",
    description:
      "Trade Mobile, Have a Backup PC, Trade with Windows Machine on a Mac",
    image: "/image/5.png",
  },
  {
    id: 6,
    title: "Markers Plus",
    url: "https://apextradefundings.com/en/trading-tools#?R=https://www2.tradingcomputersnow.com/5484241-fv35a-eztc-bg-ai",
    description: "Automate Your Trades With Markers Plus",
    image: "/image/6.png",
  },
  {
    id: 7,
    title: "System Performance Check",
    url: "https://apextradefundings.com/en/trading-tools#?R=https://apexinvesting.net/allinmindmastery/",
    description: "Is Your Computer Fast Enough For Trading?",
    image: "/image/7.png",
  },
  {
    id: 8,
    title: "Trading Psycology",
    description: "Learn and master it",
    url: "https://apextradefundings.com/en/trading-tools#?R=https://www.dynotrading.com/funded-trader-program/",
    image: "/image/8.png",
  },
  {
    id: 9,
    title: "Risk Management Suite",
    url: "https://apextradefundings.com/en/trading-tools#?R=https://www.spymoneyllc.com/",
    description: "Advanced risk management and position sizing",
    image: "/image/9.png",
  },
  {
    id: 10,
    title: "Market Data Feed",
    url: "https://apextradefundings.com/en/trading-tools#?R=https://stockchartpros.com/?refID=Apex",
    description: "Real-time market data and analytics",
    image: "/image/10.png",
  },
  {
    id: 11,
    title: "Trade Journal",
    url: "https://apextradefundings.com/en/trading-tools#?R=https://thepitfuturestrading.com/",
    description: "Track and analyze your trading performance",
    image: "/image/14.png",
  },
  {
    id: 12,
    title: "Backtesting Platform",
    url: "https://apextradefundings.com/en/trading-tools#?R=https://www.facebook.com/groups/daytradeasia/",
    description: "Test your strategies with historical data",
    image: "/image/12.png",
  },
];

export default function TradingTools() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Apex Trader Funding Trading Tools
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            There are third party tools and resources separate from Apex Trader
            Funding. Use these tools at your own discretion.
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border border-gray-200 group"
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0D26FF] transition-colors duration-300">
                  {tool.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {tool.description}
                </p>
                <button className="bg-cyan-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
