import WalletCard from "./components/WalletCard";
import TokenBalanceCard from "./components/TokenBalanceCard";

function App() {
  const handleClaimRewards = () => {
    console.log("Claim rewards clicked!");
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col space-y-6">
      <WalletCard />
      <TokenBalanceCard onClaim={handleClaimRewards} />
    </div>
  );
}

export default App;

