import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const LaunchOffer = () => {
  return (
    <section className="px-5 pb-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl bg-[#00132F] p-6 text-white shadow-xl md:p-10">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div>
            <span className="mb-3 inline-block rounded-full bg-[#FEBC37]/20 px-4 py-2 text-xs font-bold text-[#FEBC37]">
              הצטרפות מוקדמת
            </span>

            <h2 className="text-3xl font-black">
              פתחו פרופיל בחינם בתקופת ההשקה
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
              אנחנו בונים את רשימת בעלי המקצוע הראשונים ב־Tikon. זו הזדמנות טובה
              להופיע מוקדם בפלטפורמה ולקבל חשיפה ראשונית.
            </p>
          </div>

          <Link
            href="/register?role=professional"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#FEBC37] px-6 py-4 text-sm font-bold text-[#00132F] transition hover:-translate-y-0.5 hover:bg-[#f3ad18]"
          >
            הצטרפות כבעל מקצוע
            <FaArrowLeft className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LaunchOffer;
