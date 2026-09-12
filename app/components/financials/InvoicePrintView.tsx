"use client";

import { useMemo } from "react";

type InvoiceItem = {
  description: string;
  qty: number;
  rate: number;
};

type InvoicePrintViewProps = {
  patientName?: string;
  invoiceNumber?: string;
  date?: string;
  dueDate?: string;
  doctorName?: string;
  department?: string;
  items?: InvoiceItem[];
};

const defaultItems: InvoiceItem[] = [
  { description: "Consultation fee", qty: 1, rate: 180 },
  { description: "Cardiology diagnostics", qty: 1, rate: 240 },
  { description: "Medication charges", qty: 2, rate: 60 },
  { description: "Room charge", qty: 1, rate: 320 },
];

export default function InvoicePrintView({
  patientName = "Sarah Johnson",
  invoiceNumber = "INV-1102",
  date = "2026-09-11",
  dueDate = "2026-09-25",
  doctorName = "Dr. A. Morgan",
  department = "Cardiology",
  items = defaultItems,
}: InvoicePrintViewProps) {
  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.qty * item.rate, 0),
    [items]
  );

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-start justify-between border-b border-slate-200 pb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600">MediFlow</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Invoice</h2>
        </div>
        <div className="text-right text-sm text-slate-500">
          <p>Invoice #{invoiceNumber}</p>
          <p>{date}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Bill to</p>
          <p className="mt-3 text-lg font-semibold text-slate-900">{patientName}</p>
          <p className="text-sm text-slate-600">{department} Department</p>
          <p className="text-sm text-slate-600">Consultant: {doctorName}</p>
        </div>

        <div className="text-left md:text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Payment due</p>
          <p className="mt-3 text-lg font-semibold text-slate-900">{dueDate}</p>
          <p className="text-sm text-slate-600">Mode: Card / Insurance</p>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3 font-semibold">Description</th>
              <th className="px-4 py-3 font-semibold">Qty</th>
              <th className="px-4 py-3 font-semibold">Rate</th>
              <th className="px-4 py-3 font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.description} className="border-t border-slate-200">
                <td className="px-4 py-3 text-slate-700">{item.description}</td>
                <td className="px-4 py-3 text-slate-700">{item.qty}</td>
                <td className="px-4 py-3 text-slate-700">${item.rate}</td>
                <td className="px-4 py-3 font-medium text-slate-900">${item.qty * item.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 ml-auto max-w-xs space-y-3 text-sm">
        <div className="flex items-center justify-between text-slate-600">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex items-center justify-between text-slate-600">
          <span>Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-lg font-bold text-slate-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5 text-sm text-slate-500">
        <span>Authorized by: MediFlow Finance</span>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          Print invoice
        </button>
      </div>
    </div>
  );
}
