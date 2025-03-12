// packages/nextjs/components/HomeHero.tsx
import React from "react";
import Link from "next/link";
import { theme } from "../config/theme";


export const HomeHero = () => {
    const { heroTitle, heroSubtitle, heroButtonText, heroSecondaryButtonText } = theme.homePage;

    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-primary opacity-10 blur-3xl"></div>
                <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-secondary opacity-10 blur-3xl"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        {heroTitle}
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        {heroSubtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/debug" className="btn btn-primary btn-lg px-8 shadow-lg shadow-primary/30 border-0 hover:shadow-xl hover:shadow-primary/40 hover:brightness-110 transition-all">
                            {heroButtonText}
                        </Link>
                        <button className="btn btn-outline btn-lg px-8 border-gray-300 hover:border-secondary hover:bg-secondary/10 hover:text-secondary transition-all">
                            {heroSecondaryButtonText}
                        </button>
                    </div>

                    {/* Code snippet preview */}
                    <div className="mt-16 bg-neutral text-neutral-content p-6 rounded-lg shadow-xl mx-auto max-w-2xl overflow-hidden text-left">
                        <pre className="text-sm md:text-base overflow-x-auto">
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
                                <span className="text-blue-400">new</span> ethers.providers.Web3Provider(
                                window.ethereum);
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
                    </div>
                </div>
            </div>
        </section>
    );
};
