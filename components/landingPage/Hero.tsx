import background from "@/assets/images/background.png";
import Image from "next/image";
import { FaSearch, FaMapMarkerAlt, FaTools } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative pb-52 md:pb-36">
      <div className="relative overflow-hidden rounded-b-4xl">
        <Image
          src={background}
          alt="אנשי מקצוע לבית"
          priority
          className="h-105 w-full object-cover"
        />

        {/* Soft white blur overlay */}
        <div className="absolute inset-y-0 right-0 z-10 flex w-full py-10 sm:items-center bg-linear-to-l from-white via-white/70 to-transparent px-6 md:w-[60%] md:px-12">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold leading-tight text-[#00132F] md:text-5xl">
              למצוא איש מקצוע אמין
              <span className="text-[#FEBC37]"> לכל עבודה</span>
            </h1>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600 md:text-base">
              התחברו בקלות לאנשי מקצוע מיומנים באזור שלכם, השוו שירותים, ובחרו
              את האדם המתאים לעבודה.
            </p>
          </div>
        </div>

        {/* Extra soft blur on edge */}
        <div className="absolute inset-y-0 left-[35%] z-10 hidden w-32 bg-linear-to-l from-transparent to-white/70 blur-2xl md:block" />
      </div>

      {/* Filter Card */}
      <div className="absolute left-1/2 z-20 w-[92%] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-4 shadow-xl md:p-6">
        <p className="mb-4 text-lg font-bold text-[#00132F]">
          איזה שירות אתה צריך?
        </p>

        <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_auto] md:items-end">
          {/* Service Input */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-600">
              שירות
            </label>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaTools className="text-[#FEBC37]" />
              <input
                type="text"
                placeholder="לדוגמה: אינסטלטור, חשמלאי..."
                className="w-full bg-transparent text-sm text-[#00132F] outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* City Input */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-600">
              עיר
            </label>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaMapMarkerAlt className="text-[#FEBC37]" />
              <input
                type="text"
                placeholder="לדוגמה: חיפה"
                className="w-full bg-transparent text-sm text-[#00132F] outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Category Input */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-600">
              קטגוריה
            </label>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaSearch className="text-[#FEBC37]" />
              <input
                type="text"
                placeholder="כל השירותים"
                className="w-full bg-transparent text-sm text-[#00132F] outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Button */}
          <button className="flex h-12.5 items-center justify-center gap-2 rounded-2xl bg-[#00132F] px-6 text-sm font-bold text-white transition hover:bg-[#FEBC37] hover:text-[#00132F] mt-1.5">
            <FaSearch />
            חפש מקצוען
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
