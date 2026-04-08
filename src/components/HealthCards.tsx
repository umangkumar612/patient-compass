import { Wind, Thermometer, Heart } from "lucide-react";
import type { DiagnosisEntry } from "@/lib/api";

interface Props {
  latest: DiagnosisEntry;
}

export default function HealthCards({ latest }: Props) {
  const cards = [
    {
      label: "Respiratory Rate",
      value: `${latest.respiratory_rate.value} bpm`,
      status: latest.respiratory_rate.levels,
      icon: Wind,
      bgClass: "bg-respiratory",
    },
    {
      label: "Temperature",
      value: `${latest.temperature.value}°F`,
      status: latest.temperature.levels,
      icon: Thermometer,
      bgClass: "bg-temperature",
    },
    {
      label: "Heart Rate",
      value: `${latest.heart_rate.value} bpm`,
      status: latest.heart_rate.levels,
      icon: Heart,
      bgClass: "bg-heartrate",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.label} className={`${card.bgClass} rounded-xl p-4`}>
          <div className="w-16 h-16 rounded-full bg-card/60 flex items-center justify-center mb-3">
            <card.icon className="w-8 h-8 text-foreground" />
          </div>
          <p className="text-sm font-medium text-muted-foreground">{card.label}</p>
          <p className="text-2xl font-extrabold text-foreground mt-1">{card.value}</p>
          <p className="text-sm text-muted-foreground mt-2">{card.status}</p>
        </div>
      ))}
    </div>
  );
}
