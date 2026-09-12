import { staff } from "@/app/lib/db";

export default function StaffPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Admin</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Staff directory</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {staff.map((member) => (
          <div key={member.id} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-slate-900">{member.name}</p>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{member.status}</span>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>Role: {member.role}</p>
              <p>Department: {member.department}</p>
              <p>Shift: {member.shift}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
