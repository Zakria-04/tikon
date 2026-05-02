import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const BeginnerFriendly = () => {
  return (
    <section className="px-5 pb-14">
      <div className="mx-auto max-w-6xl rounded-4xl bg-gray-50 p-6 md:p-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <span className="mb-3 inline-block rounded-full bg-white px-4 py-2 text-xs font-bold text-[#00132F] shadow-sm">
              מתאים גם להכנסה נוספת
            </span>

            <h2 className="text-3xl font-black leading-tight text-[#00132F]">
              יש לכם ידיים טובות? אפשר להפוך את זה להכנסה נוספת
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              אם יש לכם יכולת לבצע עבודות פשוטות כמו צביעה, הרכבת רהיטים,
              תיקונים קטנים, ניקיון או שירותים לבית — תוכלו לפתוח פרופיל, לבחור
              עבודות שמתאימות לכם, ולהתחיל להרוויח כסף נוסף בזמנכם הפנוי.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              הפלטפורמה מתאימה גם למי שנמצא בתחילת הדרך ורוצה להתחיל מעבודות
              פשוטות, כל עוד בוחרים רק עבודות שמתאימות ליכולת ולניסיון האישי.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "אפשר להתחיל מעבודות פשוטות",
              "הזדמנות להרוויח כסף נוסף מהצד",
              "אתם בוחרים אילו עבודות מתאימות לכם",
              "אפשר לעבוד באזור ובזמן שנוח לכם",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
              >
                <FaCheckCircle className="shrink-0 text-[#FEBC37]" />
                <span className="text-sm font-semibold text-[#00132F]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeginnerFriendly;
