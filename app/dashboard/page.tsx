"use client";

import { useEffect, useMemo, useState } from "react";
import { appointments as fallbackAppointments, departments as fallbackDepartments, metrics, patients as fallbackPatients } from "@/app/lib/db";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

function getNameFromRecord(record: Record<string, unknown>) {
  const firstName = String(record.first_name ?? record.firstName ?? "").trim();
  const lastName = String(record.last_name ?? record.lastName ?? "").trim();
  const directName = String(record.name ?? record.patient_name ?? record.patientName ?? "").trim();

  if (directName) return directName;
  if (firstName || lastName) return `${firstName} ${lastName}`.trim();
  return "Unknown patient";
}

export default function DashboardPage() {
  const [patients, setPatients] = useState(fallbackPatients);
  const [appointments, setAppointments] = useState(fallbackAppointments);
  const [departments, setDepartments] = useState(fallbackDepartments);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [patientsRes, appointmentsRes, departmentsRes] = await Promise.all([
          fetch(`${API_BASE}/core/patients`).then((res) => res.json()).catch(() => []),
          fetch(`${API_BASE}/core/appointments`).then((res) => res.json()).catch(() => []),
          fetch(`${API_BASE}/core/departments`).then((res) => res.json()).catch(() => []),
        ]);

        if (Array.isArray(patientsRes) && patientsRes.length > 0) {
          setPatients(
            patientsRes.map((patient: Record<string, unknown>, index: number) => ({
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

        if (Array.isArray(appointmentsRes) && appointmentsRes.length > 0) {
          setAppointments(
            appointmentsRes.map((appointment: Record<string, unknown>, index: number) => ({
              id: String(appointment.appointment_id ?? appointment.id ?? `AP-${index + 1}`),
              patientName: String(appointment.patient_name ?? appointment.patientName ?? getNameFromRecord(appointment)),
              doctorName: String(appointment.doctor_name ?? appointment.doctorName ?? "Doctor TBD"),
              date: String(appointment.appointment_date ?? appointment.date ?? "N/A"),
              time: String(appointment.appointment_time ?? appointment.time ?? "N/A"),
              type: (String(appointment.type ?? "Consultation") as "Consultation" | "Follow-up" | "Emergency" | "Procedure"),
              status: (String(appointment.status ?? "Scheduled") as "Scheduled" | "Checked In" | "Completed" | "Cancelled"),
            })),
          );
        }

        if (Array.isArray(departmentsRes) && departmentsRes.length > 0) {
          setDepartments(
            departmentsRes.map((department: Record<string, unknown>, index: number) => ({
              id: String(department.department_id ?? department.id ?? `DEP-${index + 1}`),
              name: String(department.department_name ?? department.name ?? "Department"),
              head: String(department.head ?? department.department_head ?? "TBD"),
              beds: Number(department.beds ?? department.total_beds ?? 0),
              occupancy: Number(department.occupancy ?? department.occupancy_rate ?? 0),
            })),
          );
        }
      } catch {
        setPatients(fallbackPatients);
        setAppointments(fallbackAppointments);
        setDepartments(fallbackDepartments);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  const statCards = useMemo(
    () => [
      { label: "Bed occupancy", value: `${departments.reduce((sum, dept) => sum + dept.occupancy, 0) / Math.max(departments.length, 1)}%`, tone: "bg-cyan-100 text-cyan-700" },
      { label: "Patients today", value: String(patients.length || metrics.totalPatients), tone: "bg-violet-100 text-violet-700" },
      { label: "Open appointments", value: String(appointments.length || metrics.activeAppointments), tone: "bg-emerald-100 text-emerald-700" },
      { label: "Pending bills", value: String(metrics.pendingBills), tone: "bg-amber-100 text-amber-700" },
    ],
    [appointments.length, departments, patients.length],
  );

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Dashboard</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Hospital overview</h1>
      </div>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => (
          <div key={card.label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${card.tone}`}>{card.label}</div>
            <p className="mt-4 text-3xl font-bold text-slate-900">{card.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Patients under care</h2>
            <span className="text-xs font-medium text-slate-500">{loading ? "Loading..." : "Updated now"}</span>
          </div>
          <div className="space-y-3">
            {patients.map((patient) => (
              <div key={patient.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{patient.name}</p>
                  <p className="text-sm text-slate-500">{patient.department} • {patient.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-700">{patient.status}</p>
                  <p className="text-xs text-slate-500">{patient.doctor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
            <h2 className="text-xl font-semibold">Today’s schedule</h2>
            <div className="mt-5 space-y-3">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="rounded-xl bg-white/5 p-3">
                  <p className="font-medium">{appointment.patientName}</p>
                  <p className="mt-1 text-sm text-slate-300">{appointment.time} • {appointment.doctorName}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold">Department load</h2>
            <div className="mt-5 space-y-4">
              {departments.map((department) => (
                <div key={department.id}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{department.name}</span>
                    <span className="text-slate-500">{department.occupancy}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div className="h-2 rounded-full bg-cyan-500" style={{ width: `${department.occupancy}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
