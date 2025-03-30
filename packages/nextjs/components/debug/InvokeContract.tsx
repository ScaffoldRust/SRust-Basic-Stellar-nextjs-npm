import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Play, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface InvokeContractProps {
  onSuccess?: () => void;
}

export function InvokeContract({ onSuccess }: InvokeContractProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInvoke = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    try {
      // Simulate contract invocation
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
      // Add delay before switching tabs to show success message
      await new Promise(resolve => setTimeout(resolve, 1500));
      onSuccess?.();
    } catch (error) {
      console.error('Failed to invoke contract:', error);
    } finally {
      setIsLoading(false);
      setIsSuccess(false);
    }
  };

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
        <Button 
          className={`w-full border-none transition-all duration-300 ${
            isSuccess 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
          } text-white`}
          onClick={handleInvoke}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Invoking...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Invocation Successful
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Invoke Contract
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
} 