import Link from "next/link";
import LoginForm from "./login/login";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-slate-100 p-6">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200">
        <div className="grid md:grid-cols-2">
          <div className="bg-slate-900 p-10 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">MediFlow</p>
            <h1 className="mt-4 text-4xl font-bold">Better care starts with better coordination.</h1>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <p>• Patient flow visibility</p>
              <p>• Clinical decision support</p>
              <p>• Financial and operations oversight</p>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <LoginForm />
            <div className="mt-6 text-center text-sm text-slate-500">
              Need access? <Link href="/" className="font-semibold text-cyan-600">Return home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
