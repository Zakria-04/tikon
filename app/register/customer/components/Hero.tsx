import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import background from "@/assets/images/background.png";

const Hero = () => {
  return (
    <div className="relative h-105 overflow-hidden rounded-b-4xl sm:h-115 lg:h-screen lg:rounded-none">
      <Image
        src={background}
        alt="אנשי מקצוע לבית"
        priority
        className="h-full w-full object-cover"
      />

      {/* Soft white blur overlay */}
      <div className="absolute inset-y-0 right-0 z-10 flex w-full items-start bg-linear-to-l from-white via-white/80 to-transparent px-5 py-10 sm:px-8 lg:w-[65%] lg:items-center lg:px-14">
        <div className="max-w-sm sm:max-w-md">
          <h1 className="text-3xl font-black leading-tight text-[#00132F] sm:text-4xl lg:text-6xl">
            צרו חשבון והתחילו לפרסם עבודות ב־
            <span className="text-[#FEBC37]">Tikon</span>
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600 sm:mt-4 sm:leading-7 lg:text-base">
            פתחו חשבון, פרסמו את העבודה שאתם צריכים, הגדירו תקציב ומיקום, וקבלו
            פניות מבעלי מקצוע באזור שלכם.
          </p>

          {/* Mobile compact benefits */}
          <div className="mt-4 grid gap-2 sm:hidden">
            {["פרסום בקשה", "קבלת פניות", "מעקב אחרי הבקשות"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-2xl bg-white/75 px-3 py-2 text-xs font-bold text-[#00132F] shadow-sm backdrop-blur"
              >
                <FaCheckCircle className="shrink-0 text-[#FEBC37]" />
                {item}
              </div>
            ))}
          </div>

          {/* Tablet / desktop benefits */}
          <div className="mt-5 hidden gap-3 sm:grid sm:grid-cols-2 lg:mt-6">
            {[
              "פרסום בקשה לעבודה",
              "קבלת פניות מבעלי מקצוע",
              "הגדרת תקציב שמתאים לכם",
              "מעקב אחרי הבקשות שלכם",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/75 p-3 text-xs font-semibold text-[#00132F] shadow-sm backdrop-blur lg:text-sm"
              >
                <FaCheckCircle className="mb-2 text-[#FEBC37]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extra soft blur on edge */}
      <div className="absolute inset-y-0 left-[35%] z-10 hidden w-32 bg-linear-to-l from-transparent to-white/70 blur-2xl lg:block" />
    </div>
  );
};

export default Hero;
