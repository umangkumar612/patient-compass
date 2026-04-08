import { Calendar, Users, Phone, ShieldCheck } from "lucide-react";
import type { Patient } from "@/lib/api";

interface Props {
  patient: Patient;
}

export default function PatientDetails({ patient }: Props) {
  const dob = new Date(patient.date_of_birth);
  const formattedDob = dob.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  const details = [
    { icon: Calendar, label: "Date Of Birth", value: formattedDob },
    { icon: Users, label: "Gender", value: patient.gender },
    { icon: Phone, label: "Contact Info.", value: patient.phone_number },
    { icon: Phone, label: "Emergency Contacts", value: patient.emergency_contact },
    { icon: ShieldCheck, label: "Insurance Provider", value: patient.insurance_type },
  ];

  return (
    <div className="bg-card rounded-2xl shadow-sm p-5 flex flex-col items-center">
      <img
        src={patient.profile_picture}
        alt={patient.name}
        className="w-[200px] h-[200px] rounded-full object-cover mb-4"
      />
      <h2 className="text-2xl font-extrabold text-foreground mb-6">{patient.name}</h2>

      <div className="w-full space-y-4">
        {details.map((d, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
              <d.icon className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{d.label}</p>
              <p className="text-sm font-bold text-foreground">{d.value}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full bg-nav-active text-primary-foreground font-bold py-3 rounded-full text-sm hover:opacity-90 transition-opacity">
        Show All Information
      </button>
    </div>
  );
}
