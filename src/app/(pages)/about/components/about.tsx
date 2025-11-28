// components/AboutPage.jsx
import Image from "next/image";
import AwardsAbout from "./award";
import EvaluationPress from "./evaluation";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Apex Trade Fundings is the leading futures funding evaluation firm
            in the world.
          </h1>

          <div className="w-24 h-1 bg-cyan-300 mx-auto my-12"></div>

          <div className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            <p className="mb-4">
              About Apex Trade Fundings: Ascot Holdings Incm 50ms Taxis
              Interviews CEO Daniel Martin
            </p>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* CEO Header */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-6 text-white">
              <h2 className="text-3xl font-bold mb-2">CEO - Darrell Martin</h2>
              <p className="text-blue-100 text-lg font-semibold">
                Ascot Darrell Martin
              </p>
            </div>

            {/* CEO Content with Image */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                {/* CEO Image */}
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-4 shadow-lg">
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-white">
                      <Image
                        src="/ceo.jpg"
                        alt="Darrell Martin - CEO of Apex Trade Fundings"
                        fill
                        className="object-cover"
                      />
                      {/* Award Badge */}
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        🏆 2022 Award
                      </div>
                    </div>

                    {/* CEO Quick Info */}
                    <div className="mt-4 text-center">
                      <h3 className="font-bold text-gray-800 text-lg">
                        Darrell Martin
                      </h3>
                      <p className="text-blue-600 font-semibold">
                        Chief Executive Officer
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        Apex Trade Fundings
                      </p>
                    </div>
                  </div>
                </div>

                {/* CEO Bio */}
                <div className="lg:col-span-3">
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p className="mb-6">
                      Darrell Martin has founded Apex Frontedge, an educational
                      site, over 10 years and as a way to help leaders come
                      together and improve their training skills. He continued
                      his career in launching Apex Trade Fundings.
                    </p>

                    <p className="mb-6">
                      Darrell has taken up mainly on Apex trade initiatives. He
                      has been a specialist international Trade Fund and is
                      dedicated for excellence. He has delivered many trading
                      tools that are available today which prevented new ways
                      for new traders and the markets in a consistent way.
                    </p>

                    <p className="mb-6">
                      Darrell has developed multiple organisations including
                      those for banks, SCO companies and retail, tech,
                      distribution and leisure shops. He worked his way to learn
                      the ideas of a small future and offered funds from all
                      industries worldwide.
                    </p>

                    <p className="mb-8">
                      He was an easy-to-learn group for the UK's market
                      development and developing a strategy that supports the
                      growing demand for customers with 10% of 100% of traders
                      more than ever. His business ambitions.
                    </p>

                    {/* Award Section */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                      <p className="text-yellow-800 font-semibold text-lg">
                        Darrell Martin Technology Toll Pro Firm Award for 2022
                        at Finland 2023 from Germany.
                      </p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        10+
                      </div>
                      <div className="text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        Multiple
                      </div>
                      <div className="text-gray-600">
                        Organizations Developed
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        2022
                      </div>
                      <div className="text-gray-600">Award Winner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AwardsAbout />
      <EvaluationPress />
    </div>
  );
}
