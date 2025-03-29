import { Wallet } from "lucide-react";

interface ButtonProps {
  isConnected: boolean;
  walletName: string | null;
  walletAddress: string | null;
  onConnectClick: () => void;
  onOpenModal: () => void;
}

function ConnectWalletButton({
  isConnected,
  walletName,
  walletAddress,
  onConnectClick,
  onOpenModal,
}: ButtonProps) {
  console.log("Wallet Address:", walletAddress); // Debugging log

  return (
    <>
      {!isConnected ? (
        <button
          onClick={onConnectClick}
          className="relative px-5 py-2 cursor-pointer font-medium rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 
          text-cyan-400 border border-cyan-500/30 shadow-sm shadow-cyan-500/20 
          hover:shadow-cyan-500/30 hover:border-cyan-400/40 hover:text-cyan-300 
          transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/40
          flex items-center gap-2"
        >
          <Wallet size={18} />
          Connect Wallet
        </button>
      ) : (
        <button
          onClick={onOpenModal}
          className="relative px-5 py-2 cursor-pointer font-medium rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 
          text-cyan-400 border border-cyan-500/30 shadow-sm shadow-cyan-500/20 
          hover:shadow-cyan-500/30 hover:border-cyan-400/40 hover:text-cyan-300 
          transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/40
          flex items-center gap-2"
        >
          <Wallet size={18} />
          {walletName || "Wallet"}:{" "}
          {walletAddress
            ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
            : "Address not available"}
        </button>
      )}
    </>
  );
}

export default ConnectWalletButton;
