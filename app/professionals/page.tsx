"use client";
import Image from "next/image";
import { useState } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import profile from "@/assets/images/profile.png";
import { useRouter } from "next/navigation";
import FilterBar from "./components/FilterBar";
import ProfessionalsProfiles from "./components/ProfessionalsProfiles";
import Header from "@/components/Header";

const professionals = [
  {
    _id: "1",
    name: "יוסף כהן",
    category: "חשמלאי",
    city: "חיפה",
    region: "צפון",
    description:
      "בעל ניסיון של מעל 5 שנים בתיקוני חשמל, התקנות ובדיקות בטיחות לבית.",
    experience: 5,
  },
  {
    _id: "2",
    name: "אחמד חליל",
    category: "שיפוצים",
    city: "עכו",
    region: "צפון",
    description: "מתמחה בעבודות שיפוץ, תיקוני קירות, צבע וגבס.",
    experience: 6,
  },
  {
    _id: "3",
    name: "דוד לוי",
    category: "אינסטלטור",
    city: "נהריה",
    region: "צפון",
    description: "פתיחת סתימות, תיקון נזילות והחלפת ברזים.",
    experience: 4,
  },
  {
    _id: "4",
    name: "מוחמד עבד",
    category: "מיזוג אוויר",
    city: "כרמיאל",
    region: "צפון",
    description: "התקנה וניקוי מזגנים עם שירות מהיר ומקצועי.",
    experience: 7,
  },
];

const Professionals = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProfiles = professionals.filter((pro) => {
    if (selectedCategory && pro.category !== selectedCategory) return false;
    if (selectedCity) return pro.city === selectedCity;
    if (selectedRegion) return pro.region === selectedRegion;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <div className="mx-auto max-w-6xl">
        {/* Filter Bar */}
        <FilterBar
          setSelectedCity={setSelectedCity}
          setSelectedRegion={setSelectedRegion}
          setSelectedCategory={setSelectedCategory}
          selectedCity={selectedCity}
          selectedRegion={selectedRegion}
          selectedCategory={selectedCategory}
        />
        <div className="px-4 py-6">
          {/* Results */}
          <p className="mb-4 text-xs text-slate-400">
            נמצאו {filteredProfiles.length} אנשי מקצוע
          </p>

          {/* Grid */}
          {filteredProfiles.length === 0 ? (
            <div className="py-20 text-center text-slate-400">
              <p className="text-3xl">🔍</p>
              <p className="mt-2 text-sm">לא נמצאו תוצאות</p>
            </div>
          ) : (
            <ProfessionalsProfiles filteredProfiles={filteredProfiles} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Professionals;
