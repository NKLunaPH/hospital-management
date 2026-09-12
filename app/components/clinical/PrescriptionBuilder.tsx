"use client";

import { useMemo, useState } from "react";

type Medication = {
  id: number;
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  notes: string;
};

const starterItems: Medication[] = [
  {
    id: 1,
    name: "Amlodipine",
    dosage: "5 mg",
    frequency: "Once daily",
    duration: "30 days",
    notes: "After breakfast",
  },
  {
    id: 2,
    name: "Ibuprofen",
    dosage: "200 mg",
    frequency: "Every 8 hours as needed",
    duration: "7 days",
    notes: "Take with food",
  },
];

export default function PrescriptionBuilder() {
  const [patientName, setPatientName] = useState("Sarah Johnson");
  const [doctorName, setDoctorName] = useState("Dr. A. Morgan");
  const [visitType, setVisitType] = useState("Follow-up");
  const [items, setItems] = useState<Medication[]>(starterItems);
  const [submitted, setSubmitted] = useState(false);

  const summary = useMemo(
    () => items.map((item) => `${item.name} ${item.dosage} ${item.frequency}`).join(" • "),
    [items]
  );

  const updateItem = (id: number, field: keyof Medication, value: string) => {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const addMedication = () => {
    setItems((current) => [
      ...current,
      {
        id: Date.now(),
        name: "New medication",
        dosage: "",
        frequency: "",
        duration: "",
        notes: "",
      },
    ]);
  };

  const removeMedication = (id: number) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Clinical</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Prescription builder</h2>
        </div>
        <span className="rounded-full bg-cyan-100 px-2.5 py-1 text-xs font-semibold text-cyan-700">
          {items.length} med{items.length === 1 ? "" : "s"}
        </span>
      </div>

      <form
        className="space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid gap-4 md:grid-cols-3">
          <label className="block text-sm font-medium text-slate-700">
            Patient
            <input
              value={patientName}
              onChange={(event) => setPatientName(event.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-500"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Prescribing doctor
            <input
              value={doctorName}
              onChange={(event) => setDoctorName(event.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-500"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Visit type
            <select
              value={visitType}
              onChange={(event) => setVisitType(event.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-500"
            >
              <option>Follow-up</option>
              <option>Initial consult</option>
              <option>Emergency</option>
              <option>Post-op</option>
            </select>
          </label>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-semibold text-slate-800">Medication {index + 1}</p>
                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeMedication(item.id)}
                    className="text-xs font-medium text-rose-600"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                <input
                  value={item.name}
                  onChange={(event) => updateItem(item.id, "name", event.target.value)}
                  placeholder="Medication"
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-cyan-500"
                />
                <input
                  value={item.dosage}
                  onChange={(event) => updateItem(item.id, "dosage", event.target.value)}
                  placeholder="Dosage"
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-cyan-500"
                />
                <input
                  value={item.frequency}
                  onChange={(event) => updateItem(item.id, "frequency", event.target.value)}
                  placeholder="Frequency"
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-cyan-500"
                />
                <input
                  value={item.duration}
                  onChange={(event) => updateItem(item.id, "duration", event.target.value)}
                  placeholder="Duration"
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-cyan-500"
                />
                <input
                  value={item.notes}
                  onChange={(event) => updateItem(item.id, "notes", event.target.value)}
                  placeholder="Notes"
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={addMedication}
            className="rounded-xl border border-cyan-600 px-4 py-2.5 text-sm font-medium text-cyan-700 hover:bg-cyan-50"
          >
            + Add medication
          </button>

          <button
            type="submit"
            className="rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-cyan-500"
          >
            Save prescription
          </button>
        </div>

        <div className="rounded-xl bg-slate-900 p-4 text-sm text-slate-200">
          <p className="font-medium text-white">Clinical summary</p>
          <p className="mt-2 text-slate-300">
            {patientName} • {doctorName} • {visitType}
          </p>
          <p className="mt-2 text-slate-300">{summary || "No medications selected yet."}</p>
        </div>

        {submitted && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Prescription saved successfully for {patientName}.
          </div>
        )}
      </form>
    </div>
  );
}
