import Link from "next/link";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaShekelSign,
  FaTools,
  FaUserCheck,
} from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import FinalCTA from "./components/FinalCTA";

const PostJobPage = () => {
  const steps = [
    {
      icon: <MdWorkOutline />,
      title: "תארו את העבודה",
      text: "ספרו בקצרה איזה שירות אתם צריכים ומה הבעיה שצריך לפתור.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "בחרו מיקום ותקציב",
      text: "הוסיפו עיר, אזור ותקציב משוער שמתאים לכם.",
    },
    {
      icon: <FaUserCheck />,
      title: "קבלו פניות",
      text: "בעלי מקצוע רלוונטיים מהאזור יוכלו ליצור איתכם קשר.",
    },
  ];

  const benefits = [
    "חוסך זמן בחיפוש אחרי בעל מקצוע",
    "מאפשר להשוות בין כמה בעלי מקצוע",
    "אתם קובעים את התקציב שמתאים לכם",
    "מתאים לעבודות קטנות וגדולות לבית",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <HowItWorks steps={steps} />
      <Benefits benefits={benefits} />
      <FinalCTA />
    </main>
  );
};

export default PostJobPage;
