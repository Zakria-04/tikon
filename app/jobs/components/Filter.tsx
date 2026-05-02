import React from "react";
import { FaFilter, FaMapMarkerAlt, FaSearch, FaShekelSign } from "react-icons/fa";

const Filter = () => {
  return (
    <section className="relative z-10 px-5">
      <div className="mx-auto -mt-8 max-w-6xl rounded-4xl bg-white p-4 shadow-xl md:p-5">
        <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_auto] md:items-end">
          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
              חיפוש עבודה
            </label>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaSearch className="text-[#FEBC37]" />
              <input
                type="text"
                placeholder="לדוגמה: צביעה, תיקון, ניקיון..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
              עיר
            </label>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaMapMarkerAlt className="text-[#FEBC37]" />
              <input
                type="text"
                placeholder="כל הערים"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
              תקציב מינימלי
            </label>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaShekelSign className="text-[#FEBC37]" />
              <input
                type="text"
                placeholder="לדוגמה: 200"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <button className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#00132F] px-6 text-sm font-bold text-white transition hover:bg-[#FEBC37] hover:text-[#00132F]">
            <FaFilter />
            סינון
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
