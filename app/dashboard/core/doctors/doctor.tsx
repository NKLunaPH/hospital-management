import { doctors } from "@/app/lib/db";

export default function DoctorsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Core</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Doctors</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900">{doctor.name}</p>
                <p className="text-sm text-slate-500">{doctor.specialty}</p>
              </div>
              <span className="rounded-full bg-cyan-100 px-2.5 py-1 text-xs font-semibold text-cyan-700">{doctor.rating} ★</span>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>Department: {doctor.department}</p>
              <p>Status: {doctor.availability}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
