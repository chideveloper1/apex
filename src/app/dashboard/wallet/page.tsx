import getDeposit from "@/app/action/getDeposit";
import WalletBalance from "./components/balance";
import TransactionsTable from "./components/transaction";
import getWallet from "@/app/action/getWallet";

export default async function WalletPage() {
  const deposit = await getDeposit();
  const wallet = await getWallet();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Wallet</h1>
          <p className="text-slate-400">
            Manage your wallet balance and transaction history
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <WalletBalance wallet={wallet} />
        <TransactionsTable deposit={deposit} />
      </div>
    </div>
  );
}
