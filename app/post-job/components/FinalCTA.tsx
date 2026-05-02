import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const FinalCTA = () => {
  return (
    <section className="px-5 pb-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl bg-[#00132F] p-6 text-white shadow-xl md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black">מוכנים לפרסם את העבודה?</h2>

            <p className="mt-2 max-w-xl text-sm leading-7 text-white/70">
              צרו חשבון קצר, מלאו את פרטי העבודה, והבקשה שלכם תוכל להגיע לבעלי
              מקצוע רלוונטיים באזור.
            </p>
          </div>

          <Link
            href="/register?role=customer"
            className="flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#FEBC37] px-6 py-4 text-sm font-bold text-[#00132F] transition hover:-translate-y-0.5 hover:bg-[#f3ad18]"
          >
            התחלת פרסום בקשה
            <FaArrowLeft className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
