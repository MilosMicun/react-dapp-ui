function WalletCard() {
  return (
    <main className="bg-white rounded-2xl shadow-lg p-6 max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Wallet Info</h2>
      <p className="text-gray-600 mb-4">Connect your wallet to start using the DApp.</p>
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition">
        Connect Wallet
      </button>
    </main>
  );
}

export default WalletCard;
