import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContractFunction } from "./ContractFunction";

export function ContractInteraction() {
  return (
    <Card className="backdrop-blur-sm bg-slate-900/70 border-slate-700/50 hover:shadow-xl transition-all duration-500 group overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl text-slate-100">Contract Interaction</CardTitle>
        <CardDescription className="text-slate-400">
          Read and write contract functions with type-safe parameters
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Read Functions Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-slate-100">Read Functions</h3>
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
        </div>

        {/* Write Functions Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-slate-100">Write Functions</h3>
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
        </div>
      </CardContent>
    </Card>
  );
} 