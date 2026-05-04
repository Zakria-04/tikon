"use client";

import { useState } from "react";
import background from "@/assets/images/background.png";
import Image from "next/image";
import { FaSearch, FaMapMarkerAlt, FaTools } from "react-icons/fa";

const cities = [
  "תל אביב",
  "ירושלים",
  "חיפה",
  "ראשון לציון",
  "פתח תקווה",
  "באר שבע",
  "עכו",
];

const categories = [
  "שיפוצים",
  "חשמלאי",
  "צבע",
  "אינסטלציה",
  "מזגנים",
  "ריצוף",
  "נגרות",
  "גבס",
];

const regions = ["צפון", "מרכז", "דרום"];

const Hero = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [service, setService] = useState("");

  // const handleSearch = () => {
  //   console.log({
  //     city: selectedCity,
  //     category: selectedCategory,
  //     service,
  //   });

  //   // later:
  //   // router.push(`/professionals?city=${selectedCity}&category=${selectedCategory}&service=${service}`);
  // };

  const handleSearch = () => {
    const query = new URLSearchParams();

    if (selectedCategory) query.append("category", selectedCategory);

    if (selectedCity) {
      query.append("city", selectedCity);
    } else if (selectedRegion) {
      query.append("region", selectedRegion);
    }

    // router.push(`/professionals?${query.toString()}`);
  };

  return (
    <section className="relative pb-52 md:pb-36" dir="rtl">
      <div className="relative overflow-hidden rounded-b-4xl">
        <Image
          src={background}
          alt="אנשי מקצוע לבית"
          priority
          className="h-105 w-full object-cover"
        />

        {/* Overlay */}
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

        <div className="absolute inset-y-0 left-[35%] z-10 hidden w-32 bg-linear-to-l from-transparent to-white/70 blur-2xl md:block" />
      </div>

      {/* Filter Card */}
      <div className="absolute left-1/2 z-20 w-[92%] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-4 shadow-xl md:p-6">
        <p className="mb-4 text-lg font-bold text-[#00132F]">
          איזה שירות אתה צריך?
        </p>

        <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_auto] md:items-end">
          {/* Region */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-600">
              אזור
            </label>

            <div className="relative flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaMapMarkerAlt className="text-[#FEBC37]" />

              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full appearance-none bg-transparent text-sm text-[#00132F] outline-none cursor-pointer"
              >
                <option value="">כל האזורים</option>

                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute left-4 text-slate-400">
                ▾
              </span>
            </div>
          </div>

          {/* City */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-600">
              עיר
            </label>

            <div className="relative flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaMapMarkerAlt className="text-[#FEBC37]" />

              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full appearance-none bg-transparent text-sm text-[#00132F] outline-none cursor-pointer"
              >
                <option value="">בחר עיר</option>

                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute left-4 text-slate-400">
                ▾
              </span>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-600">
              קטגוריה
            </label>

            <div className="relative flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaSearch className="text-[#FEBC37]" />

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none bg-transparent text-sm text-[#00132F] outline-none cursor-pointer"
              >
                <option value="">כל הקטגוריות</option>

                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute left-4 text-slate-400">
                ▾
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleSearch}
            className="flex h-12.5 items-center justify-center gap-2 rounded-2xl bg-[#00132F] px-6 text-sm font-bold text-white transition hover:bg-[#FEBC37] hover:text-[#00132F] disabled:opacity-50 disabled:cursor-not-allowed mt-1.5 cursor-pointer"
          >
            <FaSearch />
            חפש מקצוען
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
