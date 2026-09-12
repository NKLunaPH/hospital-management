import Link from "next/link";

const navigation = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/core/patients", label: "Patients" },
  { href: "/dashboard/core/doctors", label: "Doctors" },
  { href: "/dashboard/core/appointments", label: "Appointments" },
  { href: "/dashboard/clinical/prescriptions", label: "Prescriptions" },
  { href: "/dashboard/financials/billing", label: "Billing" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <aside className="fixed inset-y-0 left-0 w-72 border-r border-slate-200 bg-slate-900 p-6 text-white">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">MediFlow</p>
          <h1 className="mt-2 text-2xl font-bold">Operations</h1>
        </div>
        <nav className="space-y-2">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="ml-72 p-8">{children}</main>
    </div>
  );
}
