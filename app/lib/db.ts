import type { Appointment, Department, Doctor, Patient } from "@/app/types/core";
import type { BillingRecord, PaymentRecord } from "@/app/types/financials";
import type { InventoryItem, RoomBed, StaffMember } from "@/app/types/admin";
import type { LabTest, MedicalRecord, Prescription } from "@/app/types/clinical";

export const patients: Patient[] = [
  {
    id: "PT-1001",
    name: "Sarah Johnson",
    age: 34,
    gender: "Female",
    bloodGroup: "O+",
    department: "Cardiology",
    doctor: "Dr. A. Morgan",
    location: "Ward A-12",
    lastVisit: "2026-09-10",
    status: "Stable",
  },
  {
    id: "PT-1007",
    name: "Daniel Lee",
    age: 52,
    gender: "Male",
    bloodGroup: "A-",
    department: "Neurology",
    doctor: "Dr. P. Green",
    location: "Ward B-02",
    lastVisit: "2026-09-09",
    status: "Under Review",
  },
  {
    id: "PT-1012",
    name: "Aisha Rahman",
    age: 28,
    gender: "Female",
    bloodGroup: "AB+",
    department: "Orthopedics",
    doctor: "Dr. K. Patel",
    location: "Ward C-06",
    lastVisit: "2026-09-08",
    status: "Recovered",
  },
];

export const doctors: Doctor[] = [
  { id: "DR-01", name: "Dr. A. Morgan", specialty: "Cardiology", department: "Cardiology", availability: "Available today", rating: 4.9 },
  { id: "DR-02", name: "Dr. P. Green", specialty: "Neurology", department: "Neurology", availability: "In surgery", rating: 4.8 },
  { id: "DR-03", name: "Dr. K. Patel", specialty: "Orthopedics", department: "Orthopedics", availability: "Available in 30 min", rating: 4.7 },
];

export const departments: Department[] = [
  { id: "DEP-01", name: "Cardiology", head: "Dr. A. Morgan", beds: 38, occupancy: 82 },
  { id: "DEP-02", name: "Neurology", head: "Dr. P. Green", beds: 30, occupancy: 67 },
  { id: "DEP-03", name: "Orthopedics", head: "Dr. K. Patel", beds: 26, occupancy: 54 },
];

export const appointments: Appointment[] = [
  { id: "AP-201", patientName: "Sarah Johnson", doctorName: "Dr. A. Morgan", date: "2026-09-11", time: "09:30", type: "Consultation", status: "Scheduled" },
  { id: "AP-205", patientName: "Daniel Lee", doctorName: "Dr. P. Green", date: "2026-09-11", time: "13:00", type: "Follow-up", status: "Checked In" },
  { id: "AP-208", patientName: "Aisha Rahman", doctorName: "Dr. K. Patel", date: "2026-09-12", time: "11:15", type: "Procedure", status: "Scheduled" },
];

export const staff: StaffMember[] = [
  { id: "ST-01", name: "Nora Holt", role: "Head Nurse", department: "Cardiology", shift: "Morning", status: "Active" },
  { id: "ST-02", name: "Leo Grant", role: "Lab Technician", department: "Diagnostics", shift: "Evening", status: "On Call" },
  { id: "ST-03", name: "Mina Ali", role: "Billing Officer", department: "Finance", shift: "Morning", status: "Active" },
];

export const beds: RoomBed[] = [
  { id: "BD-101", room: "A-12", type: "General", patient: "Sarah Johnson", status: "Occupied" },
  { id: "BD-102", room: "B-02", type: "Observation", patient: "Daniel Lee", status: "Occupied" },
  { id: "BD-103", room: "C-11", type: "ICU", patient: null, status: "Available" },
  { id: "BD-104", room: "D-04", type: "Private", patient: null, status: "Cleaning" },
];

export const inventory: InventoryItem[] = [
  { id: "INV-01", name: "Syringes", category: "Consumables", quantity: 230, reorderLevel: 80, supplier: "MedSupply Co." },
  { id: "INV-02", name: "IV Fluids", category: "Fluids", quantity: 54, reorderLevel: 60, supplier: "Careline Labs" },
  { id: "INV-03", name: "Bandages", category: "Wound Care", quantity: 90, reorderLevel: 40, supplier: "NorthCare" },
];

export const medicalRecords: MedicalRecord[] = [
  { id: "MR-01", patientId: "PT-1001", patientName: "Sarah Johnson", diagnosis: "Hypertension monitoring", doctor: "Dr. A. Morgan", lastUpdated: "2026-09-10", severity: "Moderate" },
  { id: "MR-02", patientId: "PT-1007", patientName: "Daniel Lee", diagnosis: "Migraine evaluation", doctor: "Dr. P. Green", lastUpdated: "2026-09-09", severity: "High" },
];

export const prescriptions: Prescription[] = [
  { id: "RX-01", patientName: "Sarah Johnson", medication: "Amlodipine", dosage: "5mg", duration: "30 days", doctor: "Dr. A. Morgan", status: "Active" },
  { id: "RX-02", patientName: "Daniel Lee", medication: "Sumatriptan", dosage: "50mg", duration: "14 days", doctor: "Dr. P. Green", status: "Pending" },
];

export const labTests: LabTest[] = [
  { id: "LT-01", patientName: "Sarah Johnson", testName: "ECG", orderedBy: "Dr. A. Morgan", result: "Normal", date: "2026-09-10" },
  { id: "LT-02", patientName: "Daniel Lee", testName: "MRI Scan", orderedBy: "Dr. P. Green", result: "Review", date: "2026-09-09" },
];

export const billingRecords: BillingRecord[] = [
  { id: "INV-1102", patientName: "Sarah Johnson", invoiceNumber: "INV-1102", amount: 540, status: "Paid", date: "2026-09-10" },
  { id: "INV-1104", patientName: "Aisha Rahman", invoiceNumber: "INV-1104", amount: 920, status: "Pending", date: "2026-09-11" },
];

export const payments: PaymentRecord[] = [
  { id: "PMT-01", patientName: "Sarah Johnson", method: "Card", amount: 540, date: "2026-09-10", status: "Approved" },
  { id: "PMT-02", patientName: "Aisha Rahman", method: "Insurance", amount: 920, date: "2026-09-11", status: "Pending" },
];

export const metrics = {
  occupancy: 78,
  totalPatients: 148,
  activeAppointments: 24,
  pendingBills: 12,
};
