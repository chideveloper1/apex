export const InvestmentCard = ({ data }: { data: any }) => {
  const { name, handle, avatarUrl, status, initialInvestment, chartPath } =
    data;

  const statusColor = status === "online" ? "bg-green-400" : "bg-red-400";

  // Format initial investment to a currency string
  const formattedInvestment = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(initialInvestment);

  const metrics = [
    { label: "1M Return", value: "91%" },
    { label: "Investors", value: 183 },
    { label: "Fees", value: "0%" },
  ];

  return (
    <div className="w-full max-w-sm bg-gray-800 text-gray-100 rounded-2xl shadow-2xl p-6 border border-gray-700/50">
      {/* 1. Header Section (Avatar and Text) */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          {/* Avatar Image (Using placeholder since we can't load external images easily) */}
          <img
            src={avatarUrl}
            alt={`${name} avatar`}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-700"
          />
          {/* Status Badge */}
          <div
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${statusColor} ring-2 ring-gray-800`}
            title={`Status: ${status}`}
          ></div>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-xl font-bold leading-tight">
            {name}
            <span className="text-sm font-normal text-gray-400 ml-2">
              ({handle})
            </span>
          </h2>
          <p className="text-sm text-gray-400 mt-0.5">
            From {formattedInvestment}
          </p>
        </div>
      </div>

      {/* 2. Chart Area (Mocked SVG) */}
      <div className="h-20 mb-6 -mx-2">
        <svg
          viewBox="0 0 300 80"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d={chartPath}
            fill="none"
            stroke="#4ADE80" /* Green color for positive trend */
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 3. Metrics Grid */}
      <div className="grid grid-cols-3 gap-3">
        {metrics.map((metric: any, index: any) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-700/60 p-3 rounded-xl transition hover:bg-gray-700"
          >
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
              {metric.label}
            </p>
            <p className="text-lg font-extrabold text-white">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
