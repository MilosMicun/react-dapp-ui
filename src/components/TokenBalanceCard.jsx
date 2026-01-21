function TokenBalanceCard({ onClaim }) {
  return (
    <main className="bg-white rounded-2xl shadow-lg p-6 max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Token Balance</h2>
      <p className="mb-6 text-gray-600">You have 250 XYZ tokens</p>
      <div className="flex justify-center">
        <button
          onClick={onClaim}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition"
        >
          Claim Rewards
        </button>
      </div>
    </main>
  );
}

export default TokenBalanceCard;

