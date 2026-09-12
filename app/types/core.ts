export type Status = "Stable" | "Critical" | "Recovered" | "Under Review";

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  bloodGroup: string;
  department: string;
  doctor: string;
  location: string;
  lastVisit: string;
  status: Status;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  department: string;
  availability: string;
  rating: number;
}

export interface Department {
  id: string;
  name: string;
  head: string;
  beds: number;
  occupancy: number;
}

export interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  type: "Consultation" | "Follow-up" | "Emergency" | "Procedure";
  status: "Scheduled" | "Checked In" | "Completed" | "Cancelled";
}
