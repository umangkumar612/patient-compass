import { Search, MoreHorizontal } from "lucide-react";
import type { Patient } from "@/lib/api";

interface Props {
  patients: Patient[];
  selected: string;
}

export default function PatientsSidebar({ patients, selected }: Props) {
  return (
    <div className="bg-card rounded-2xl shadow-sm flex flex-col h-full">
      <div className="flex items-center justify-between p-5 pb-3">
        <h2 className="text-2xl font-extrabold text-foreground">Patients</h2>
        <Search className="w-5 h-5 text-muted-foreground" />
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {patients.map((patient) => {
          const isActive = patient.name === selected;
          return (
            <div
              key={patient.name}
              className={`flex items-center gap-3 px-5 py-4 cursor-pointer transition-colors ${
                isActive ? "bg-patient-active" : "hover:bg-muted/50"
              }`}
            >
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground truncate">{patient.name}</p>
                <p className="text-xs text-muted-foreground">
                  {patient.gender}, {patient.age}
                </p>
              </div>
              <MoreHorizontal className="w-5 h-5 text-muted-foreground shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
