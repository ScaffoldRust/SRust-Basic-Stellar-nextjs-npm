import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ContractFunctionProps {
  name: string;
  returnType: string;
  parameters?: Array<{
    name: string;
    type: string;
    placeholder: string;
  }>;
}

export function ContractFunction({ name, returnType, parameters }: ContractFunctionProps) {
  return (
    <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/30">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-medium text-slate-100">{name}</h4>
        <Badge variant="outline" className="border-slate-700 text-slate-300">Returns: {returnType}</Badge>
      </div>
      {parameters && (
        <div className="space-y-2">
          {parameters.map((param) => (
            <div key={param.name} className="grid grid-cols-[120px_1fr_100px] items-center gap-2">
              <label className="text-sm font-medium text-slate-300 truncate">{param.name}:</label>
              <Input placeholder={param.placeholder} className="bg-slate-800/50 border-slate-700 text-slate-300" />
              <Badge variant="outline" className="border-slate-700 text-slate-300 truncate">{param.type}</Badge>
            </div>
          ))}
        </div>
      )}
      <Button className="w-full mt-3 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white border-none">
        Execute {name}
      </Button>
    </div>
  );
} 