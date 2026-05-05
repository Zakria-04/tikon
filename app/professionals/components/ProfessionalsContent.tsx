// ProfessionalsContent.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { categories } from "@/assets/res/data";
import ProfessionalsProfiles from "./ProfessionalsProfiles";

const professionals = [
  {
    _id: "1",
    name: "יוסף כהן",
    categoryLabel: "חשמלאי",
    category: "electrician",
    city: "חיפה",
    region: "צפון",
    description:
      "בעל ניסיון של מעל 5 שנים בתיקוני חשמל, התקנות ובדיקות בטיחות לבית.",
    experience: 5,
  },
  {
    _id: "2",
    name: "אחמד חליל",
    categoryLabel: "שיפוצים",
    category: "renovation",
    city: "עכו",
    region: "צפון",
    description: "מתמחה בעבודות שיפוץ, תיקוני קירות, צבע וגבס.",
    experience: 6,
  },
  {
    _id: "3",
    name: "דוד לוי",
    categoryLabel: "אינסטלטור",
    category: "plumbing",
    city: "נהריה",
    region: "צפון",
    description: "פתיחת סתימות, תיקון נזילות והחלפת ברזים.",
    experience: 4,
  },
  {
    _id: "4",
    name: "מוחמד עבד",
    categoryLabel: "מיזוג אוויר",
    category: "ac",
    city: "כרמיאל",
    region: "צפון",
    description: "התקנה וניקוי מזגנים עם שירות מהיר ומקצועי.",
    experience: 7,
  },
];

const ProfessionalsContent = () => {
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "all";
  const city = searchParams.get("city") || "all";
  const region = searchParams.get("region") || "all";

  const getCategoryLabel = (value: string) =>
    categories.find((c) => c.category === value)?.name || "כל הקטגוריות";

  const filteredProfiles = professionals.filter((pro) => {
    if (category !== "all" && pro.category !== category) return false;
    if (city !== "all" && pro.city !== city) return false;
    if (region !== "all" && pro.region !== region) return false;
    return true;
  });

  return (
    <div className="px-4 py-6">
      <p className="mb-4 text-xs text-slate-400">
        נמצאו {filteredProfiles.length} אנשי מקצוע
        {category !== "all" && ` • ${getCategoryLabel(category)}`}
      </p>

      {filteredProfiles.length === 0 ? (
        <div className="py-20 text-center text-slate-400">
          <p className="text-3xl">🔍</p>
          <p className="mt-2 text-sm">לא נמצאו תוצאות</p>
        </div>
      ) : (
        <ProfessionalsProfiles filteredProfiles={filteredProfiles} />
      )}
    </div>
  );
};

export default ProfessionalsContent;
