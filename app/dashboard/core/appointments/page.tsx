import { appointments } from "@/app/lib/db";

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Appointments</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Schedule management</h1>
      </div>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div>
              <p className="text-lg font-semibold text-slate-900">{appointment.patientName}</p>
              <p className="text-sm text-slate-500">{appointment.doctorName} • {appointment.type}</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-slate-700">{appointment.date}</p>
              <p className="text-sm text-slate-500">{appointment.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
