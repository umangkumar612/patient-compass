import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { DiagnosisEntry } from "@/lib/api";
import { ArrowUp, ArrowDown } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

interface Props {
  history: DiagnosisEntry[];
}

export default function BloodPressureChart({ history }: Props) {
  const last6 = history.slice(0, 6).reverse();
  const labels = last6.map((e) => `${e.month.slice(0, 3)}, ${e.year}`);

  const latestSystolic = last6[last6.length - 1]?.blood_pressure.systolic;
  const latestDiastolic = last6[last6.length - 1]?.blood_pressure.diastolic;

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: last6.map((e) => e.blood_pressure.systolic.value),
        borderColor: "hsl(340, 80%, 60%)",
        backgroundColor: "hsl(340, 80%, 60%)",
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: "hsl(340, 80%, 60%)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
      {
        label: "Diastolic",
        data: last6.map((e) => e.blood_pressure.diastolic.value),
        borderColor: "hsl(260, 60%, 55%)",
        backgroundColor: "hsl(260, 60%, 55%)",
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: "hsl(260, 60%, 55%)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: "hsl(215, 16%, 47%)",
          font: { size: 12 },
        },
        grid: { color: "hsl(214, 32%, 91%)" },
      },
      x: {
        ticks: {
          color: "hsl(215, 16%, 47%)",
          font: { size: 12 },
        },
        grid: { display: false },
      },
    },
  } as const;

  return (
    <div className="bg-muted/60 rounded-xl p-5">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-extrabold text-foreground">Blood Pressure</h3>
        <select className="text-sm bg-transparent border-none text-muted-foreground font-semibold cursor-pointer focus:outline-none">
          <option>Last 6 months</option>
        </select>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 h-[200px]">
          <Line data={data} options={options} />
        </div>

        <div className="flex flex-col justify-center gap-4 min-w-[140px]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: "hsl(340, 80%, 60%)" }} />
              <span className="text-sm font-semibold text-foreground">Systolic</span>
            </div>
            <p className="text-2xl font-extrabold text-foreground mt-1">{latestSystolic?.value}</p>
            <div className="flex items-center gap-1 mt-1">
              <ArrowUp className="w-3 h-3 text-foreground" />
              <span className="text-xs text-muted-foreground">{latestSystolic?.levels}</span>
            </div>
          </div>
          <div className="w-full h-px bg-border" />
          <div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: "hsl(260, 60%, 55%)" }} />
              <span className="text-sm font-semibold text-foreground">Diastolic</span>
            </div>
            <p className="text-2xl font-extrabold text-foreground mt-1">{latestDiastolic?.value}</p>
            <div className="flex items-center gap-1 mt-1">
              <ArrowDown className="w-3 h-3 text-foreground" />
              <span className="text-xs text-muted-foreground">{latestDiastolic?.levels}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
