// components/AwardsAbout.jsx
import Image from "next/image";

export default function AwardsAbout() {
  const awards = [
    "2023 Benzinga Award",
    "2023 Financial Services Review Award",
    "NASDAQ Interview 2023",
    "Modest Money Interview 2023",
    "Medium Interview 2023",
    "Canadian Futures Interview 2023",
  ];

  const features = [
    {
      icon: "📊",
      title: "Fewest Rules",
      description:
        "Trade without cumbersome restrictions during holidays or news events",
    },
    {
      icon: "💸",
      title: "Lowest Cost",
      description: "Competitive pricing with the highest value for traders",
    },
    {
      icon: "📈",
      title: "Highest Contracts",
      description: "Maximum contract plans to scale your trading potential",
    },
    {
      icon: "🕒",
      title: "24/5 Trading",
      description: "Trade 23 hours a day with flexible scheduling",
    },
    {
      icon: "🛡️",
      title: "No Daily Drawdown",
      description: "No arbitrary daily limits to knock you out",
    },
    {
      icon: "🌍",
      title: "Global Community",
      description: "Join thousands of members in over 150 countries",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* TCP 10 Awards Header */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              TCP 10
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-semibold">
              TRAINING SOLUTIONS PROVIDERS 2023
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-lg font-semibold text-gray-700 mb-4">
              AWARDED BY
            </p>
            <div className="w-32 h-1 bg-blue-500 mx-auto"></div>
          </div>

          {/* Benzinga Award Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              BENZINGA GLOBAL FINTECH AWARDS
            </h3>
            <div className="text-xl font-semibold mb-2">
              Apex Trader Funding
            </div>
            <div className="text-4xl font-bold text-yellow-300">
              2023 WINNER
            </div>
          </div>

          {/* Awards List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">{award}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-300 my-12"></div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                Who Are We?
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  Apex Trade Fundings was founded in 2021 and it set out to make
                  a better model than any company out there with the goal of
                  payout out the most to traders. Darrell Martin founded Apex
                  Trader Funding after trying and reviewing all the funding
                  companies he could find he set out to build a better model, a
                  model we would want himself as a customer.
                </p>
                <p>
                  He then launched Apex Trader Funding, it has since become the
                  leading trader funding company paying out more than any future
                  funding evaluation firm to its customers. It has grown into a
                  thriving community of 103 of 1000's of members in over 150
                  countries. Apex Trade Fundings is based in Austin, Texas and
                  are an evaluation funding company that focuses on the futures
                  markets exclusively.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2021</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-gray-600">Members</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Apex Trade Fundings Global Community"
                      fill
                      className="object-cover"
                    />
                    {/* Overlay Badges */}
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Since 2021
                    </div>
                    <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      150+ Countries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Would You Choose Apex Trade Fundings?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                We offer among the fewest rules, fewest cost, highest contract
                plans with the rules meant to test your ability to manage risk,
                profit, and size to empower those who can pass to move forward
                to a performance account for the potential to get paid.
              </p>
              <p>
                We don't expect traders during holidays, news, or other
                cumbersome rules. We want you to trade anytime you want 23 hours
                a day between 8PM one day to closing all positions and orders by
                5 to 9 PM ET fee next day ET.
              </p>
              <p>
                We do not add a rules like daily drawdown to knock you out or
                have plans that limit you with scaling. Our plans cap your
                contracts at the max contracts without falling you for going
                over your allowed contracts.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors shadow-sm hover:shadow-md"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
