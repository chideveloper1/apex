import InvestmentPlans from "./components/plans";
import getWallet from "@/app/action/getWallet";

export default async function InvestmentsPage() {
  const wallet = await getWallet();

  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Investments</h1>
          <p className="text-slate-400">
            Manage your investment portfolio and explore new opportunities
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Investment Plans - 3/4 width */}
        <div className="lg:col-span-3">
          <InvestmentPlans wallet={wallet} />
        </div>
      </div>
    </div>
  );
}
