'use client';
import { categories, cities, regions } from "@/assets/res/data";
import React, { useEffect, useRef, useState } from "react";
import FilterSelect from "./FilterSelect";
import { FiGlobe, FiMapPin } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";

const FilterBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "all";
  const city = searchParams.get("city") || "all";
  const region = searchParams.get("region") || "all";
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  const updateURL = (
    params: Partial<{ category: string; city: string; region: string }>,
  ) => {
    const newCategory = params.category ?? category;
    const newCity = params.city ?? city;
    const newRegion = params.region ?? region;

    router.push(
      `/professionals?category=${newCategory}&city=${newCity}&region=${newRegion}`,
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-3 z-20 mb-3 border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <FilterSelect
          value={category === "all" ? "" : category}
          onChange={(v) =>
            updateURL({
              category: v || "all",
              city: "all",
            })
          }
          options={categories.map((c) => ({
            label: c.name,
            value: c.category,
          }))}
          placeholder="כל הקטגוריות"
          icon={<FaFilter size={16} />}
        />

        <FilterSelect
          value={city === "all" ? "" : city}
          onChange={(v) =>
            updateURL({
              city: v || "all",
              region: "all",
            })
          }
          options={cities.map((c) => ({ label: c, value: c }))}
          placeholder="כל הערים"
          icon={<FiMapPin size={16} />}
        />

        <FilterSelect
          value={region === "all" ? "" : region}
          onChange={(v) =>
            updateURL({
              region: v || "all",
              city: "all",
            })
          }
          options={regions.map((r) => ({ label: r, value: r }))}
          placeholder="כל האזורים"
          icon={<FiGlobe size={16} />}
        />

        <button
          onClick={() => router.push("/professionals")}
          className="mr-auto rounded-xl px-3 py-2 text-[13px] font-semibold text-[#FEBC37] transition hover:bg-[#FEBC37]/10"
        >
          נקה סינון
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
