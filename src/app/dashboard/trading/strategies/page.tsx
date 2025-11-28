import { InvestmentCard } from "./components/stat";

const StrategiesPage = () => {
  const strategies = [
    {
      id: 1,
      name: "Hero Cup",
      handle: "@HeroCup",
      avatarUrl: "https://placehold.co/48x48/1f2937/e0e0e0?text=HC",
      status: "online",
      initialInvestment: 5000.0,
      // Mocked SVG path data - designed to look like a volatile, upward trend
      chartPath:
        "M 0 60 C 25 40, 50 70, 75 50, 100 65, 125 45, 150 75, 175 40, 200 60, 225 30, 250 50, 275 20, 300 45",
      metrics: [
        { label: "1M Return", value: "91%" },
        { label: "Investors", value: 183 },
        { label: "Fees", value: "0%" },
      ],
    },
    {
      id: 2,
      name: "Alpha Portfolio",
      handle: "@AlphaP",
      avatarUrl: "https://placehold.co/48x48/1f2937/e0e0e0?text=AP",
      status: "offline",
      initialInvestment: 1000.0,
      // Mocked SVG path data - designed to look like a stable, slightly downward trend
      chartPath:
        "M 0 30 C 25 35, 50 40, 75 45, 100 50, 125 50, 150 48, 175 42, 200 40, 225 35, 250 30, 275 25, 300 28",
      metrics: [
        { label: "1M Return", value: "-2.5%" },
        { label: "Investors", value: 3452 },
        { label: "Fees", value: "1.2%" },
      ],
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-100">All Strategies</h1>
          <p className="text-gray-100 mt-2">
            Discover and invest in various trading strategies
          </p>
        </div>

        {/* Strategies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {strategies.map((strategy, index) => (
            <InvestmentCard data={strategy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategiesPage;
