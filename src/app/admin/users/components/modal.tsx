export default function UserModal({ user, onClose }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div className="bg-slate-900 p-6 rounded-lg w-full max-w-2xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">User Details</h2>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Username:</strong> {user.username || "-"}
          </p>
          <p>
            <strong>First Name:</strong> {user.firstName || "-"}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName || "-"}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone || "-"}
          </p>
          <p>
            <strong>Gender:</strong> {user.gender || "-"}
          </p>
          <p>
            <strong>Address:</strong> {user.address || "-"}
          </p>
          <p>
            <strong>Country:</strong> {user.country || "-"}
          </p>
          <p>
            <strong>City:</strong> {user.city || "-"}
          </p>
          <p>
            <strong>Zipcode:</strong> {user.zipcode || "-"}
          </p>
          <p>
            <strong>Stock Experience:</strong> {user.stockExperience || "-"}
          </p>
          <p>
            <strong>Primary Goal:</strong> {user.primaryGoal || "-"}
          </p>
          <p>
            <strong>Account Type:</strong> {user.accountType || "-"}
          </p>

          <p>
            <strong>Annual Income:</strong> {user.annualIncome || "-"}
          </p>
          <p>
            <strong>Initial Deposit Source:</strong>{" "}
            {user.initialDepositSource || "-"}
          </p>
          <p>
            <strong>Ongoing Deposit Source:</strong>{" "}
            {user.ongoingDepositSource || "-"}
          </p>

          <p>
            <strong>Account Currency:</strong> {user.accountCurrency || "-"}
          </p>
          <p>
            <strong>Referral Code:</strong> {user.referralCode || "-"}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>

          <p>
            <strong>Email Verified:</strong> {user.emailVerified ? "Yes" : "No"}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(user.createdAt).toLocaleString()}
          </p>
        </div>

        {/* Images */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">ID & Passport</h3>
          <div className="flex gap-4">
            {user.idcard ? (
              <a href={user.idcard} download="idcard">
                <img
                  src={user.idcard}
                  className="w-40 h-40 object-cover rounded border border-slate-700 cursor-pointer hover:opacity-80"
                  alt="ID Card"
                />
              </a>
            ) : (
              <p>No ID uploaded</p>
            )}

            {user.passport ? (
              <a href={user.passport} download="passport">
                <img
                  src={user.passport}
                  className="w-40 h-40 object-cover rounded border border-slate-700 cursor-pointer hover:opacity-80"
                  alt="Passport"
                />
              </a>
            ) : (
              <p>No passport uploaded</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
