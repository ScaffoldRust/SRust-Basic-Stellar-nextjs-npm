import React from "react";
import Link from "next/link";
import { theme } from "../config/theme";
import { Code, ExternalLink, ChevronRight, Cpu, TerminalSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const HomeHero = () => {
    const { heroTitle, heroSubtitle, heroButtonText, heroSecondaryButtonText } = theme.homePage;

    return (
        <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
            {/* Abstract background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-purple-600 blur-3xl"></div>
                <div className="absolute bottom-40 right-1/3 w-80 h-80 rounded-full bg-cyan-500 blur-3xl"></div>
            </div>
            
            {/* Grid decoration */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
            
            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Network status indicator */}
                    <div className="flex items-center justify-center mb-6 space-x-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs text-slate-400 font-mono">NETWORK ONLINE</span>
                        <Badge variant="outline" className="text-xs border-slate-700 bg-slate-900/50 text-slate-300 px-2">
                            <Cpu className="mr-1 h-3 w-3" />
                            v1.2.4
                        </Badge>
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                        {heroTitle}
                    </h1>

                    <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {heroSubtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#">
                            <Button
                                size="lg"
                                className="px-8 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 bg-gradient-to-r from-cyan-500 to-blue-600 hover:translate-y-0.5 transition-all duration-300 font-medium border-none"
                            >
                                {heroButtonText}
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>

                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 border-slate-700 bg-slate-900/50 text-slate-300 hover:text-white hover:border-purple-500 hover:translate-y-0.5 transition-all duration-300 font-medium"
                        >
                            {heroSecondaryButtonText}
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* Enhanced code snippet preview */}
                    <Card className="mt-16 border border-slate-700/50 backdrop-blur-sm bg-slate-900/70 shadow-xl mx-auto max-w-2xl overflow-hidden">
                        {/* Header */}
                        <div className="bg-slate-800/80 px-4 py-2 border-b border-slate-700/50 flex items-center justify-between">
                            <div className="flex items-center">
                                <TerminalSquare className="h-4 w-4 mr-2 text-cyan-400" />
                                <span className="text-xs font-mono text-slate-300">connectWallet.js</span>
                            </div>
                            <div className="flex space-x-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                        </div>

                        {/* Code Block */}
                        <CardContent className="p-0">
                            <pre className="text-sm md:text-base overflow-x-auto p-6 font-mono bg-slate-950 text-slate-300 rounded-md">
                                <div className="flex items-center text-xs text-slate-500 font-mono mb-2 pb-2 border-b border-slate-800">
                                    <span>// Connect your wallet to start using the dApp</span>
                                </div>
                                <code>
                                    <span className="text-blue-400">import</span>{" "}
                                    <span className="text-green-400">{"{ ethers }"}</span>{" "}
                                    <span className="text-blue-400">from</span>{" "}
                                    <span className="text-yellow-400">"ethers"</span>;
                                    {"\n\n"}
                                    <span className="text-purple-400">async function</span>{" "}
                                    <span className="text-yellow-400">connectWallet</span>() {"{"}
                                    {"\n  "}
                                    <span className="text-blue-400">const</span> provider =
                                    <span className="text-blue-400"> new</span> ethers.providers.Web3Provider(window.ethereum);
                                    {"\n  "}
                                    <span className="text-blue-400">await</span> provider.send(
                                    <span className="text-yellow-400">"eth_requestAccounts"</span>, []);
                                    {"\n  "}
                                    <span className="text-blue-400">const</span> signer = provider.getSigner();
                                    {"\n  "}
                                    <span className="text-green-400">console.log</span>(
                                    <span className="text-yellow-400">"Connected!"</span>);
                                    {"\n  "}
                                    <span className="text-blue-400">return</span> signer;
                                    {"\n}"}
                                </code>
                            </pre>
                        </CardContent>
                    </Card>
                    
                    {/* Network stats */}
                    <div className="mt-12 flex flex-wrap justify-center gap-8">
                        <div className="text-center">
                            <div className="text-slate-400 text-xs mb-1 font-mono">TVL</div>
                            <div className="text-xl font-bold text-slate-200">$42.6M</div>
                        </div>
                        <div className="text-center">
                            <div className="text-slate-400 text-xs mb-1 font-mono">USERS</div>
                            <div className="text-xl font-bold text-slate-200">24.5K</div>
                        </div>
                        <div className="text-center">
                            <div className="text-slate-400 text-xs mb-1 font-mono">TXs</div>
                            <div className="text-xl font-bold text-slate-200">1.2M</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};