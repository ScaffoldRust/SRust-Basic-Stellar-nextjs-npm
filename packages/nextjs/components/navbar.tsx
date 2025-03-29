"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, Globe, Server } from "lucide-react";
import ConnectWalletButton from "./ui/connectWalletButton";
import { ConnectWalletModal } from "./connect-wallet-modal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletName, setWalletName] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const navlinks = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Debug Contracts", path: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWalletConnect = (name: string, address: string) => {
    setIsConnected(true);
    setWalletName(name);
    setWalletAddress(address);
    setIsWalletModalOpen(false);
  };

  const handleWalletDisconnect = () => {
    setIsConnected(false);
    setWalletName(null);
    setWalletAddress(null);
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-30 flex items-center justify-between px-4 py-3 transition-all duration-300",
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-700/30 shadow-lg shadow-slate-900/20"
          : "bg-slate-950 border-b border-cyan-900/20 shadow-md shadow-cyan-500/5"
      )}
    >
      <div className="flex items-center gap-4">
        <Link href="/" passHref>
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 shadow-sm shadow-cyan-500/20 group-hover:shadow-cyan-500/30 group-hover:border-cyan-400/40 transition-all duration-300">
              <Zap size={18} className="text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                SRust
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="hidden md:flex md:items-center md:gap-6">
        <div className="flex items-center gap-6">
          {navlinks.map((navlink) => (
            <Link
              key={navlink.id}
              href={navlink.path}
              className="flex items-center gap-2 font-medium px-4 py-2 rounded-md transition-colors text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50"
            >
              {navlink.id === 1 && (
                <Globe size={14} className="text-cyan-500" />
              )}
              {navlink.id === 2 && (
                <Server size={14} className="text-purple-400" />
              )}
              {navlink.title}
            </Link>
          ))}
        </div>

        <div className="h-6 w-px bg-slate-700/50 mx-2"></div>

        <ConnectWalletButton
          isConnected={isConnected}
          walletName={walletName}
          walletAddress={walletAddress}
          onConnectClick={() => setIsWalletModalOpen(true)}
          onOpenModal={() => setIsWalletModalOpen(true)}
        />
      </div>

      <ConnectWalletModal
        isOpen={isWalletModalOpen}
        onOpenChange={setIsWalletModalOpen}
        onWalletConnect={handleWalletConnect}
        onWalletDisconnect={handleWalletDisconnect}
      />
    </nav>
  );
};
