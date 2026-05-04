import Link from "next/link";
import {
  FaArrowLeft,
  FaClock,
  FaFilter,
  FaImages,
  FaMapMarkerAlt,
  FaSearch,
  FaShekelSign,
  FaTools,
  FaUserCheck,
} from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import Hero from "./components/Hero";
import Filter from "./components/Filter";
import Categories from "./components/Categories";
import Jobs from "./components/Jobs";

const JobsPage = () => {
  const jobs = [
    {
      _id: "1",
      title: "צביעת חדר שינה",
      category: "צביעה",
      city: "חיפה",
      budget: "₪500",
      postedAt: "לפני שעה",
      description:
        "מחפש מישהו לצביעת חדר שינה בגודל בינוני. הקירות במצב טוב, צריך צבע לבן וניקיון בסיום.",
      urgency: "השבוע",
      requests: 3,
      imagesCount: 4,
    },
    {
      _id: "2",
      title: "הרכבת ארון בגדים",
      category: "הרכבת רהיטים",
      city: "עכו",
      budget: "₪250",
      postedAt: "לפני 3 שעות",
      description:
        "צריך להרכיב ארון בגדים חדש שנקנה באינטרנט. כל החלקים נמצאים בבית.",
      urgency: "בימים הקרובים",
      requests: 5,
      imagesCount: 3,
    },
    {
      _id: "3",
      title: "תיקון נזילה מתחת לכיור",
      category: "אינסטלציה",
      city: "נהריה",
      budget: "₪350",
      postedAt: "היום",
      description: "יש נזילה קטנה מתחת לכיור במטבח. צריך בדיקה ותיקון בהקדם.",
      urgency: "דחוף",
      requests: 2,
      imagesCount: 1,
    },
    {
      _id: "4",
      title: "שטיפת רכב בבית הלקוח",
      category: "שטיפת רכב",
      city: "כרמיאל",
      budget: "₪120",
      postedAt: "אתמול",
      description:
        "מחפש מישהו שיגיע לשטוף רכב פרטי בבית. כולל ניקוי חיצוני ופנימי בסיסי.",
      urgency: "גמיש",
      requests: 1,
      imagesCount: 4,
    },
    {
      _id: "5",
      title: "תליית מדפים בסלון",
      category: "תיקונים קטנים",
      city: "קריות",
      budget: "₪180",
      postedAt: "אתמול",
      description:
        "צריך לתלות 3 מדפים על קיר בסלון. יש מדפים וברגים, צריך כלי עבודה וניסיון.",
      urgency: "השבוע",
      requests: 4,
      imagesCount: 4,
    },
    {
      _id: "6",
      title: "ניקיון דירה לאחר מעבר",
      category: "ניקיון",
      city: "חיפה",
      budget: "₪400",
      postedAt: "לפני יומיים",
      description:
        "דירת 3 חדרים ריקה לאחר מעבר. צריך ניקיון כללי כולל מטבח, רצפה וחדר אמבטיה.",
      urgency: "בימים הקרובים",
      requests: 6,
      imagesCount: 4,
    },
  ];

  const categories = [
    "הכל",
    "צביעה",
    "אינסטלציה",
    "הרכבת רהיטים",
    "ניקיון",
    "תיקונים קטנים",
    "שטיפת רכב",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <Filter />
      <Categories categories={categories} />
      <Jobs jobs={jobs} />
    </main>
  );
};

export default JobsPage;
