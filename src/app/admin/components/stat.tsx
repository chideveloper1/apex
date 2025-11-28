// src/components/StatCard.tsx
interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  variant?: "users" | "deposit" | "withdraw" | "default";
  showProgress?: boolean;
}

export default function AdminStatCard({
  title,
  value,
  subtitle,
  variant = "default",
  showProgress = true,
}: StatCardProps) {
  const getBorderColor = () => {
    switch (variant) {
      case "users":
        return "border-l-4 border-l-blue-500";
      case "deposit":
        return "border-l-4 border-l-green-500";
      case "withdraw":
        return "border-l-4 border-l-purple-500";
      default:
        return "border-l-4 border-l-slate-600";
    }
  };

  const getValueSize = () => {
    return variant === "users" ? "text-2xl" : "text-xl";
  };

  return (
    <div
      className={`bg-slate-800 rounded-lg p-4 ${getBorderColor()} hover:bg-slate-750 transition-colors`}
    >
      <h3 className="text-sm font-medium text-slate-400 mb-1">{title}</h3>
      <div className={`font-bold text-white ${getValueSize()} mb-1`}>
        {value}
      </div>
      {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}

      {/* Progress indicator */}
      {showProgress && subtitle.includes("Progressive") && (
        <div className="mt-2 w-full bg-slate-700 rounded-full h-1">
          <div
            className="bg-slate-500 h-1 rounded-full"
            style={{ width: "0%" }}
          ></div>
        </div>
      )}
    </div>
  );
}
