import React from "react";
import Link from "next/link";
import { theme } from "../config/theme";
import { Bug, ArrowRight, Terminal, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const DebugContracts = () => {
    const { debugSectionTitle, debugSectionCards } = theme.homePage;

    // Enhanced icons with web3-style design
    const cardIcons = [
        {
            icon: <Terminal size={24} className="text-cyan-400" />,
            bgColor: "bg-slate-800/80",
            borderColor: "border-cyan-500/30",
            glowColor: "shadow-cyan-500/20",
            badge: "Smart Contract"
        },
        {
            icon: <Bug size={24} className="text-purple-400" />,
            bgColor: "bg-slate-800/80",
            borderColor: "border-purple-500/30",
            glowColor: "shadow-purple-500/20",
            badge: "Debugging"
        },
        {
            icon: <ShieldCheck size={24} className="text-blue-400" />,
            bgColor: "bg-slate-800/80",
            borderColor: "border-blue-500/30",
            glowColor: "shadow-blue-500/20",
            badge: "Security"
        }
    ];

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
            {/* Grid decoration */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

            {/* Animated gradient orbs for web3 futuristic look */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto relative z-10">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <Zap className="text-cyan-400 h-5 w-5" />
                    <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider border-cyan-500/30 bg-slate-800/50 text-cyan-400">
                        Blockchain Tools
                    </Badge>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                        {debugSectionTitle}
                    </span>
                </h2>

                <p className="text-lg text-center text-slate-300 mb-16 max-w-2xl mx-auto">
                    Interact with your smart contracts in real-time and test your DApp functionality
                    with our powerful debugging tools built for the decentralized web.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {debugSectionCards.map((card, index) => {
                        const iconData = cardIcons[index % cardIcons.length];

                        return (
                            <Card
                                key={index}
                                className={cn(
                                    "backdrop-blur-sm bg-slate-900/70 border-slate-700/50 hover:shadow-xl transition-all duration-500 group overflow-hidden",
                                    `hover:${iconData.glowColor} hover:border-${iconData.borderColor.split('-')[1]}`
                                )}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-transparent to-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <CardHeader className="pb-2 relative">
                                    <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", iconData.bgColor, `border ${iconData.borderColor}`)}>
                                        {iconData.icon}
                                    </div>

                                    <Badge
                                        className="absolute top-4 right-6 font-mono text-xs bg-slate-800/50 border-slate-700 text-slate-300"
                                        variant="outline"
                                    >
                                        {iconData.badge}
                                    </Badge>

                                    <CardTitle className="text-xl text-slate-100">
                                        {card.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <CardDescription className="text-slate-400 text-sm leading-relaxed">
                                        {card.description}
                                    </CardDescription>
                                </CardContent>

                                <CardFooter>
                                    <Link href={card.buttonLink} className="w-full">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className={cn(
                                                "w-full bg-slate-800/50 border-slate-700 text-slate-300  group-hover:translate-y-0.5 transition-all duration-300",
                                                `hover:border-${iconData.borderColor.split('-')[1]} hover:${iconData.glowColor}`
                                            )}
                                        >
                                            <span>{card.buttonText}</span>
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};