import { patients } from "@/app/lib/db";

export default function PatientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Core</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Patient registry</h1>
        </div>
        <button className="rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-medium text-white">+ Add patient</button>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-5 py-3 font-semibold">Name</th>
              <th className="px-5 py-3 font-semibold">Age</th>
              <th className="px-5 py-3 font-semibold">Department</th>
              <th className="px-5 py-3 font-semibold">Doctor</th>
              <th className="px-5 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-t border-slate-200">
                <td className="px-5 py-4 font-medium text-slate-900">{patient.name}</td>
                <td className="px-5 py-4 text-slate-600">{patient.age}</td>
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
