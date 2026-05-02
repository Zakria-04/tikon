import Link from "next/link";
import { FaArrowLeft, FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <section className="relative z-20 mx-auto -mt-16 w-[92%] max-w-md rounded-4xl bg-white p-5 shadow-2xl sm:-mt-20 sm:p-6 lg:absolute lg:left-[25%] lg:top-2/6 lg:mx-0 lg:mt-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:p-7 xl:left-[32%]">
      <div className="mb-5 sm:mb-6">
        <span className="mb-3 inline-block rounded-full bg-[#FEBC37]/15 px-3 py-1 text-xs font-bold text-[#00132F]">
          הצטרפות מהירה
        </span>

        <h2 className="text-xl font-black text-[#00132F] sm:text-2xl">
          יצירת חשבון לקוח
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          מלאו את הפרטים הבסיסיים כדי להתחיל.
        </p>
      </div>

      <form className="space-y-3.5 sm:space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
            שם מלא
          </label>

          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#FEBC37] focus-within:bg-white">
            <FaUser className="shrink-0 text-[#FEBC37]" />
            <input
              type="text"
              placeholder="הכניסו שם מלא"
              className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
            אימייל
          </label>

          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#FEBC37] focus-within:bg-white">
            <FaEnvelope className="shrink-0 text-[#FEBC37]" />
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
            סיסמה
          </label>

          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-[#FEBC37] focus-within:bg-white">
            <FaLock className="shrink-0 text-[#FEBC37]" />
            <input
              type="password"
              placeholder="בחרו סיסמה"
              className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00132F] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#FEBC37] hover:text-[#00132F]"
        >
          יצירת חשבון
          <FaArrowLeft className="text-xs" />
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-500">
        כבר יש לכם חשבון?{" "}
        <Link
          href="/login"
          className="font-bold text-[#00132F] transition hover:text-[#FEBC37]"
        >
          התחברות
        </Link>
      </p>
    </section>
  );
};

export default RegisterForm;
