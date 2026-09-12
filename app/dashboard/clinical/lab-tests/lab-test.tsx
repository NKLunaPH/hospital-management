import { labTests } from "@/app/lib/db";

export default function LabTestsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Clinical</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Lab tests</h1>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-5 py-3 font-semibold">Patient</th>
              <th className="px-5 py-3 font-semibold">Test</th>
              <th className="px-5 py-3 font-semibold">Ordered by</th>
              <th className="px-5 py-3 font-semibold">Result</th>
              <th className="px-5 py-3 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody>
            {labTests.map((test) => (
              <tr key={test.id} className="border-t border-slate-200">
                <td className="px-5 py-4 font-medium text-slate-900">{test.patientName}</td>
                <td className="px-5 py-4 text-slate-600">{test.testName}</td>
                <td className="px-5 py-4 text-slate-600">{test.orderedBy}</td>
                <td className="px-5 py-4 text-slate-600">{test.result}</td>
                <td className="px-5 py-4 text-slate-600">{test.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
