"use client";

import { useAuthStore } from "@/store/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  FaArrowLeft,
  FaBriefcase,
  FaEnvelope,
  FaLock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTools,
  FaUser,
} from "react-icons/fa";

const services = [
  { label: "חשמלאי", value: "electrician" },
  { label: "אינסטלטור", value: "plumber" },
  { label: "צבע", value: "painter" },
  { label: "שיפוצים", value: "renovation" },
  { label: "ניקיון", value: "cleaning" },
  { label: "הרכבת רהיטים", value: "furniture_assembly" },
  { label: "מיזוג אוויר", value: "air_conditioning" },
  { label: "נגרות", value: "carpentry" },
  { label: "שטיפת רכב", value: "car_wash" },
  { label: "תיקונים קטנים", value: "small_repairs" },
];

const workTypes = [
  { label: "עבודות פשוטות", value: "simple_jobs" },
  { label: "עבודות מקצועיות", value: "professional_jobs" },
  { label: "עבודות דחופות", value: "urgent_jobs" },
  { label: "עבודות לפי תקציב", value: "budget_jobs" },
];

const experienceLevels = [
  { label: "0-1" },
  { label: "1-3" },
  { label: "3-5" },
  { label: "5-10" },
  { label: "10+" },
];

const cities = ["תל אביב", "חיפה", "ירושלים", "באר שבע", "עכו", "קריות"];

type FormDataType = {
  name: string;
  phone: string;
  email: string;
  password: string;
  mainService: string;
  experienceYears: string;
  city: string;
  bio: string;
  workTypes: string[];
};

const Form = () => {
  const router = useRouter();
  const { register, isLoading, error } = useAuthStore();

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    phone: "",
    email: "",
    password: "",
    mainService: "",
    experienceYears: "",
    city: "",
    bio: "",
    workTypes: [],
  });

  console.log("formdata", formData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setFormData((prev) => ({
        ...prev,
        workTypes: checked
          ? [...prev.workTypes, value]
          : prev.workTypes.filter((item) => item !== value),
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
      role: "professional" as const,
      authProvider: "local" as const,

      professionalProfile: {
        mainService: formData.mainService,
        experienceYears: formData.experienceYears,
        workAreas: [formData.city],
        bio: formData.bio.trim(),
        jobPreferences: formData.workTypes,
      },
    };

    await register(body);

    router.push("/");
  };

  return (
    <section className="rounded-4xl bg-white p-5 shadow-xl md:p-7">
      <div className="mb-6">
        <h2 className="text-2xl font-black text-[#00132F]">
          יצירת פרופיל בעל מקצוע
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          הפרטים האלה יעזרו ללקוחות להבין מה אתם עושים ואיפה אתם זמינים.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
              שם מלא
            </label>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaUser className="text-[#FEBC37]" />
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="הכניסו שם מלא"
                className="w-full bg-transparent outline-none placeholder:text-slate-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
              מספר טלפון
            </label>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaPhoneAlt className="text-[#FEBC37]" />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="050-000-0000"
                className="w-full bg-transparent outline-none placeholder:text-slate-400"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
              אימייל
            </label>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaEnvelope className="text-[#FEBC37]" />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="example@email.com"
                className="w-full bg-transparent outline-none placeholder:text-slate-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
              סיסמה
            </label>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaLock className="text-[#FEBC37]" />
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="בחרו סיסמה"
                className="w-full bg-transparent outline-none placeholder:text-slate-400"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
              תחום ראשי
            </label>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaTools className="text-[#FEBC37]" />
              <select
                name="mainService"
                value={formData.mainService}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                required
              >
                <option value="">בחרו תחום</option>

                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
              שנות ניסיון
            </label>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
              <FaBriefcase className="text-[#FEBC37]" />
              <select
                name="experienceYears"
                value={formData.experienceYears}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                required
              >
                <option value="">בחרו שנות ניסיון</option>

                {experienceLevels.map((level) => (
                  <option key={level.label} value={level.label}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
            עיר / אזורי עבודה
          </label>

          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#FEBC37] focus-within:bg-white">
            <FaMapMarkerAlt className="text-[#FEBC37]" />
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
              required
            >
              <option value="">בחרו עיר</option>

              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-bold text-[#00132F]">
            תיאור קצר עליכם
          </label>

          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="ספרו בקצרה איזה שירותים אתם נותנים, באילו עבודות אתם טובים, ומה חשוב ללקוחות לדעת..."
            rows={5}
            className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 leading-7 outline-none placeholder:text-slate-400 focus:border-[#FEBC37] focus:bg-white"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-[#00132F]">
            איזה סוג עבודות אתם רוצים לקבל?
          </label>

          <div className="grid gap-2 sm:grid-cols-2">
            {workTypes.map((item) => (
              <label
                key={item.value}
                className="flex cursor-pointer items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:border-[#FEBC37] hover:bg-[#FEBC37]/10"
              >
                <input
                  name="workTypes"
                  value={item.value}
                  checked={formData.workTypes.includes(item.value)}
                  onChange={handleChange}
                  type="checkbox"
                  className="accent-[#FEBC37]"
                />
                {item.label}
              </label>
            ))}
          </div>
        </div>

        {error && (
          <div className="rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-600">
            {error}
          </div>
        )}

        <div className="rounded-2xl bg-[#FEBC37]/10 p-4 text-sm leading-6 text-slate-600">
          חשוב: בעבודות שדורשות רישיון או מומחיות, כמו חשמל, גז או עבודות
          מסוכנות, יש להציע רק שירותים שאתם מוסמכים ומנוסים לבצע.
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00132F] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#FEBC37] hover:text-[#00132F] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "יוצר חשבון..." : "יצירת חשבון ופרופיל"}
          <FaArrowLeft className="text-xs" />
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-500">
        כבר יש לכם חשבון?{" "}
        <Link
          href="/login"
          className="font-bold text-[#00132F] hover:text-[#FEBC37]"
        >
          התחברות
        </Link>
      </p>
    </section>
  );
};

export default Form;
