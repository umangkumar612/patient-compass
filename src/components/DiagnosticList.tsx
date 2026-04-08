import type { DiagnosticItem } from "@/lib/api";

interface Props {
  items: DiagnosticItem[];
}

export default function DiagnosticList({ items }: Props) {
  return (
    <div className="bg-card rounded-2xl shadow-sm p-5">
      <h3 className="text-2xl font-extrabold text-foreground mb-4">Diagnostic List</h3>
      <div className="overflow-auto max-h-[200px] custom-scrollbar">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/60 rounded-t-xl">
              <th className="text-left py-3 px-4 font-bold text-foreground rounded-l-full">Problem/Diagnosis</th>
              <th className="text-left py-3 px-4 font-bold text-foreground">Description</th>
              <th className="text-left py-3 px-4 font-bold text-foreground rounded-r-full">Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} className="border-b border-border last:border-0">
                <td className="py-3 px-4 text-foreground">{item.name}</td>
                <td className="py-3 px-4 text-muted-foreground">{item.description}</td>
                <td className="py-3 px-4 text-muted-foreground">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
