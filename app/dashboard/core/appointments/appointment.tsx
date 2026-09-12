import { appointments } from "@/app/lib/db";

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Core</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Appointments</h1>
      </div>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900">{appointment.patientName}</p>
                <p className="text-sm text-slate-500">{appointment.doctorName} • {appointment.type}</p>
              </div>
              <span className="rounded-full bg-cyan-100 px-2.5 py-1 text-xs font-semibold text-cyan-700">{appointment.status}</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{appointment.date} • {appointment.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
