import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaEnvelope, FaLock } from "react-icons/fa";
import background from "@/assets/images/background.png";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-slate-50" dir="rtl">
      <section className="relative min-h-screen overflow-hidden pb-72 md:pb-0">
        {/* Background Image */}
        <div className="relative h-130 overflow-hidden rounded-b-4xl md:h-screen md:rounded-none">
          <Image
            src={background}
            alt="אנשי מקצוע לבית"
            priority
            className="h-full w-full object-cover"
          />

          {/* Soft white blur overlay */}
          <div className="absolute inset-y-0 right-0 z-10 flex w-full items-start bg-linear-to-l from-white via-white/75 to-transparent px-6 py-12 md:w-[65%] md:items-center md:px-14">
            <div className="max-w-md">
              <h1 className="text-4xl font-black leading-tight text-[#00132F] md:text-6xl">
                חזרו לחשבון שלכם ב־
                <span className="text-[#FEBC37]">Tikon</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
                התחברו כדי לפרסם עבודות, לעקוב אחרי פניות, או לנהל את פרופיל
                בעל המקצוע שלכם.
              </p>
            </div>
          </div>

          {/* Extra soft blur on edge */}
          <div className="absolute inset-y-0 left-[35%] z-10 hidden w-32 bg-linear-to-l from-transparent to-white/70 blur-2xl md:block" />
        </div>

        {/* Login Card */}
        <section className="absolute left-1/2 top-90 z-20 w-[92%] max-w-md -translate-x-1/2 rounded-4xl bg-white p-5 shadow-2xl md:left-[28%] md:top-1/2 md:-translate-y-1/2 md:p-7">
          <div className="mb-6">
            <span className="mb-3 inline-block rounded-full bg-[#FEBC37]/15 px-3 py-1 text-xs font-bold text-[#00132F]">
              ברוכים השבים
            </span>

            <h2 className="text-2xl font-black text-[#00132F]">
              התחברות לחשבון
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              הזינו אימייל וסיסמה כדי להמשיך.
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
                אימייל
              </label>

              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#FEBC37] focus-within:bg-white">
                <FaEnvelope className="text-[#FEBC37]" />
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
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
                  placeholder="הכניסו סיסמה"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
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
            אין לכם חשבון?{" "}
            <Link
              href="/register"
              className="font-bold text-[#00132F] transition hover:text-[#FEBC37]"
            >
              הרשמה
            </Link>
          </p>
        </section>
      </section>
    </main>
  );
};

export default LoginPage;