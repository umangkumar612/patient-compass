export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisEntry[];
  diagnostic_list: DiagnosticItem[];
  lab_results: string[];
}

export interface DiagnosisEntry {
  month: string;
  year: number;
  blood_pressure: {
    systolic: { value: number; levels: string };
    diastolic: { value: number; levels: string };
  };
  heart_rate: { value: number; levels: string };
  respiratory_rate: { value: number; levels: string };
  temperature: { value: number; levels: string };
}

export interface DiagnosticItem {
  name: string;
  description: string;
  status: string;
}

const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
const AUTH = btoa("coalition:skills-test");

export async function fetchPatients(): Promise<Patient[]> {
  const res = await fetch(API_URL, {
    headers: { Authorization: `Basic ${AUTH}` },
  });
  if (!res.ok) throw new Error("Failed to fetch patients");
  return res.json();
}
