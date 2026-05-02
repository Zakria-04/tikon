import Link from "next/link";
import {
  FaArrowLeft,
  FaBriefcase,
  FaEnvelope,
  FaLock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTools,
  FaUser,
} from "react-icons/fa";

const ProfessionalRegisterPage = () => {
  const services = [
    "חשמלאי",
    "אינסטלטור",
    "צבע",
    "שיפוצים",
    "ניקיון",
    "הרכבת רהיטים",
    "מיזוג אוויר",
    "נגרות",
    "שטיפת רכב",
    "תיקונים קטנים",
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10" dir="rtl">
      <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Text side */}
        <section className="lg:sticky lg:top-12">
          <h1 className="text-4xl font-black leading-tight text-[#00132F] md:text-5xl">
            פתחו פרופיל וקבלו עבודות באזור שלכם
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
            הציגו את השירותים שאתם יודעים לבצע, בחרו אזורי עבודה, וקבלו פניות
            מלקוחות שמחפשים עזרה — מעבודות פשוטות ועד שירותים מקצועיים.
          </p>

          <div className="mt-6 rounded-4xl bg-[#00132F] p-5 text-white shadow-xl">
            <span className="mb-3 inline-block rounded-full bg-[#FEBC37]/20 px-3 py-1 text-xs font-bold text-[#FEBC37]">
              מתאים גם להכנסה נוספת
            </span>

            <h2 className="text-xl font-black">
              יש לכם ידיים טובות? התחילו מעבודות שמתאימות לכם
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/70">
              אפשר להתחיל מעבודות פשוטות כמו צביעה, הרכבת רהיטים, ניקיון, שטיפת
              רכב או תיקונים קטנים — ולבחור רק עבודות שמתאימות ליכולת שלכם.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="rounded-4xl bg-white p-5 shadow-xl md:p-7">
          <div className="mb-6">
            <h2 className="text-2xl font-black text-[#00132F]">
              יצירת פרופיל בעל מקצוע
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              הפרטים האלה יעזרו ללקוחות להבין מה אתם עושים ואיפה אתם זמינים.
            </p>
          </div>

          <form className="space-y-5">
            {/* Basic info */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
                  שם מלא
                </label>

                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
                  <FaUser className="text-[#FEBC37]" />
                  <input
                    type="text"
                    placeholder="הכניסו שם מלא"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
                  מספר טלפון
                </label>

                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
                  <FaPhoneAlt className="text-[#FEBC37]" />
                  <input
                    type="tel"
                    placeholder="050-000-0000"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
                  אימייל
                </label>

                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
                  <FaEnvelope className="text-[#FEBC37]" />
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
                  סיסמה
                </label>

                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
                  <FaLock className="text-[#FEBC37]" />
                  <input
                    type="password"
                    placeholder="בחרו סיסמה"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Professional info */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
                  תחום ראשי
                </label>

                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
                  <FaTools className="text-[#FEBC37]" />
                  <select className="w-full bg-transparent text-sm outline-none">
                    <option>בחרו תחום</option>
                    {services.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
                  שנות ניסיון
                </label>

                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
                  <FaBriefcase className="text-[#FEBC37]" />
                  <input
                    type="number"
                    placeholder="לדוגמה: 2"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
                עיר / אזורי עבודה
              </label>

              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
                <FaMapMarkerAlt className="text-[#FEBC37]" />
                <input
                  type="text"
                  placeholder="לדוגמה: חיפה, עכו, קריות"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
                תיאור קצר עליכם
              </label>

              <textarea
                placeholder="ספרו בקצרה איזה שירותים אתם נותנים, באילו עבודות אתם טובים, ומה חשוב ללקוחות לדעת..."
                rows={5}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 outline-none placeholder:text-slate-400 focus:border-[#FEBC37] focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#00132F]">
                איזה סוג עבודות אתם רוצים לקבל?
              </label>

              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "עבודות פשוטות",
                  "עבודות מקצועיות",
                  "עבודות דחופות",
                  "עבודות לפי תקציב",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:border-[#FEBC37] hover:bg-[#FEBC37]/10"
                  >
                    <input type="checkbox" className="accent-[#FEBC37]" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#FEBC37]/10 p-4 text-sm leading-6 text-slate-600">
              חשוב: בעבודות שדורשות רישיון או מומחיות, כמו חשמל, גז או עבודות
              מסוכנות, יש להציע רק שירותים שאתם מוסמכים ומנוסים לבצע.
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00132F] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#FEBC37] hover:text-[#00132F]"
            >
              יצירת חשבון ופרופיל
              <FaArrowLeft className="text-xs" />
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-500">
            כבר יש לכם חשבון?{" "}
            <Link
              href="/login"
              className="font-bold text-[#00132F] hover:text-[#FEBC37]"
            >
              התחברות
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default ProfessionalRegisterPage;
