function WalletCard() {
  return (
    <main className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full mx-auto sm:max-w-lg md:max-w-xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Wallet Info</h2>
      <p className="text-gray-600">Connect your wallet to start using the DApp.</p>
      <button className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition">
        Connect Wallet
      </button>
    </main>
  );
}

export default WalletCard;
