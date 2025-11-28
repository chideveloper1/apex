import React from "react";

export default function Empowering() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              We Are <span className="text-blue-600">Empowering Traders</span>{" "}
              Globally
            </h2>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Apex Trade Funding was established in 2021 with the goal of
                revolutionising the motor payout model. It was founded out of
                dissatisfaction with existing funding companies and a desire to
                adapt a more customer-centric approach.
              </p>
              <p>
                As a partner trader lending company, Apex Trade Funding is
                deployed either further funding evaluation from a term of
                payout, or from a vast global community spanning over 150
                countries and tens of thousands of members.
              </p>
              <p>
                Apex Trade Funding, headquartered in Austin, Texas, specializes
                in funding evaluations for futures markets.
              </p>
            </div>

            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-2 group">
              Explore More
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </button> */}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Founded Stat */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">2021</div>
              <div className="text-gray-600 font-semibold">Founded</div>
              <div className="text-sm text-gray-500 mt-2">
                Revolutionizing payout models
              </div>
            </div>

            {/* Countries Stat */}
            <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
              <div className="text-3xl font-bold text-cyan-600 mb-2">150+</div>
              <div className="text-gray-600 font-semibold">Countries</div>
              <div className="text-sm text-gray-500 mt-2">
                Global community reach
              </div>
            </div>

            {/* Members Stat */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600 font-semibold">Members</div>
              <div className="text-sm text-gray-500 mt-2">
                Tens of thousands strong
              </div>
            </div>

            {/* Location Stat */}
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
              <div className="text-xl font-bold text-purple-600 mb-2">
                Austin, TX
              </div>
              <div className="text-gray-600 font-semibold">Headquarters</div>
              <div className="text-sm text-gray-500 mt-2">
                Specializing in futures markets
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
