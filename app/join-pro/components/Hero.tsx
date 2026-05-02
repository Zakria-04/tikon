import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaCheckCircle, FaMapMarkerAlt, FaStar, FaTools } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#00132F] px-5 py-16 text-white md:py-24">
      <div className="absolute -left-20 top-10 size-64 rounded-full bg-[#FEBC37]/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 size-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-[#FEBC37]">
            <FaTools />
            הצטרפות לבעלי מקצוע
          </span>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            קבלו יותר פניות
            <span className="text-[#FEBC37]"> מלקוחות באזור שלכם</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-white/75 md:text-lg">
            פתחו פרופיל מקצועי ב־Tikon, הציגו את השירותים שלכם, ותנו ללקוחות
            שמחפשים בעל מקצוע ליצור איתכם קשר בקלות.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register?role=professional"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#FEBC37] px-6 py-4 text-sm font-bold text-[#00132F] transition hover:-translate-y-0.5 hover:bg-[#f3ad18]"
            >
              פתח פרופיל בחינם
              <FaArrowLeft className="text-xs" />
            </Link>

            <Link
              href="/"
              className="flex items-center justify-center rounded-2xl border border-white/20 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              חזרה לדף הבית
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/75">
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
              <FaCheckCircle className="text-[#FEBC37]" />
              ללא עלות בתקופת ההשקה
            </span>

            <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
              <FaCheckCircle className="text-[#FEBC37]" />
              מתאים לעצמאים ועסקים קטנים
            </span>
          </div>
        </div>

        {/* Profile Preview Card */}
        <div className="rounded-4xl bg-white p-5 text-[#00132F] shadow-2xl">
          <div className="rounded-3xl bg-slate-50 p-5">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex size-20 items-center justify-center rounded-full border-4 border-[#FEBC37]/20 bg-[#00132F] text-3xl text-[#FEBC37]">
                <FaTools />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black">יוסף כהן</h3>
                  <MdVerified className="text-[#2FA4D7] size-4.5" />
                </div>

                <p className="mt-1 text-sm font-semibold text-slate-500">
                  חשמלאי מוסמך
                </p>

                <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-[#FEBC37]" />
                    חיפה והסביבה
                  </span>

                  <span className="flex items-center gap-1">
                    <FaStar className="text-[#FEBC37]" />
                    4.8
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs font-bold text-slate-400">תיאור הפרופיל</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                בעל ניסיון של מעל 5 שנים בתיקוני חשמל, התקנות, נקודות חשמל
                ובדיקות בטיחות לבית.
              </p>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-bold text-slate-400">ניסיון</p>
                <p className="mt-1 font-black">5+ שנים</p>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-bold text-slate-400">פניות</p>
                <p className="mt-1 font-black">לקוחות מהאזור</p>
              </div>
            </div>

            <button className="mt-4 w-full rounded-2xl bg-[#00132F] px-4 py-3 text-sm font-bold text-white">
              צפייה בפרופיל לדוגמה
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
