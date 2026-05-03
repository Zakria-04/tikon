import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaEnvelope, FaLock } from "react-icons/fa";
import background from "@/assets/images/background.png";
import LoginCard from "./components/LoginCard";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-slate-50" dir="rtl">
      <section className="relative min-h-screen overflow-hidden pb-72 md:pb-0">
        {/* Background Image */}
        <div className="relative h-130 overflow-hidden rounded-b-4xl md:h-screen md:rounded-none">
          <Image
            src={background}
            alt="אנשי מקצוע לבית"
            priority
            className="h-full w-full object-cover"
          />

          {/* Soft white blur overlay */}
          <div className="absolute inset-y-0 right-0 z-10 flex w-full items-start bg-linear-to-l from-white via-white/75 to-transparent px-6 py-12 md:w-[65%] md:items-center md:px-14">
            <div className="max-w-md">
              <h1 className="text-4xl font-black leading-tight text-[#00132F] md:text-6xl">
                חזרו לחשבון שלכם ב־
                <span className="text-[#FEBC37]">Tikon</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
                התחברו כדי לפרסם עבודות, לעקוב אחרי פניות, או לנהל את פרופיל בעל
                המקצוע שלכם.
              </p>
            </div>
          </div>

          {/* Extra soft blur on edge */}
          <div className="absolute inset-y-0 left-[35%] z-10 hidden w-32 bg-linear-to-l from-transparent to-white/70 blur-2xl md:block" />
        </div>

        {/* Login Card */}
        <LoginCard />
      </section>
    </main>
  );
};

export default LoginPage;
