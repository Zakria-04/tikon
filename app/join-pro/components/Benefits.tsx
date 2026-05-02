import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface BenefitsType {
  benefits: string[];
}

const Benefits = ({ benefits }: BenefitsType) => {
  return (
    <section className="px-5 pb-14">
      <div className="mx-auto max-w-6xl rounded-4xl bg-slate-50 p-6 md:p-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <span className="mb-3 inline-block rounded-full bg-[#FEBC37]/15 px-4 py-2 text-xs font-bold text-[#00132F]">
              למה להצטרף?
            </span>

            <h2 className="text-3xl font-black leading-tight text-[#00132F]">
              תנו ללקוחות להבין למה לבחור דווקא בכם
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              פרופיל מסודר עם תחום שירות, אזור עבודה, ניסיון ותיאור קצר יכול
              לעזור ללקוחות להכיר אתכם ולפנות אליכם בצורה ישירה.
            </p>
          </div>

          <div className="grid gap-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
              >
                <FaCheckCircle className="shrink-0 text-[#FEBC37]" />
                <span className="text-sm font-semibold text-[#00132F]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
