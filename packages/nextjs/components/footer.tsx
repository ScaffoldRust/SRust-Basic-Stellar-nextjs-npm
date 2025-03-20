import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Github,
  X,
  MessageCircleIcon,
  SendIcon,
  ExternalLinkIcon,
  CodeIcon,
  UsersIcon,
  GitBranch
} from "lucide-react";

export function Footer({ appName = "Scaffold Rust", footerText = "© {year} All rights reserved." }) {
  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950 border-t border-purple-800/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">{appName}</h3>
            <p className="text-sm text-slate-300 max-w-xs backdrop-blur-sm">
              Building the decentralized future, one block at a time.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-amber-700 animate-pulse"></div>
              <span className="text-xs text-slate-400">Mainnet Active</span>
            </div>
          </div>

          {/* Quick Links section */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-lg font-medium text-slate-100">Resources</h3>
            <nav className="flex flex-col space-y-3">
              <Button variant="link" className="justify-start px-0 text-slate-300 hover:text-cyan-400 w-fit transition-colors duration-300 flex items-center gap-2">
                <CodeIcon className="h-4 w-4" />
                Documentation
              </Button>
              <Button variant="link" className="justify-start px-0 text-slate-300 hover:text-cyan-400 w-fit transition-colors duration-300 flex items-center gap-2">
                <GitBranch className="h-4 w-4" />
                GitHub
              </Button>
              <Button variant="link" className="justify-start px-0 text-slate-300 hover:text-cyan-400 w-fit transition-colors duration-300 flex items-center gap-2">
                <UsersIcon className="h-4 w-4" />
                Community
              </Button>
            </nav>
          </div>

          {/* Connect section */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-lg font-medium text-slate-100">Connect</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-slate-900/50 border-slate-700/50 hover:border-cyan-500 hover:bg-slate-800/70 transition-all duration-300">
                <X className="h-4 w-4 text-slate-300" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-slate-900/50 border-slate-700/50 hover:border-cyan-500 hover:bg-slate-800/70 transition-all duration-300">
                <MessageCircleIcon className="h-4 w-4 text-slate-300" />
                <span className="sr-only">Discord</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-slate-900/50 border-slate-700/50 hover:border-cyan-500 hover:bg-slate-800/70 transition-all duration-300">
                <SendIcon className="h-4 w-4 text-slate-300" />
                <span className="sr-only">Telegram</span>
              </Button>
            </div>
            <Button variant="outline" className="w-fit text-sm px-4 py-2 bg-slate-900/50 border-slate-700/50 hover:border-purple-500 text-slate-300 hover:text-slate-100 transition-all duration-300 flex items-center gap-2">
              <ExternalLinkIcon className="h-4 w-4" />
              Join the DAO
            </Button>
          </div>
        </div>
        
        <Separator className="bg-slate-800/50" />
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400 mb-4 md:mb-0">
            {footerText.replace("{year}", new Date().getFullYear().toString())}
          </p>
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <span>Built on</span>
            <span className="font-mono bg-slate-800 rounded px-2 py-1">?</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;