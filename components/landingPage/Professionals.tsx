'use client'
import profile from "@/assets/images/profile.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaStar,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCheckCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Professionals = () => {
  const router = useRouter();
  const profiles = [
    {
      _id: "1",
      name: "יוסף כהן",
      category: "חשמלאי",
      city: "חיפה",
      description:
        "בעל ניסיון של מעל 5 שנים בתיקוני חשמל, התקנות ובדיקות בטיחות לבית.",
      experience: 5,
      rating: 4.7,
      reviews: 24,
      profile,
    },
    {
      _id: "2",
      name: "אחמד חליל",
      category: "שיפוצים",
      city: "עכו",
      description: "מתמחה בעבודות שיפוץ, תיקוני קירות, צבע, גבס ועבודות גמר.",
      experience: 6,
      rating: 4.8,
      reviews: 31,
      profile,
    },
    {
      _id: "3",
      name: "דוד לוי",
      category: "אינסטלטור",
      city: "נהריה",
      description:
        "שירותי אינסטלציה לבית, פתיחת סתימות, תיקון נזילות והחלפת ברזים.",
      experience: 4,
      rating: 4.6,
      reviews: 18,
      profile,
    },
    {
      _id: "4",
      name: "מוחמד עבד",
      category: "מיזוג אוויר",
      city: "כרמיאל",
      description: "התקנה, ניקוי ותיקון מזגנים עם שירות מהיר ומקצועי.",
      experience: 7,
      rating: 4.9,
      reviews: 42,
      profile,
    },
  ];

  const navigateToProfessionalsProfile = (id: string) => {
    router.push(`/professionals/${id}`);
  };

  return (
    <section className="px-5 pb-14" dir="rtl">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <span className="mb-2 inline-block rounded-full bg-[#FEBC37]/15 px-3 py-1 text-xs font-bold text-[#00132F]">
              בעלי מקצוע מומלצים
            </span>

            <h2 className="text-2xl font-bold text-[#00132F]">
              מצאו בעל מקצוע שמתאים לעבודה שלכם
            </h2>

            <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">
              צפו בפרופילים לדוגמה, השוו ניסיון ודירוגים, ובחרו את איש המקצוע
              המתאים ביותר.
            </p>
          </div>

          <button className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-[#00132F] shadow-sm transition hover:border-[#FEBC37] hover:bg-[#FEBC37]/10 sm:block">
            הצג הכל
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {profiles.map((pro, index) => (
            <article
              key={`${pro.name}-${index}`}
              className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#FEBC37]/50 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                {/* Rounded profile image */}
                <div className="relative size-20 shrink-0 overflow-hidden rounded-full border-4 border-[#FEBC37]/20 bg-slate-100 shadow-sm">
                  <Image
                    src={pro.profile}
                    alt={`${pro.name} profile`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Main info */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-[#00132F]">
                          {pro.name}
                        </h3>

                        <MdVerified className="text-[#2FA4D7] size-4.5 mt-0.5" />
                      </div>

                      <p className="mt-1 text-sm font-semibold text-slate-600">
                        {pro.category}
                      </p>
                    </div>

                    {/* <div className="flex items-center gap-1 rounded-full bg-[#FEBC37]/15 px-3 py-1 text-xs font-bold text-[#00132F]">
                      <FaStar className="text-[#FEBC37]" />
                      {pro.rating}
                    </div> */}
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-[#FEBC37]" />
                      {pro.city}
                    </span>

                    <span className="flex items-center gap-1">
                      <FaBriefcase className="text-[#FEBC37]" />
                      {pro.experience}+ שנות ניסיון
                    </span>

                    <span>{pro.reviews} ביקורות</span>
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                    {pro.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => navigateToProfessionalsProfile(pro._id)}
                  className="flex-1 rounded-2xl bg-[#00132F] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#FEBC37] hover:text-[#00132F]"
                >
                  צפייה בפרופיל
                </button>

                <button
                  aria-label={`צור קשר עם ${pro.name}`}
                  className="flex size-12 items-center justify-center rounded-2xl border border-slate-200 text-[#00132F] transition hover:border-[#FEBC37] hover:bg-[#FEBC37]/10"
                >
                  <FaPhoneAlt className="text-sm" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <button className="mt-5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#00132F] shadow-sm transition hover:border-[#FEBC37] hover:bg-[#FEBC37]/10 sm:hidden">
          הצג הכל
        </button>
      </div>
    </section>
  );
};

export default Professionals;
