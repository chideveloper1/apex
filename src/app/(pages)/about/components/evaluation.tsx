// components/EvaluationPress.jsx
import Image from "next/image";
import Link from "next/link";

export default function EvaluationPress() {
  const evaluationFeatures = [
    {
      category: "Trade full size contracts",
      items: [
        "Our $1.4 million stop of 7 trading days",
        "We occupy requirements",
        "By portfolio too many contracts it simply rejects the trade it does not fall you",
        "We only operations",
        "Trade on holidays",
        "Trade during the week",
        "Once you pass your evaluation you get a paid performance account",
      ],
    },
    {
      category: "A simple rule manage risk with a large five trading threshold",
      items: [
        "Trade any strategy that best suits you",
        "Include free and time cuts",
        "Our multiple accounts to spread risk and increase profits",
        "Least expensive reset fee",
        "Available globally where allowed by law",
        "Free Nifty License",
      ],
    },
  ];

  const performanceAccountFeatures = [
    "Free Nifty License $75million includes",
    "Use data save operation included",
    "Start with a full-size account run so also restrictions be scaling",
    "Get paid 100% of your first $25,000 profit",
    "Then get paid 80% of your performance thereafter",
  ];

  const pressItems = [
    {
      name: "November 2023 | PR Newswire",
      url: "https://www.prnewswire.com/news-releases/apex-trader-funding-announces-new-benefits-for-traders-301688137.html",
    },
    {
      name: "November 2023 | CDDwork",
      url: "https://www.odwyerpr.com/story/public/18837/2022-11-23/accounts-transit-rubenstein-pr-lands-apex-trader-funding.html",
    },
    {
      name: "November 2023 | PR Newswire",
      url: "https://www.prnewswire.com/news-releases/apex-trader-funding-retains-rubenstein-public-relations-as-agency-of-record-301684180.html",
    },
    {
      name: "December 2023 | CEO Blog History",
      url: "https://hear.ceoblognation.com/2022/12/21/30-entrepreneurs-reveal-why-they-started-their-business/",
    },
    {
      name: "December 2023 | NewsBreak",
      url: "https://www.youtube.com/watch?v=oo5iJ-EVR4s",
    },
    {
      name: "December 2023 | Website Trades LLC",
      url: "https://biz.crast.net/chinas-covid-policy-is-top-of-mind-for-investors-this-week-as-markets-tumble-here-are-5-things-theyre-watching-as-beijing-signals-a-willingness-to-loosen-some-restrictions/",
    },
    {
      name: "December 2023 | EB-Craft",
      url: "https://canadatoday.news/ca/chinas-covid-policies-are-the-focus-of-investors-as-turmoil-rocked-markets-this-week-here-are-5-things-theyre-watching-as-beijing-signals-a-willingness-to-ease-some-restrictions-172838/",
    },
    {
      name: "December 2023 | Canada Today",
      url: "https://finance.yahoo.com/news/chinas-covid-policy-top-mind-133000439.html",
    },
    {
      name: "December 2023 | Yahoo! Finance",
      url: "https://www.businessinsider.in/investment/news/chinas-covid-policy-is-top-of-mind-for-investors-as-unrest-rattled-markets-this-week-here-are-5-things-theyre-watching-as-beijing-signals-willingness-to-loosen-some-restrictions-/articleshow/95965436.cms",
    },
    {
      name: "December 2023 | Business Insider India",
      url: "https://markets.businessinsider.com/news/stocks/china-zero-covid-policy-5-things-investors-markets-xi-investing-2022-12",
    },
    {
      name: "December 2023 | Markets Insider",
      url: "https://www.youtube.com/watch?v=NU4DvHHKDSM",
    },
    {
      name: "December 2023 | Wako US VPN Vista",
      url: "https://www.youtube.com/watch?v=VPGpIDJ3k38&t=15s",
    },
    {
      name: "December 2023 | Privacy Watch Interview",
      url: "https://123ru.net/english/340591093/",
    },
    {
      name: "January 2023 | 123 Pts",
      url: "https://beamstart.com/news/elon-musk-calmed-anxious-tesla-16747607612571",
    },
    {
      name: "January 2023 | Business",
      url: "https://www.businessinsider.nl/elon-musk-calmed-anxious-tesla-investors-by-acting-like-a-normal-ceo-for-once/",
    },
    {
      name: "January 2023 | Business Insider Nederland",
      url: "https://ca.finance.yahoo.com/news/elon-musk-calmed-anxious-tesla-191740350.html?",
    },
    {
      name: "January 2023 | Yahoo! Finance Canada",
      url: "https://uk.finance.yahoo.com/news/elon-musk-calmed-anxious-tesla-191740350.html?",
    },
    {
      name: "January 2023 | Yahoo! News UK",
      url: "https://www.newsbreak.com/news/2904274820802/elon-musk-calmed-anxious-tesla-investors-by-acting-like-a-normal-ceo-for-once",
    },
    {
      name: "January 2023 | NewsBreak",
      url: "https://www.msn.com/en-ph/money/other/elon-musk-calmed-anxious-tesla-investors-by-acting-like-a-normal-ceo-for-once/ar-AA16Meme",
    },
    {
      name: "January 2023 | MME - Business Insider",
      url: "https://finance.yahoo.com/news/elon-musk-calmed-anxious-tesla-191740350.html",
    },
    {
      name: "January 2023 | Yahoo! Finance",
      url: "https://www.businessinsider.com/elon-musk-tesla-investors-twitter-anxieties-calmed-with-ceo-normalcy-2023-1",
    },
    {
      name: "January 2023 | Insider",
      url: "https://www.prnewswire.com/news-releases/apex-trader-funding-announces-full-benefits-with-new-year-301709395.html",
    },
    {
      name: "January 2023 | PR November",
      url: "https://www.prnewswire.com/news-releases/apex-trader-funding-announces-full-benefits-with-new-year-301709395.html",
    },
    {
      name: "March 2023 | Authority Magazine",
      url: "https://medium.com/authority-magazine/darrell-martin-of-apex-trader-funding-on-the-5-essentials-for-smart-investing-f0216587ad52",
    },
    {
      name: "March 2023 | Office Hours with David Metzler",
      url: "https://podcasts.apple.com/us/podcast/darrell-martin-bryan-smeltzer-praful-mittal/id1678157057?i=1000606520853",
    },
    {
      name: "April 2023 | Finance Facts",
      url: "https://financefeeds.com/texas-based-prop-firm-apex-trader-taps-ninjatrader-tradovate/",
    },
    {
      name: "April 2023 | PR Newwire",
      url: "https://www.prnewswire.com/news-releases/apex-trader-funding-announces-ninjatrader--tradovate-integration-301791842.html",
    },
    {
      name: "April 2023 | Spectrum News Texas",
      url: "https://spectrumlocalnews.com/tx/austin/news/2023/04/03/despite-warnings--texans-invest-heavily-in-crypto-",
    },
    {
      name: "April 2023 | MoneyMint",
      url: "https://moneymint.com/best-prop-trading-firms-for-investments/",
    },
    {
      name: "May 2023 | CWOWorld Mag",
      url: "https://ceoworld.biz/2023/05/20/why-gold-is-the-safe-bet/",
    },
    {
      name: "June 2023 | PR Newswire",
      url: "https://www.prnewswire.com/news-releases/apex-trader-funding-announces-premier-of-trader-bacon-live-streaming-show-301851269.html",
    },
    {
      name: "June 2023 | Yahoo Finance",
      url: "https://finance.yahoo.com/news/apex-trader-funding-announces-premier-202700238.html",
    },
    {
      name: "June 2023 | Seeking Alpha",
      url: "https://seekingalpha.com/pr/19368259-apex-trader-funding-announces-premier-of-trader-bacon-live-streaming-show",
    },
    {
      name: "June 2023 | Marketing Insider",
      url: "https://markets.businessinsider.com/news/stocks/apex-trader-funding-announces-premier-of-trader-bacon-live-streaming-show-1032390076",
    },
    {
      name: "June 2023 | Bezinga",
      url: "https://www.benzinga.com/news/23/06/32853756/apex-trader-funding-announce-premier-of-trader-bacon-live-streaming-show",
    },
    {
      name: "July 2023 | PR Newswire",
      url: "https://www.prnewswire.com/news-releases/apex-trader-funding-announces-highest-average-payouts-to-traders-301885707.html",
    },
    {
      name: "July 2023 | Yahoo Finance",
      url: "https://finance.yahoo.com/news/apex-trader-funding-announces-highest-220500310.html",
    },
    {
      name: "July 2023 | AP News",
      url: "https://apnews.com/press-release/pr-newswire/austin-e7f3bcf0e5b478e916d1072198a684cc",
    },
    {
      name: "July 2023 | Manage Self, Lead Others Podcast",
      url: "https://www.youtube.com/watch?v=tqoN7lD4VXg&t=680s",
    },
    {
      name: "July 2023 | Bezinga",
      url: "https://www.benzinga.com/markets/futures/23/07/33467793/minimal-rules-maximized-funds-with-24-million-paid-out-in-compensation-apex-trader-funding-has-be",
    },
    {
      name: "July 2023 | Market Watch",
      url: "https://www.marketwatch.com/press-release/apex-trader-funding-announces-highest-average-payouts-to-traders-1d296662?mod=search_headline",
    },
    {
      name: "August 2023 | PR November",
      url: "https://www.prnewswire.com/news-releases/apex-trader-funding-announces-latest-payout-amounts-to-traders-301898537.html",
    },
    {
      name: "August 2023 | Yahoo Finance",
      url: "https://finance.yahoo.com/news/apex-trader-funding-announces-latest-130000644.html?",
    },
    {
      name: "August 2023 | Markets Insider",
      url: "https://markets.businessinsider.com/news/stocks/apex-trader-funding-announces-latest-payout-amounts-to-traders-1032546627",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Evaluation Accounts Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Apex Trade Fundings Evaluation Accounts
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Evaluation Features */}
            <div className="space-y-8">
              {evaluationFeatures.map((featureGroup, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    {featureGroup.category}
                  </h3>
                  <ul className="space-y-3">
                    {featureGroup.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right Column - Performance Accounts */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                  Paid Performance Accounts (PA)
                </h2>

                <ul className="space-y-4">
                  {performanceAccountFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-blue-50 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Profit Split Visual */}
                <div className="mt-8 bg-white/10 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-4 text-center">
                    Profit Sharing
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-green-500/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-blue-100 text-sm">
                        First $25K Profit
                      </div>
                    </div>
                    <div className="bg-blue-500/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">90%</div>
                      <div className="text-blue-100 text-sm">Thereafter</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  Global Availability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Available to traders worldwide where permitted by local
                  regulations. Join our global community of successful funded
                  traders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In The Press Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              In The Press
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Featured in leading financial publications and media outlets
              worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Press Columns */}
            {[0, 1, 2].map((columnIndex) => (
              <div key={columnIndex} className="space-y-3">
                {pressItems
                  .slice(
                    columnIndex * Math.ceil(pressItems.length / 3),
                    (columnIndex + 1) * Math.ceil(pressItems.length / 3)
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <Link
                        href={item.url}
                        className="text-gray-700 text-sm leading-relaxed"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
