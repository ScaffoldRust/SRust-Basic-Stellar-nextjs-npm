import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function InvokeContract() {
  return (
    <Card className="backdrop-blur-sm bg-slate-900/70 border-slate-700/50 hover:shadow-xl transition-all duration-500 group overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl text-slate-100">Contract Invocation</CardTitle>
        <CardDescription className="text-slate-400">
          Execute Stellar smart contract functions with custom parameters
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Contract ID</label>
          <Input placeholder="Enter Stellar Contract ID" className="bg-slate-800/50 border-slate-700 text-slate-300" />
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Source Account</label>
              <Input placeholder="G..." className="bg-slate-800/50 border-slate-700 text-slate-300" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Signer Key</label>
              <Input type="password" placeholder="Enter signer key" className="bg-slate-800/50 border-slate-700 text-slate-300" />
            </div>
          </div>
        </div>
        <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-none">
          <Play className="mr-2 h-4 w-4" />
          Invoke Contract
        </Button>
      </CardContent>
    </Card>
  );
} 