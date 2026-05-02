import Link from "next/link";
import { FaArrowLeft, FaCheckCircle, FaTools, FaUser } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import profile from "@/assets/images/profile.png";

const RegisterPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10" dir="rtl">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black text-[#00132F] md:text-5xl">
            איך תרצו להשתמש ב־Tikon?
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            בחרו את סוג החשבון המתאים לכם כדי שנוכל להתאים את החוויה והשלבים
            הבאים.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Customer */}
          <Link
            href="/register/customer"
            className="group rounded-4xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#FEBC37]/70 hover:shadow-xl"
          >
            <div className="mb-5 flex size-16 items-center justify-center rounded-3xl bg-[#FEBC37]/15 text-2xl text-[#FEBC37]">
              <FaUser />
            </div>

            <h2 className="text-2xl font-black text-[#00132F]">
              אני מחפש בעל מקצוע
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              פרסמו עבודה, הגדירו תקציב ומיקום, וקבלו פניות מבעלי מקצוע באזור
              שלכם.
            </p>

            <div className="mt-5 space-y-3">
              {[
                "פרסום בקשה לעבודה",
                "בחירת תקציב ומיקום",
                "קבלת פניות מבעלי מקצוע",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-[#00132F]"
                >
                  <FaCheckCircle className="text-[#FEBC37]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#00132F] px-5 py-3 text-sm font-bold text-white transition group-hover:bg-[#FEBC37] group-hover:text-[#00132F]">
              המשך כלקוח
              <FaArrowLeft className="text-xs" />
            </div>
          </Link>

          {/* Professional */}
          <Link
            href="/register/professional"
            className="group relative overflow-hidden rounded-4xl border border-[#FEBC37]/40 bg-[#00132F] p-6 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute -left-16 -top-16 size-40 rounded-full bg-[#FEBC37]/20 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex size-16 items-center justify-center rounded-3xl bg-[#FEBC37] text-2xl text-[#00132F]">
                <FaTools />
              </div>

              <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-[#FEBC37]">
                אפשרות להכנסה נוספת
              </span>

              <h2 className="text-2xl font-black">אני רוצה לקבל עבודות</h2>

              <p className="mt-3 text-sm leading-7 text-white/70">
                פתחו פרופיל, הציגו את השירותים שאתם יודעים לבצע, וקבלו פניות
                מלקוחות באזור שלכם.
              </p>

              <p className="mt-3 rounded-2xl bg-white/10 p-3 text-sm leading-6 text-white/75">
                מתאים גם למי שרוצה להרוויח כסף נוסף מעבודות פשוטות כמו צביעה,
                הרכבת רהיטים, ניקיון או תיקונים קטנים.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "פתיחת פרופיל בחינם בתקופת ההשקה",
                  "בחירת עבודות שמתאימות ליכולת שלכם",
                  "קבלת פניות מלקוחות באזור",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-semibold text-white"
                  >
                    <FaCheckCircle className="text-[#FEBC37]" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#FEBC37] px-5 py-3 text-sm font-bold text-[#00132F] transition hover:bg-[#f3ad18]">
                המשך כבעל מקצוע
                <FaArrowLeft className="text-xs" />
              </div>
            </div>
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          כבר יש לכם חשבון?{" "}
          <Link
            href="/login"
            className="font-bold text-[#00132F] hover:text-[#FEBC37]"
          >
            התחברות
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
