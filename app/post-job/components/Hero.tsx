import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaCheckCircle, FaTools } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#00132F] px-5 py-16 text-white md:py-24">
      <div className="absolute -left-20 top-10 size-64 rounded-full bg-[#FEBC37]/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 size-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-[#FEBC37]">
            <FaTools />
            פרסום בקשה לבעל מקצוע
          </span>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            תנו לבעלי מקצוע
            <span className="text-[#FEBC37]"> לפנות אליכם</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-white/75 md:text-lg">
            פרסמו את העבודה שאתם צריכים, הגדירו מיקום ותקציב, ובעלי מקצוע
            מתאימים באזור שלכם יוכלו ליצור איתכם קשר.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register?role=customer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#FEBC37] px-6 py-4 text-sm font-bold text-[#00132F] transition hover:-translate-y-0.5 hover:bg-[#f3ad18]"
            >
              התחלת פרסום בקשה
              <FaArrowLeft className="text-xs" />
            </Link>

            <Link
              href="/"
              className="flex items-center justify-center rounded-2xl border border-white/20 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              חזרה לדף הבית
            </Link>
          </div>
        </div>

        {/* Visual Card */}
        <div className="rounded-4xl bg-white p-5 text-[#00132F] shadow-2xl">
          <div className="rounded-3xl bg-slate-50 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-500">בקשה לדוגמה</p>
                <h3 className="mt-1 text-xl font-black">תיקון נזילה במטבח</h3>
              </div>

              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#FEBC37]/20 text-[#FEBC37]">
                <FaTools />
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-bold text-slate-400">תיאור</p>
                <p className="mt-1 text-sm text-slate-600">
                  יש נזילה מתחת לכיור, צריך בדיקה ותיקון בהקדם.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-bold text-slate-400">עיר</p>
                  <p className="mt-1 font-bold">חיפה</p>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-bold text-slate-400">תקציב</p>
                  <p className="mt-1 font-bold">עד ₪350</p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#FEBC37]/30 bg-[#FEBC37]/10 p-4">
                <p className="flex items-center gap-2 text-sm font-bold">
                  <FaCheckCircle className="text-[#FEBC37]" />
                  בעלי מקצוע באזור יכולים לפנות אליכם
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
