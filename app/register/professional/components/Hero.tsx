import React from "react";

const Hero = () => {
  return (
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
          אפשר להתחיל מעבודות פשוטות כמו צביעה, הרכבת רהיטים, ניקיון, שטיפת רכב
          או תיקונים קטנים — ולבחור רק עבודות שמתאימות ליכולת שלכם.
        </p>
      </div>
    </section>
  );
};

export default Hero;
