import { beds } from "@/app/lib/db";

export default function RoomsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Admin</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Bed and room status</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {beds.map((bed) => (
          <div key={bed.id} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-slate-900">{bed.room}</p>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
                {bed.status}
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-600">Type: {bed.type}</p>
            <p className="mt-2 text-sm text-slate-600">Patient: {bed.patient ?? "Unassigned"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
