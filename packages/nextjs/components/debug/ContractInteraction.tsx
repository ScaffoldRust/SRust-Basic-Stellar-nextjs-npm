import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContractFunction } from "./ContractFunction";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, PenSquare } from "lucide-react";

export function ContractInteraction() {
  return (
    <Card className="backdrop-blur-sm bg-slate-900/70 border-slate-700/50 hover:shadow-xl transition-all duration-500 group overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl text-slate-100">Contract Interaction</CardTitle>
        <CardDescription className="text-slate-400">
          Read and write contract functions with type-safe parameters
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="read" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border-slate-700/50">
            <TabsTrigger value="read" className="text-gray-400 data-[state=active]:bg-slate-700/50 data-[state=active]:text-cyan-400">
              <BookOpen className="mr-2 h-4 w-4" />
              Read Functions
            </TabsTrigger>
            <TabsTrigger value="write" className="text-gray-400 data-[state=active]:bg-slate-700/50 data-[state=active]:text-purple-400">
              <PenSquare className="mr-2 h-4 w-4" />
              Write Functions
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="read" className="space-y-4">
            <div className="space-y-4">
              <ContractFunction
                name="balanceOf"
                returnType="u128"
                parameters={[
                  { name: "account", type: "Address", placeholder: "Enter account address" }
                ]}
              />
              <ContractFunction
                name="totalSupply"
                returnType="u128"
              />
            </div>
          </TabsContent>

          <TabsContent value="write" className="space-y-4">
            <div className="space-y-4">
              <ContractFunction
                name="transfer"
                returnType="void"
                parameters={[
                  { name: "to", type: "Address", placeholder: "Enter recipient address" },
                  { name: "amount", type: "u128", placeholder: "Enter amount" }
                ]}
              />
              <ContractFunction
                name="approve"
                returnType="void"
                parameters={[
                  { name: "spender", type: "Address", placeholder: "Enter spender address" },
                  { name: "amount", type: "u128", placeholder: "Enter amount" }
                ]}
              />
              <ContractFunction
                name="mint"
                returnType="void"
                parameters={[
                  { name: "to", type: "Address", placeholder: "Enter recipient address" },
                  { name: "amount", type: "u128", placeholder: "Enter amount" }
                ]}
              />
              <ContractFunction
                name="burn"
                returnType="void"
                parameters={[
                  { name: "amount", type: "u128", placeholder: "Enter amount" },
                  { name: "from", type: "Address", placeholder: "Enter sender address" },
                  { name: "to", type: "Address", placeholder: "Enter recipient address" }
                ]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
} 