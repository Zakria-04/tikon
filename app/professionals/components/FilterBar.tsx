import { cities, regions } from "@/assets/res/data";
import React, { useEffect, useRef, useState } from "react";
import FilterSelect from "./FilterSelect";
import { FiGlobe, FiMapPin, FiSettings } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";

interface FilterSelectProps {
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  selectedCity: string;
  setSelectedCity: (v: string) => void;
  selectedRegion: string;
  setSelectedRegion: (v: string) => void;
}

const categories = ["שיפוצים", "חשמלאי", "צבע", "אינסטלטור", "מיזוג אוויר"];

const FilterBar = ({
  selectedCategory,
  setSelectedCategory,
  selectedCity,
  setSelectedCity,
  selectedRegion,
  setSelectedRegion,
}: FilterSelectProps) => {
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll.current && current > 80) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
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
          value={selectedCategory}
          onChange={setSelectedCategory}
          options={categories}
          placeholder="כל הקטגוריות"
          icon={<FaFilter size={16} />}
        />

        <FilterSelect
          value={selectedCity}
          onChange={(v) => {
            setSelectedCity(v);
            setSelectedRegion("");
          }}
          options={cities}
          placeholder="כל הערים"
          icon={<FiMapPin size={16} />}
        />

        <FilterSelect
          value={selectedRegion}
          onChange={(v) => {
            setSelectedRegion(v);
            setSelectedCity("");
          }}
          options={regions}
          placeholder="כל האזורים"
          icon={<FiMapPin size={16} />}
        />

        <button
          onClick={() => {
            setSelectedCity("");
            setSelectedRegion("");
            setSelectedCategory("");
          }}
          className="mr-auto rounded-xl px-3 py-2 text-[13px] font-semibold text-[#FEBC37] transition hover:bg-[#FEBC37]/10"
        >
          נקה סינון
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
