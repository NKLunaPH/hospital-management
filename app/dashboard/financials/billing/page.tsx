import InvoicePrintView from "@/app/components/financials/InvoicePrintView";
import { billingRecords, payments } from "@/app/lib/db";

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Billing</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Financial overview</h1>
      </div>

      <InvoicePrintView />

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">Invoices</h2>
          <div className="mt-4 space-y-3">
            {billingRecords.map((record) => (
              <div key={record.id} className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                <div>
                  <p className="font-medium text-slate-900">{record.patientName}</p>
                  <p className="text-sm text-slate-500">{record.invoiceNumber}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-800">${record.amount}</p>
                  <p className="text-xs text-slate-500">{record.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">Payments</h2>
          <div className="mt-4 space-y-3">
            {payments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                <div>
                  <p className="font-medium text-slate-900">{payment.patientName}</p>
                  <p className="text-sm text-slate-500">{payment.method}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-800">${payment.amount}</p>
                  <p className="text-xs text-slate-500">{payment.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
