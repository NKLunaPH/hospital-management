import PatientForm from "@/app/components/core/PatientForm";

export default function NewPatientPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Core</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">New patient registration</h1>
      </div>
      <PatientForm />
    </div>
  );
}
