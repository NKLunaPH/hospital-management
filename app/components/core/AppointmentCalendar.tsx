export default function AppointmentCalendar() {
  return (
    <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
      <h3 className="text-lg font-semibold text-slate-900">Calendar</h3>
      <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs text-slate-500">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="font-medium">{day}</div>
        ))}
        {Array.from({ length: 14 }).map((_, idx) => (
          <div key={idx} className={`rounded-lg px-2 py-3 ${idx === 3 || idx === 8 ? 'bg-cyan-100 text-cyan-700' : 'bg-slate-50'}`}>
            {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
