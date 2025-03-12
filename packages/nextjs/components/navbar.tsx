"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { theme } from "../config/theme";
import { Coins, Globe, Menu, X } from "lucide-react";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <nav
            className={`sticky top-0 z-30 flex items-center justify-between px-4 py-3 transition-all duration-300 ${isScrolled
                    ? "bg-neutral bg-opacity-90 backdrop-blur-sm shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="flex items-center gap-4">
                <Link href="/" passHref>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary bg-opacity-20 text-primary">
                            <Globe color="white" size={24} />
                        </div>
                        <span className={`font-bold text-xl ${isScrolled ? 'text-black' : 'text-primary'}`}>
                            {theme.appName}
                        </span>
                    </div>
                </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`p-2 rounded-full ${isScrolled
                            ? "text-black hover:bg-neutral-focus"
                            : "text-primary hover:bg-primary hover:bg-opacity-10"
                        } focus:outline-none transition-colors`}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:gap-8">
                <Link
                    href="/"
                    className={`font-medium ${isScrolled ? "text-black hover:text-primary" : "text-gray-800 hover:text-primary"
                        }`}
                >
                    Home
                </Link>
                <Link
                    href="#"
                    className={`font-medium ${isScrolled ? "text-black hover:text-primary" : "text-gray-800 hover:text-primary"
                        }`}
                >
                    Debug Contracts
                </Link>
                <Link
                    href="#"
                    className={`font-medium ${isScrolled ? "text-black hover:text-primary" : "text-gray-800 hover:text-primary"
                        }`}
                >
                    Docs
                </Link>
                <button className="ml-4 p-2 btn btn-primary px-6 font-bold shadow-md shadow-primary/30 border-0 rounded-lg hover:shadow-lg hover:shadow-primary/40 hover:brightness-110 hover:cursor-pointer transition-all">
                    Connect Wallet
                </button>

            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-neutral p-4 shadow-xl md:hidden flex flex-col gap-4 border-t border-gray-700">
                    <Link
                        href="/"
                        className="text-white hover:text-primary py-2 font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/debug"
                        className="text-white hover:text-primary py-2 font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Debug Contracts
                    </Link>
                    <Link
                        href="#"
                        className="text-white hover:text-primary py-2 font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Docs
                    </Link>
                    <button className="btn btn-primary w-full font-bold shadow-md shadow-primary/30 border-0 hover:shadow-lg hover:shadow-primary/40 hover:brightness-110 transition-all">
                        Connect Wallet
                    </button>
                </div>
            )}
        </nav>
    );
};