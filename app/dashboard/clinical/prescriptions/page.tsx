import PrescriptionBuilder from "@/app/components/clinical/PrescriptionBuilder";
import { prescriptions } from "@/app/lib/db";

export default function PrescriptionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Clinical</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Prescriptions</h1>
      </div>

      <PrescriptionBuilder />

      <div className="space-y-4">
        {prescriptions.map((item) => (
          <div key={item.id} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900">{item.patientName}</p>
                <p className="text-sm text-slate-500">{item.medication} • {item.dosage}</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{item.status}</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Doctor: {item.doctor}</p>
            <p className="text-sm text-slate-600">Duration: {item.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
