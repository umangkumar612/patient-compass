import { useEffect, useState } from "react";
import { fetchPatients, type Patient } from "@/lib/api";
import TopNav from "@/components/TopNav";
import PatientsSidebar from "@/components/PatientsSidebar";
import BloodPressureChart from "@/components/BloodPressureChart";
import HealthCards from "@/components/HealthCards";
import DiagnosticList from "@/components/DiagnosticList";
import PatientDetails from "@/components/PatientDetails";
import LabResults from "@/components/LabResults";

const SELECTED_PATIENT = "Jessica Taylor";

export default function Index() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPatients()
      .then(setPatients)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const jessica = patients.find((p) => p.name === SELECTED_PATIENT);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nav-active" />
      </div>
    );
  }

  if (!jessica) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground text-lg">Patient not found.</p>
      </div>
    );
  }

  const latestDiagnosis = jessica.diagnosis_history[0];

  return (
    <div className="min-h-screen bg-background p-4 lg:p-5">
      {/* Top Navigation */}
      <TopNav />

      {/* Main 3-column layout */}
      <div className="mt-5 flex flex-col lg:flex-row gap-5">
        {/* Left Sidebar - Patients List */}
        <aside className="w-full lg:w-[280px] shrink-0 lg:max-h-[calc(100vh-120px)]">
          <PatientsSidebar patients={patients} selected={SELECTED_PATIENT} />
        </aside>

        {/* Center Content */}
        <main className="flex-1 flex flex-col gap-5 min-w-0">
          {/* Diagnosis History */}
          <div className="bg-card rounded-2xl shadow-sm p-5">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Diagnosis History</h2>
            <BloodPressureChart history={jessica.diagnosis_history} />
          </div>

          {/* Health Stat Cards */}
          <HealthCards latest={latestDiagnosis} />

          {/* Diagnostic List */}
          <DiagnosticList items={jessica.diagnostic_list} />
        </main>

        {/* Right Sidebar - Patient Details + Lab Results */}
        <aside className="w-full lg:w-[300px] shrink-0 flex flex-col gap-5">
          <PatientDetails patient={jessica} />
          <LabResults results={jessica.lab_results} />
        </aside>
      </div>
    </div>
  );
}
