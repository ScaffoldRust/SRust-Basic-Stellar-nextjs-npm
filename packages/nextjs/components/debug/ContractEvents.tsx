import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EventItem } from "./EventItem";

export function ContractEvents() {
  return (
    <Card className="backdrop-blur-sm bg-slate-900/70 border-slate-700/50 hover:shadow-xl transition-all duration-500 group overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl text-slate-100">Contract Events</CardTitle>
        <CardDescription className="text-slate-400">
          Monitor and filter contract events in real-time
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Event Type</label>
          <Select>
            <SelectTrigger className="bg-slate-800/50 border-slate-700">
              <SelectValue placeholder="Select an event type" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700 text-slate-300">
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="transfer">Transfer</SelectItem>
              <SelectItem value="mint">Mint</SelectItem>
              <SelectItem value="burn">Burn</SelectItem>
              <SelectItem value="approval">Approval</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ScrollArea className="h-[400px] rounded-md border border-slate-700/50 bg-slate-800/50 p-4">
          <div className="space-y-4">
            <EventItem
              type="Transfer"
              details={[
                { label: "From", value: "0x123...abc" },
                { label: "To", value: "0x456...def" },
                { label: "Amount", value: "1.5 XLM" }
              ]}
              blockNumber={12345}
            />
            <EventItem
              type="Approval"
              details={[
                { label: "Owner", value: "0x789...ghi" },
                { label: "Spender", value: "0xabc...jkl" },
                { label: "Amount", value: "2.0 XLM" }
              ]}
              blockNumber={12346}
            />
            <EventItem
              type="Approval"
              details={[
                { label: "Owner", value: "0x789...ghi" },
                { label: "Spender", value: "0xabc...jkl" },
                { label: "Amount", value: "2.0 XLM" }
              ]}
              blockNumber={12346}
            />
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
} 