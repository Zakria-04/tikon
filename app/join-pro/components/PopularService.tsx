import React from "react";

interface PopularServiceType {
  services: string[];
}

const PopularService = ({ services }: PopularServiceType) => {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-4xl bg-slate-50 p-6 md:p-8">
          <div className="mb-5">
            <span className="mb-3 inline-block rounded-full bg-[#FEBC37]/15 px-4 py-2 text-xs font-bold text-[#00132F]">
              למי זה מתאים?
            </span>

            <h2 className="text-3xl font-black text-[#00132F]">
              בעלי מקצוע מכל תחומי השירות לבית
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
              אם אתם נותנים שירות ללקוחות בבית או בעסק, תוכלו לפתוח פרופיל
              ולהתחיל לקבל חשיפה.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-[#00132F] shadow-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularService;
