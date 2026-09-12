"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type UserAccount = {
  name: string;
  email: string;
  password: string;
};

const DEFAULT_ACCOUNT: UserAccount = {
  name: "Admin User",
  email: "admin@mediflow.health",
  password: "password123",
};

const USERS_KEY = "mediflow_users";
const SESSION_KEY = "mediflow_session";

function getStoredUsers(): UserAccount[] {
  if (typeof window === "undefined") return [];

  try {
    const users = window.localStorage.getItem(USERS_KEY);
    return users ? (JSON.parse(users) as UserAccount[]) : [];
  } catch {
    return [];
  }
}

export default function LoginForm() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function saveSession(user: UserAccount) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    }
  }

  function handleLoginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    const users = getStoredUsers();
    const normalizedEmail = email.trim().toLowerCase();

    const matchedUser = users.find(
      (user) => user.email.toLowerCase() === normalizedEmail && user.password === password,
    );

    if (matchedUser) {
      saveSession(matchedUser);
      router.push("/dashboard");
      return;
    }

    if (
      normalizedEmail === DEFAULT_ACCOUNT.email.toLowerCase() &&
      password === DEFAULT_ACCOUNT.password
    ) {
      saveSession(DEFAULT_ACCOUNT);
      router.push("/dashboard");
      return;
    }

    setError("Invalid email or password. Try the demo account or your newly created account.");
  }

  function handleSignupSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    const cleanName = name.trim();
    const normalizedEmail = email.trim().toLowerCase();

    if (!cleanName || !normalizedEmail || !password) {
      setError("Please fill in your name, email, and password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = getStoredUsers();
    const alreadyExists = users.some((user) => user.email.toLowerCase() === normalizedEmail);

    if (alreadyExists || normalizedEmail === DEFAULT_ACCOUNT.email.toLowerCase()) {
      setError("An account with this email already exists.");
      return;
    }

    const newUser: UserAccount = {
      name: cleanName,
      email: normalizedEmail,
      password,
    };

    window.localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
    setSuccess("Account created successfully. Please sign in with your new account.");
    setMode("login");
    setName("");
    setEmail(normalizedEmail);
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
      <div className="mb-6 flex rounded-xl bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => {
            setMode("login");
            setError("");
            setSuccess("");
          }}
          className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
            mode === "login" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
          }`}
        >
          Sign in
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("signup");
            setError("");
            setSuccess("");
          }}
          className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
            mode === "signup" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
          }`}
        >
          Create account
        </button>
      </div>

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
        {mode === "login" ? "Welcome back" : "Create your account"}
      </p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        {mode === "login" ? "Sign in to MediFlow" : "Join MediFlow"}
      </h1>

      {mode === "login" ? (
        <form onSubmit={handleLoginSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@mediflow.health"
              required
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none ring-0 focus:border-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          {error ? (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
          ) : null}

          {success ? (
            <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-600">{success}</p>
          ) : null}

          <button type="submit" className="w-full rounded-xl bg-cyan-600 px-4 py-3 font-medium text-white shadow-sm hover:bg-cyan-500">
            Login
          </button>
        </form>
      ) : (
        <form onSubmit={handleSignupSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              required
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none ring-0 focus:border-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="signup-email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              required
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none ring-0 focus:border-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="signup-password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input
              id="signup-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="mb-2 block text-sm font-medium text-slate-700">Confirm password</label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          {error ? (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
          ) : null}

          {success ? (
            <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-600">{success}</p>
          ) : null}

          <button type="submit" className="w-full rounded-xl bg-cyan-600 px-4 py-3 font-medium text-white shadow-sm hover:bg-cyan-500">
            Create account
          </button>
        </form>
      )}
    </div>
  );
}
