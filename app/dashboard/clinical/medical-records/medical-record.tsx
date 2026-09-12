import { medicalRecords } from "@/app/lib/db";

export default function MedicalRecordsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Clinical</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Medical records</h1>
      </div>

      <div className="space-y-4">
        {medicalRecords.map((record) => (
          <div key={record.id} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900">{record.patientName}</p>
                <p className="text-sm text-slate-500">{record.doctor}</p>
              </div>
              <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">{record.severity}</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Diagnosis: {record.diagnosis}</p>
            <p className="text-sm text-slate-500">Updated: {record.lastUpdated}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
