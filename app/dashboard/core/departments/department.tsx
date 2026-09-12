import { departments } from "@/app/lib/db";

export default function DepartmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Core</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Departments</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {departments.map((department) => (
          <div key={department.id} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-slate-900">{department.name}</p>
              <span className="rounded-full bg-cyan-100 px-2.5 py-1 text-xs font-semibold text-cyan-700">{department.occupancy}%</span>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>Head: {department.head}</p>
              <p>Beds: {department.beds}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
