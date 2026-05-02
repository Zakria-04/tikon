import Link from "next/link";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
  FaTools,
  FaUserPlus,
} from "react-icons/fa";
import { MdWorkOutline, MdVerified } from "react-icons/md";
import Hero from "./components/Hero";
import PopularService from "./components/PopularService";
import BeginnerFriendly from "./components/BeginnerFriendly";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import LaunchOffer from "./components/LaunchOffer";

const JoinProPage = () => {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "פותחים פרופיל",
      text: "מוסיפים שם, תמונה, תחום שירות, אזורי עבודה ופרטים בסיסיים.",
    },
    {
      icon: <MdVerified />,
      title: "מציגים את הניסיון",
      text: "ספרו במה אתם מתמחים, כמה ניסיון יש לכם, ואיזה עבודות אתם מבצעים.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "מקבלים פניות",
      text: "לקוחות באזור שלכם יוכלו לראות את הפרופיל וליצור איתכם קשר.",
    },
  ];

  const benefits = [
    "פרופיל מקצועי שמציג את השירותים שלכם",
    "חשיפה ללקוחות שמחפשים בעלי מקצוע באזור",
    "אפשרות לקבל פניות ישירות מלקוחות",
    "הצטרפות חינם בתקופת ההשקה",
  ];

  const services = [
    "חשמלאי",
    "אינסטלטור",
    "שיפוצים",
    "צבע",
    "מיזוג אוויר",
    "נגרות",
  ];

  return (
    <main className="min-h-screen bg-white" dir="rtl">
      <Hero />
      <PopularService services={services} />
      <BeginnerFriendly />
      <HowItWorks steps={steps} />
      <Benefits benefits={benefits} />
      <LaunchOffer />
    </main>
  );
};

export default JoinProPage;
