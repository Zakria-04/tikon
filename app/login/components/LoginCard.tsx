"use client";
import { useAuthStore } from "@/store/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowLeft, FaEnvelope, FaLock } from "react-icons/fa";

const LoginCard = () => {
  const router = useRouter()
  const { login, isLoading, error, user } = useAuthStore();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = await login(form);
      console.log("user succ", user);
      
      if (user) {
        console.log("logged succ");
        
        router.push("/")
      }
    } catch (error) {
      console.error("got an error ", error);
    }
  };

  return (
    <section className="absolute left-1/2 top-90 z-20 w-[92%] max-w-md -translate-x-1/2 rounded-4xl bg-white p-5 shadow-2xl md:left-[28%] md:top-1/2 md:-translate-y-1/2 md:p-7">
      <div className="mb-6">
        <span className="mb-3 inline-block rounded-full bg-[#FEBC37]/15 px-3 py-1 text-xs font-bold text-[#00132F]">
          ברוכים השבים
        </span>

        <h2 className="text-2xl font-black text-[#00132F]">התחברות לחשבון</h2>

        <p className="mt-2 text-sm text-slate-500">
          הזינו אימייל וסיסמה כדי להמשיך.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
            אימייל
          </label>

          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#FEBC37] focus-within:bg-white">
            <FaEnvelope className="text-[#FEBC37]" />
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              placeholder="example@email.com"
              className="w-full bg-transparent text-base outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="block text-sm font-bold text-[#00132F]">
              סיסמה
            </label>

            <Link
              href="/forgot-password"
              className="text-xs font-bold text-slate-500 transition hover:text-[#FEBC37]"
            >
              שכחת סיסמה?
            </Link>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#FEBC37] focus-within:bg-white">
            <FaLock className="text-[#FEBC37]" />
            <input
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              placeholder="הכניסו סיסמה"
              className="w-full bg-transparent text-base outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00132F] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#FEBC37] hover:text-[#00132F]"
        >
          התחברות
          <FaArrowLeft className="text-xs" />
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-500">
        אין לכם חשבון?
        <Link
          href="/register"
          className="font-bold text-[#00132F] transition hover:text-[#FEBC37]"
        >
          הרשמה
        </Link>
      </p>
    </section>
  );
};

export default LoginCard;
