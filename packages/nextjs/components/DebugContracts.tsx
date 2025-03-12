import React from "react";
import Link from "next/link";
import { theme } from "../config/theme";
import { Bug, Code, Lock } from "lucide-react";


export const DebugContracts = () => {
    const { debugSectionTitle, debugSectionCards } = theme.homePage;

    // Icons for each card
    const cardIcons = [
        <Code key="code" size={24} className="text-primary" />,
        <Bug key="bug" size={24} className="text-secondary" />,
        <Lock key="lock" size={24} className="text-accent" />
    ];

    return (
        <section className="py-20 px-4 bg-base-100 relative">
            {/* Decorative hexagonal grid background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgM2wzMCAwdjE3TDMwIDM3bC0xNS0xN1YzeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGI1Y2Y2IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-50"></div>

            <div className="container mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        {debugSectionTitle}
                    </span>
                </h2>
                <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                    Interact with your smart contracts in real-time and test your DApp functionality
                    with our powerful debugging tools.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {debugSectionCards.map((card, index) => (
                        <div
                            key={index}
                            className="card bg-base-200 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-primary"
                        >
                            <div className="card-body p-5">
                                <div className="w-12 h-12 rounded-lg bg-primary bg-opacity-10 flex items-center justify-center mb-4">
                                    {cardIcons[index % cardIcons.length]}
                                </div>
                                <h3 className="card-title text-xl font-bold">{card.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">{card.description}</p>
                                <div className="card-actions mt-auto">
                                    {card.buttonLink.startsWith("/") ? (
                                        <Link
                                            href={card.buttonLink}
                                            className="btn btn-primary btn-sm px-6 shadow-md shadow-primary/20 border-0 hover:shadow-lg hover:shadow-primary/30 hover:brightness-110 transition-all"
                                        >
                                            {card.buttonText}
                                        </Link>
                                    ) : (
                                        <button
                                            className="btn btn-outline btn-sm px-6 border-gray-300 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all"
                                        >
                                            {card.buttonText}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};