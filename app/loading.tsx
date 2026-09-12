export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 text-slate-700">
      <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm ring-1 ring-slate-200">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
        <span className="text-sm font-medium">Loading dashboard...</span>
      </div>
    </div>
  );
}
