"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MirrorTrading() {
  const router = useRouter();

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Header with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Mirror Your Desired Expert
            </h1>

            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                We offers automated Mirror trading services across all sectors,
                Find your desired expert, get your account linked to their
                services and mirror the trades, learn as well through the
                trades, across various Market and sectors.
              </p>
              <p>
                With over 90% protection on trading capital with stop loss
                softwares and indicators. At Apex Trade Fundings, Clients
                capital security is always our major Concern.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-200">
              <div className="aspect-video relative rounded-xl overflow-hidden">
                <Image
                  src="/image/mirror.png"
                  alt="Mirror Trading Dashboard"
                  fill
                  className="object-cover"
                />
                {/* Overlay Stats */}
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Live Trading
                </div>
                <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  90% Protection
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Sectors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            { name: "Options", icon: "📊" },
            { name: "Derivatives", icon: "📈" },
            { name: "Currency Pairs", icon: "💱" },
            { name: "Swing/Scalp", icon: "⚡" },
            { name: "Crypto", icon: "₿" },
            { name: "Forex & Index", icon: "🌍" },
          ].map((sector, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="text-2xl mb-2">{sector.icon}</div>
              <div className="text-sm font-medium text-gray-700">
                {sector.name}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 my-12"></div>

        {/* View All Button */}
        <div className="text-center mb-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
            View
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 my-12"></div>

        {/* Asset Management Solutions Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-200">
              <div className="aspect-video relative rounded-xl overflow-hidden">
                <Image
                  src="/image/mirror1.png"
                  alt="Asset Management Dashboard"
                  fill
                  className="object-cover"
                />
                {/* Overlay Stats */}
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Professional Management
                </div>
                <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Secure Assets
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              OUR ASSET MANAGEMENT SOLUTIONS
            </h2>

            <div className="text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Time is a precious commodity. Researching investments in
                ever-changing markets and handling investment transactions are
                more than most people have time for. Apex program allows you to
                delegate the daily management of your assets and invest with
                confidence, knowing that your portfolio is in the hands of
                experienced professionals.
              </p>
            </div>

            {/* Get Started Button */}
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              onClick={() => router.push("/register")}
            >
              Get Started
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Expert Selection",
              description:
                "Choose from verified trading experts with proven track records",
              icon: "⭐",
            },
            {
              title: "Capital Protection",
              description:
                "90% protection with advanced stop loss software and indicators",
              icon: "🛡️",
            },
            {
              title: "Learn & Earn",
              description:
                "Study expert strategies while your investments grow",
              icon: "🎓",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
