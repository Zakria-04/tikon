import Link from "next/link";
import React from "react";
import {
  FaArrowLeft,
  FaClock,
  FaImages,
  FaMapMarkerAlt,
  FaShekelSign,
  FaTools,
  FaUserCheck,
} from "react-icons/fa";

interface JobsType {
  jobs: {
    title: string;
    category: string;
    city: string;
    budget: string;
    postedAt: string;
    description: string;
    urgency: string;
    requests: number;
    imagesCount: number;
  }[];
}

const Jobs = ({ jobs }: JobsType) => {
  return (
    <section className="px-5 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-[#00132F]">
              עבודות זמינות
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              בחרו עבודה שמתאימה לכם ופנו ללקוח בצורה ישירה.
            </p>
          </div>

          <p className="hidden text-sm font-bold text-slate-500 sm:block">
            {jobs.length} עבודות פתוחות
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
          {/* Jobs List */}
          <div className="grid gap-4">
            {jobs.map((job, index) => (
              <article
                key={`${job.title}-${index}`}
                className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#FEBC37]/60 hover:shadow-lg"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#FEBC37]/15 px-3 py-1 text-xs font-bold text-[#00132F]">
                        {job.category}
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                        {job.urgency}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-[#00132F]">
                      {job.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-7 text-slate-600">
                      {job.description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-[#FEBC37]" />
                        {job.city}
                      </span>

                      <span className="flex items-center gap-1">
                        <FaShekelSign className="text-[#FEBC37]" />
                        תקציב: {job.budget}
                      </span>

                      <span className="flex items-center gap-1">
                        <FaClock className="text-[#FEBC37]" />
                        {job.postedAt}
                      </span>

                      <span className="flex items-center gap-1">
                        <FaUserCheck className="text-[#FEBC37]" />
                        {job.requests} פניות
                      </span>

                      {job.imagesCount > 0 && (
                        <span className="flex items-center gap-1">
                          <FaImages className="text-[#FEBC37]" />
                          {job.imagesCount} תמונות
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col gap-2 md:w-44">
                    <Link
                      href="/register?role=professional"
                      className="flex items-center justify-center gap-2 rounded-2xl bg-[#00132F] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#FEBC37] hover:text-[#00132F]"
                    >
                      אני מעוניין
                      <FaArrowLeft className="text-xs" />
                    </Link>

                    <button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-[#00132F] transition hover:border-[#FEBC37] hover:bg-[#FEBC37]/10">
                      פרטים נוספים
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Side CTA */}
          <aside className="h-fit rounded-4xl bg-[#00132F] p-5 text-white shadow-lg">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-[#FEBC37] text-xl text-[#00132F]">
              <FaTools />
            </div>

            <h3 className="mt-5 text-2xl font-black">
              רוצים לקבל עבודות באזור שלכם?
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/70">
              פתחו פרופיל כבעלי מקצוע, הציגו את השירותים שלכם, ותוכלו לפנות
              לעבודות שמתאימות לכם.
            </p>

            <Link
              href="/join-pro"
              className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-[#FEBC37] px-5 py-3 text-sm font-bold text-[#00132F] transition hover:bg-[#f3ad18]"
            >
              הצטרפות כבעל מקצוע
              <FaArrowLeft className="text-xs" />
            </Link>

            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-sm font-bold text-white">מחפשים בעל מקצוע?</p>
              <p className="mt-1 text-sm leading-6 text-white/60">
                פרסמו בקשה וקבלו פניות מאנשים באזור שלכם.
              </p>

              <Link
                href="/post-job"
                className="mt-3 block rounded-2xl border border-white/20 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                פרסום עבודה
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
