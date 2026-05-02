import React, { ReactNode } from "react";

interface HowItWorksType {
  steps: {
    icon: ReactNode;
    title: string;
    text: string;
  }[];
}

const HowItWorks = ({ steps }: HowItWorksType) => {
  return (
    <section className="px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="mb-3 inline-block rounded-full bg-[#FEBC37]/15 px-4 py-2 text-xs font-bold text-[#00132F]">
            איך זה עובד?
          </span>

          <h2 className="text-3xl font-black text-[#00132F]">
            מפרסמים בקשה בשלושה צעדים פשוטים
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            במקום לחפש לבד, תנו לבעלי מקצוע רלוונטיים להבין מה אתם צריכים ולפנות
            אליכם.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-[#FEBC37]/15 text-xl text-[#FEBC37]">
                  {step.icon}
                </div>

                <span className="text-4xl font-black text-slate-100">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#00132F]">{step.title}</h3>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
