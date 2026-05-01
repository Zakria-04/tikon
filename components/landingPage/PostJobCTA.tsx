import postJobBG from "@/assets/images/postJobBG.png";
import Image from "next/image";
import { FaArrowLeft, FaMapMarkerAlt, FaShekelSign } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

const PostJobCTA = () => {
  return (
    <section className="px-5 pb-16" dir="rtl">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-4xl bg-[#00132F] shadow-xl">
          <div className="relative">
            <Image
              src={postJobBG}
              alt="פרסום בקשה לבעל מקצוע"
              className="h-auto w-full object-contain md:h-107.5 md:object-cover"
              priority
            />

            {/* Desktop content overlay */}
            <div className="absolute inset-y-0 right-0 hidden w-[45%] items-center p-8 md:flex">
              <div className="rounded-3xl bg-white/95 p-5 shadow-lg backdrop-blur-md">
                <span className="mb-3 inline-flex rounded-full bg-[#FEBC37]/20 px-3 py-1 text-xs font-bold text-[#00132F]">
                  דרך מהירה למצוא בעל מקצוע
                </span>

                <h2 className="text-3xl font-bold leading-tight text-[#00132F]">
                  לא מצאתם את מי שאתם צריכים?
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  פרסמו את העבודה, הגדירו תקציב ומיקום, ובעלי מקצוע מהאזור יוכלו
                  לפנות אליכם ישירות.
                </p>

                <div className="mt-4 grid gap-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2">
                    <MdWorkOutline className="text-[#FEBC37]" />
                    תארו בקצרה את העבודה
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2">
                    <FaShekelSign className="text-[#FEBC37]" />
                    הגדירו תקציב שמתאים לכם
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2">
                    <FaMapMarkerAlt className="text-[#FEBC37]" />
                    קבלו פניות מהאזור שלכם
                  </div>
                </div>

                <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FEBC37] px-5 py-3 text-sm font-bold text-[#00132F] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f3ad18]">
                  פרסום בקשה עכשיו
                  <FaArrowLeft className="text-xs" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile content under image */}
          <div className="p-5 md:hidden">
            <span className="mb-3 inline-flex rounded-full bg-[#FEBC37]/20 px-3 py-1 text-xs font-bold text-[#FEBC37]">
              דרך מהירה למצוא בעל מקצוע
            </span>

            <h2 className="text-2xl font-bold leading-tight text-white">
              לא מצאתם את מי שאתם צריכים?
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/75">
              פרסמו את העבודה, הגדירו תקציב ומיקום, ובעלי מקצוע מהאזור יוכלו
              לפנות אליכם ישירות.
            </p>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FEBC37] px-5 py-3 text-sm font-bold text-[#00132F] shadow-sm transition hover:bg-[#f3ad18]">
              פרסום בקשה עכשיו
              <FaArrowLeft className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostJobCTA;