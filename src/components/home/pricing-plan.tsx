// components/PricingPlans.jsx
"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function PricingPlans() {
  const [showArrows, setShowArrows] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const plans = [
    {
      name: "Starter Plan",
      capital: "$5,000",
      price: "$5,000",
      popular: false,
      features: [
        { label: "Contracts", value: "4(40 Micros)" },
        { label: "Profit Goal", value: "$1,500" },
        { label: "Trailing Threshold", value: "$1,500" },
        { label: "Daily Drawdown", value: "None" },
        { label: "Scaling", value: "None" },
        { label: "Real-Time Data Fees ($55 Value)", value: "Included" },
      ],
    },
    {
      name: "Regular Plan",
      capital: "$25,000",
      price: "$25,000",
      popular: false,
      features: [
        { label: "Contracts", value: "10(100 Micros)" },
        { label: "Profit Goal", value: "$3,000" },
        { label: "Trailing Threshold", value: "$2,500" },
        { label: "Daily Drawdown", value: "None" },
        { label: "Scaling", value: "None" },
        { label: "Real-Time Data Fees ($55 Value)", value: "Included" },
      ],
    },
    {
      name: "Premium Plan",
      capital: "$50,000",
      price: "$50,000",
      popular: true,
      features: [
        { label: "Contracts", value: "17(170 Micros)" },
        { label: "Profit Goal", value: "$6,000" },
        { label: "Trailing Threshold", value: "$5,000" },
        { label: "Daily Drawdown", value: "None" },
        { label: "Scaling", value: "None" },
        { label: "Real-Time Data Fees ($55 Value)", value: "Included" },
      ],
    },
    {
      name: "Professional Plan",
      capital: "$200,000",
      price: "$200,000",
      popular: false,
      features: [
        { label: "Contracts", value: "25(250 Micros)" },
        { label: "Profit Goal", value: "$9,000" },
        { label: "Trailing Threshold", value: "$7,500" },
        { label: "Daily Drawdown", value: "None" },
        { label: "Scaling", value: "Available" },
        { label: "Real-Time Data Fees ($55 Value)", value: "Included" },
      ],
    },
  ];

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const cardWidth = 384; // w-96 = 384px
      const scrollAmount = direction === "next" ? cardWidth : -cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Select Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Explore plans to elevate your trading experience. Choose the perfect
            fit for your journey!
          </p>
        </div>

        {/* Plans Container with Arrows */}
        <div
          className="relative"
          onMouseEnter={() => setShowArrows(true)}
          onMouseLeave={() => setShowArrows(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={() => scroll("prev")}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:border-blue-500 transition-all duration-300 ${
              showArrows
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            aria-label="Previous plans"
          >
            <svg
              className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Scrollable Plans */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-8 scrollbar-hide snap-x snap-mandatory scroll-smooth px-12"
            style={{ scrollBehavior: "smooth" }}
          >
            {plans.map((plan, index) => (
              <div
                key={index}
                className="flex-none w-96 snap-center my-8" // Fixed width for 3 cards view
              >
                <div
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                    plan.popular
                      ? "border-blue-500 ring-4 ring-blue-100"
                      : "border-gray-200"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="p-8 border-b border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                      {plan.name}
                    </h3>
                    <div className="text-center mb-6">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full inline-block">
                        STARTING CAPITAL {plan.capital}
                      </span>
                    </div>

                    {/* Capital Amount */}
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800 mb-2">
                        {plan.price}
                      </div>
                      <div className="text-lg text-green-600 font-semibold">
                        Present
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                        >
                          <span className="text-sm text-gray-600 font-medium flex-1">
                            {feature.label}
                          </span>
                          <span className="text-sm font-semibold text-gray-800 text-right flex-1">
                            {feature.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full mt-8 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                        plan.popular
                          ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 hover:border-gray-400"
                      }`}
                      onClick={() => router.push("/register")}
                    >
                      Get Started Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("next")}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:border-blue-500 transition-all duration-300 ${
              showArrows
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
            aria-label="Next plans"
          >
            <svg
              className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Plan Counter */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-600">
            <span>{plans.length} plans available</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
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
                <div>
                  <h4 className="font-semibold text-gray-800">
                    No Daily Drawdowns
                  </h4>
                  <p className="text-gray-600 text-sm">Trade with confidence</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
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
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Real-Time Data
                  </h4>
                  <p className="text-gray-600 text-sm">$55 value included</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Fast Payouts</h4>
                  <p className="text-gray-600 text-sm">Regular compensation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
