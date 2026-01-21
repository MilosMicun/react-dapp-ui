function TransactionsCard() {
  const transactions = [
    "0.5 ETH sent to 0x123...abc",
    "1.2 ETH received from 0x456...def",
    "0.3 ETH sent to 0x789...ghi"
  ];

  return (
    <main className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full mx-auto sm:max-w-lg md:max-w-xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Recent Transactions</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        {transactions.map((tx, index) => (
          <li key={index}>{tx}</li>
        ))}
      </ul>
    </main>
  );
}

export default TransactionsCard;
