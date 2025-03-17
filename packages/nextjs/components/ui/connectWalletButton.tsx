import { Wallet } from "lucide-react"; // Import Wallet icon or any other icon you prefer

interface ButtonProps {
  onClick?: () => void;
}

function ConnectWalletButton({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative px-5 py-2 font-medium rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 
      text-cyan-400 border border-cyan-500/30 shadow-sm shadow-cyan-500/20 
      hover:shadow-cyan-500/30 hover:border-cyan-400/40 hover:text-cyan-300 
      transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/40
      flex items-center gap-2"
    >
      <Wallet size={18} /> 
      Connect Wallet
    </button>
  );
}

export default ConnectWalletButton;