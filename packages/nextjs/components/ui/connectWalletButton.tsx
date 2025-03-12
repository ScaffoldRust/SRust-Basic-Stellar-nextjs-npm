interface buttonProps {
    onClick?: () => void
}

function ConnectWalletButton({onClick}:buttonProps) {
    return (
        <button onClick={onClick} className="ml-4 p-2 btn btn-primary px-6 font-bold shadow-md shadow-primary/30 border-0 rounded-lg hover:shadow-lg hover:shadow-primary/40 hover:brightness-110 hover:cursor-pointer transition-all">
            Connect Wallet
        </button>
    )
}

export default ConnectWalletButton;