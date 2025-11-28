// components/BenefitsSection.jsx
export default function BenefitsSection() {
  const benefits = [
    {
      category: "Mutual Funds",
      description:
        "Mutual fund will initially require many of the financial institutions to be a business partner with all potential commercial retail brands. Although we rely on market planning, mutual funds are in investment grade.",
      icon: "📊",
    },
    {
      category: "Crypto Currency Investment",
      description:
        "With a long-term focus on Apple Inc., including investors, key portfolio management team can have multiple related and cost-effective exposures to various customer requirements.",
      subItems: [
        {
          title: "Rationality",
          items: [
            {
              type: "Real estate",
              description:
                "A premium loan service administrator and manager has recently offered additional credit for payment throughout the business and is also invested in real estate.",
            },
          ],
        },
      ],
      icon: "₿",
    },
    {
      category: "Oil & Gas",
      description:
        "Consolidated oil-based agents are regulated as markets, and benefits are typically used as market conditions. The United States Government retains its own demand for oil and gas services to supply products and other products that are made up of the world.",
      icon: "🛢️",
    },
    {
      category: "Infrastructure",
      description:
        "Our main business is an environment in general, including investing in oil and gas services to supply products and other products that are made up of the world. We are now looking forward to developing our global infrastructure.",
      icon: "🏗️",
    },
    {
      category: "Stocks/Options",
      description:
        "With our 2016 Annual Report, we are pleased to thank our clients for providing us our gift to our customers. Our customers are working closely with our customers and our customers who are working well at our home. These customers are proud of our customers' experience and we are proud of our customers' achievements. We are pleased to thank our clients for providing us our gift to our customers and our customers.",
      icon: "📈",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Benefits Apex Trade Fundings Offers
          </h1>
          <div className="flex items-center justify-center mb-8">
            <span className="text-xl font-semibold text-blue-600 mr-4">
              Quality and Quality
            </span>
            <div className="w-24 h-0.5 bg-blue-300 rounded-full"></div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative">
              {/* Divider - Only show between items, not after last */}
              {index < benefits.length - 1 && (
                <div className="absolute bottom-[-2rem] left-0 right-0 h-px bg-gray-200"></div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Icon and Category */}
                <div className="lg:col-span-3">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {benefit.category}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-9">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Sub Items */}
                  {benefit.subItems &&
                    benefit.subItems.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                      >
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">
                          {subItem.title}
                        </h4>
                        {subItem.items &&
                          subItem.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="space-y-3">
                              <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                  <strong className="text-gray-800">
                                    {item.type}
                                  </strong>
                                  <p className="text-gray-600 mt-1 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Start Your Investment Journey Today
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
              Join thousands of investors who trust Apex Trade Fundings for
              diverse investment opportunities and exceptional returns.
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Investment Options
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
