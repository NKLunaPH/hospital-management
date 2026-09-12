export default function BedGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {[
        { label: 'A-12', status: 'Occupied' },
        { label: 'B-04', status: 'Available' },
        { label: 'ICU-02', status: 'Occupied' },
        { label: 'C-07', status: 'Cleaning' },
      ].map((bed) => (
        <div key={bed.label} className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-800">{bed.label}</span>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600">{bed.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
