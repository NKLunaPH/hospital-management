"use client";

import { useEffect, useState } from "react";
import { patients as fallbackPatients } from "@/app/lib/db";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

function getNameFromRecord(record: Record<string, unknown>) {
  const firstName = String(record.first_name ?? record.firstName ?? "").trim();
  const lastName = String(record.last_name ?? record.lastName ?? "").trim();
  const directName = String(record.name ?? record.patient_name ?? record.patientName ?? "").trim();

  if (directName) return directName;
  if (firstName || lastName) return `${firstName} ${lastName}`.trim();
  return "Unknown patient";
}

export default function PatientsPage() {
  const [patients, setPatients] = useState(fallbackPatients);

  useEffect(() => {
    async function loadPatients() {
      try {
        const response = await fetch(`${API_BASE}/core/patients`);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setPatients(
            data.map((patient: Record<string, unknown>, index: number) => ({
              id: String(patient.patient_id ?? patient.id ?? `PT-${index + 1}`),
              name: getNameFromRecord(patient),
              age: Number(patient.age ?? patient.patient_age ?? 0),
              gender: (String(patient.gender ?? "Other") as "Male" | "Female" | "Other"),
              bloodGroup: String(patient.blood_group ?? patient.bloodGroup ?? "N/A"),
              department: String(patient.department ?? patient.department_name ?? "General"),
              doctor: String(patient.doctor ?? patient.doctor_name ?? "TBD"),
              location: String(patient.location ?? patient.room ?? "Ward TBD"),
              lastVisit: String(patient.last_visit ?? patient.lastVisit ?? "N/A"),
              status: (String(patient.status ?? "Stable") as "Stable" | "Critical" | "Recovered" | "Under Review"),
            })),
          );
        }
      } catch {
        setPatients(fallbackPatients);
      }
    }

    loadPatients();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Patients</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Patient registry</h1>
        </div>
        <button className="rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-medium text-white">+ Add patient</button>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-5 py-3 font-semibold">Name</th>
              <th className="px-5 py-3 font-semibold">Department</th>
              <th className="px-5 py-3 font-semibold">Doctor</th>
              <th className="px-5 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-t border-slate-200">
                <td className="px-5 py-4 font-medium text-slate-900">{patient.name}</td>
                <td className="px-5 py-4 text-slate-600">{patient.department}</td>
                <td className="px-5 py-4 text-slate-600">{patient.doctor}</td>
                <td className="px-5 py-4"><span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{patient.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
