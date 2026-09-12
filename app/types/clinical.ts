export interface MedicalRecord {
  id: string;
  patientId: string;
  patientName: string;
  diagnosis: string;
  doctor: string;
  lastUpdated: string;
  severity: "Low" | "Moderate" | "High";
}

export interface Prescription {
  id: string;
  patientName: string;
  medication: string;
  dosage: string;
  duration: string;
  doctor: string;
  status: "Active" | "Pending" | "Completed";
}

export interface LabTest {
  id: string;
  patientName: string;
  testName: string;
  orderedBy: string;
  result: "Normal" | "Review" | "Critical";
  date: string;
}
