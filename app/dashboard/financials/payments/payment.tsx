import { payments } from "@/app/lib/db";

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Financials</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Payments</h1>
      </div>

      <div className="space-y-4">
        {payments.map((payment) => (
          <div key={payment.id} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900">{payment.patientName}</p>
                <p className="text-sm text-slate-500">{payment.method}</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{payment.status}</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Amount: ${payment.amount}</p>
            <p className="text-sm text-slate-500">Date: {payment.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
