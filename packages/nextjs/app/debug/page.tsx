"use client";
import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { theme } from "@/config/theme";
import Head from "next/head";
import { Terminal, Code, Activity, Zap } from "lucide-react";
import { InvokeContract, ContractInteraction, ContractEvents } from "@/components/debug";
import { useState } from "react";

export default function DebugPage() {
  const [activeTab, setActiveTab] = useState("invoke");

  return (
    <>
      <Head>
        <title>Debug Smart Contracts - {theme.appName}</title>
        <meta name="description" content="Debug and interact with smart contracts" />
      </Head>
      <Layout>
        <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
          {/* Grid decoration */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

          {/* Animated gradient orbs */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

          <div className="container mx-auto relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Zap className="text-cyan-400 h-5 w-5" />
              <Badge variant="outline" className="text-xs font-mono uppercase tracking-wider border-cyan-500/30 bg-slate-800/50 text-cyan-400">
                Debug Console
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Smart Contract Debugger
              </span>
            </h1>

            <p className="text-lg text-center text-slate-300 mb-12 max-w-2xl mx-auto">
              Interact with and debug your smart contracts in real-time with our powerful debugging tools
            </p>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList className="grid w-full grid-cols-3 bg-slate-800/50 border-slate-700/50">
                <TabsTrigger value="invoke" className="text-gray-400 data-[state=active]:bg-slate-700/50 data-[state=active]:text-cyan-400">
                  <Terminal className="mr-2 h-4 w-4" />
                  Invoke
                </TabsTrigger>
                <TabsTrigger value="interact" className="text-gray-400 data-[state=active]:bg-slate-700/50 data-[state=active]:text-purple-400">
                  <Code className="mr-2 h-4 w-4" />
                  Interact
                </TabsTrigger>
                <TabsTrigger value="events" className="text-gray-400 data-[state=active]:bg-slate-700/50 data-[state=active]:text-blue-400">
                  <Activity className="mr-2 h-4 w-4" />
                  Events
                </TabsTrigger>
              </TabsList>

              <TabsContent value="invoke" className="space-y-4">
                <InvokeContract onSuccess={() => setActiveTab("interact")} />
              </TabsContent>

              <TabsContent value="interact" className="space-y-4">
                <ContractInteraction />
              </TabsContent>

              <TabsContent value="events" className="space-y-4">
                <ContractEvents />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </Layout>
    </>
  );
}
