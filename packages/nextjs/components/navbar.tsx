"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { theme } from "../config/theme";
import { Globe, Menu, X, ChevronDown, Zap, Server } from "lucide-react";
import ConnectWalletButton from "./ui/connectWalletButton";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const navlinks = [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "Debug Contracts", path: "#" },
    ]

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
                                {theme.appName}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
                {/* Small connect button for mobile */}
                <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-700 bg-slate-800/70 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 mr-2 hidden sm:flex"
                >
                    Connect
                </Button>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full border-slate-700 bg-slate-800/70 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50"
                        >
                            <Menu size={20} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-slate-900 border-slate-700">
                        <div className="flex flex-col gap-6 pt-8">
                            <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30">
                                    <Zap size={16} className="text-cyan-400" />
                                </div>
                                <span className="font-bold text-slate-100">{theme.appName}</span>
                                <Badge className="ml-auto text-xs bg-slate-800 text-slate-400 hover:bg-slate-800">Beta</Badge>
                            </div>

                            {navlinks.map((navlink) => (
                                <Link
                                    key={navlink.id}
                                    href={navlink.path}
                                    className="flex items-center gap-3 font-medium text-slate-200 hover:text-cyan-400 transition-colors py-2 border-b border-slate-800/50"
                                >
                                    {navlink.id === 1 && <Globe size={16} className="text-cyan-500" />}
                                    {navlink.id === 2 && <Server size={16} className="text-purple-400" />}
                                    {navlink.title}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <ConnectWalletButton />
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:gap-6">
                <NavigationMenu>
                    <NavigationMenuList>
                        {navlinks.map((navlink) => (
                            <NavigationMenuItem key={navlink.id}>
                                <Link href={navlink.path} legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className="flex items-center gap-2 font-medium px-4 py-2 rounded-md transition-colors text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50"
                                    >
                                        {navlink.id === 1 && <Globe size={14} className="text-cyan-500" />}
                                        {navlink.id === 2 && <Server size={14} className="text-purple-400" />}
                                        {navlink.title}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="h-6 w-px bg-slate-700/50 mx-2"></div>

                <ConnectWalletButton />
            </div>
        </nav>
    );
};