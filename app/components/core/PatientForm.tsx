export default function PatientForm() {
  return (
    <form className="space-y-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
          <input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2" defaultValue="John Miller" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Patient ID</label>
          <input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2" defaultValue="PT-1038" />
        </div>
      </div>
      <button className="rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-medium text-white">Save patient record</button>
    </form>
  );
}
