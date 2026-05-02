import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#00132F] px-5 py-14 text-white">
      <div className="absolute -left-24 top-8 size-72 rounded-full bg-[#FEBC37]/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 size-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-[#FEBC37]">
            <MdWorkOutline />
            עבודות פתוחות באזור
          </span>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            מצאו עבודות שמתאימות
            <span className="text-[#FEBC37]"> ליכולת שלכם</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
            כאן תוכלו לראות בקשות שפורסמו על ידי משתמשים, לבדוק מיקום, תקציב
            ותיאור העבודה, ולפנות רק לעבודות שמתאימות לכם.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register?role=professional"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#FEBC37] px-6 py-4 text-sm font-bold text-[#00132F] transition hover:-translate-y-0.5 hover:bg-[#f3ad18]"
            >
              הצטרפות כבעל מקצוע
              <FaArrowLeft className="text-xs" />
            </Link>

            <Link
              href="/post-job"
              className="flex items-center justify-center rounded-2xl border border-white/20 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              פרסום עבודה חדשה
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
