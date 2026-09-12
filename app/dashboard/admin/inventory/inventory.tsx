import { inventory } from "@/app/lib/db";

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Admin</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Inventory</h1>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-5 py-3 font-semibold">Item</th>
              <th className="px-5 py-3 font-semibold">Category</th>
              <th className="px-5 py-3 font-semibold">Qty</th>
              <th className="px-5 py-3 font-semibold">Reorder</th>
              <th className="px-5 py-3 font-semibold">Supplier</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id} className="border-t border-slate-200">
                <td className="px-5 py-4 font-medium text-slate-900">{item.name}</td>
                <td className="px-5 py-4 text-slate-600">{item.category}</td>
                <td className="px-5 py-4 text-slate-600">{item.quantity}</td>
                <td className="px-5 py-4 text-slate-600">{item.reorderLevel}</td>
                <td className="px-5 py-4 text-slate-600">{item.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
