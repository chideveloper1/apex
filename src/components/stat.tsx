"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Stat() {
  const router = useRouter();
  return (
    <div>
      <section className="py-20 px-4 -mt-1 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Proven <span className="text-blue-600">Track Record</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of successful traders who have transformed their
              financial future with our funding solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 text-white p-3 rounded-full shadow-lg">
                  <svg
                    className="w-6 h-6"
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
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 mt-4">
                $15,233,250
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Average Monthly Compensation to Customer&apos;s Share January of
                2023
              </p>
            </div>

            {/* Stat 2 */}
            <div className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-cyan-500 text-white p-3 rounded-full shadow-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 mt-4">
                $577,242,125
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Total Compensation to Customer&apos;s Share 2022
              </p>
            </div>

            {/* Stat 3 */}
            <div className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-500 text-white p-3 rounded-full shadow-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 mt-4">
                $52,673,463
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Total Compensation to Customer&apos;s In The Last 90 Days
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join our community of successful traders and take the first step
                towards financial freedom.
              </p>
              <button
                onClick={() => router.push("/register")}
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
