import { Download } from "lucide-react";

interface Props {
  results: string[];
}

export default function LabResults({ results }: Props) {
  return (
    <div className="bg-card rounded-2xl shadow-sm p-5">
      <h3 className="text-2xl font-extrabold text-foreground mb-4">Lab Results</h3>
      <div className="max-h-[240px] overflow-y-auto custom-scrollbar">
        {results.map((result, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-3 border-b border-border last:border-0"
          >
            <span className="text-sm text-foreground">{result}</span>
            <button className="p-1 hover:bg-muted rounded transition-colors">
              <Download className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
