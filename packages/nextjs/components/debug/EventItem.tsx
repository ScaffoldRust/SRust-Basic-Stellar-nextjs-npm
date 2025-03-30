import { Badge } from "@/components/ui/badge";

export interface EventItemProps {
  type: string;
  details: Array<{
    label: string;
    value: string;
  }>;
  blockNumber: number;
}

export function EventItem({ type, details, blockNumber }: EventItemProps) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
      <div>
        <h3 className="font-medium text-slate-100">{type}</h3>
        {details.map((detail) => (
          <p key={detail.label} className="text-sm text-slate-400">
            {detail.label}: {detail.value}
          </p>
        ))}
      </div>
      <Badge variant="secondary" className="bg-slate-800/50 border-slate-700 text-slate-300">
        Block #{blockNumber}
      </Badge>
    </div>
  );
} 