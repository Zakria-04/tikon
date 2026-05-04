import React from "react";
import Image from "next/image";
import profilePicture from "@/assets/images/profile.png";
import {
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaBriefcase,
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const ProfessionalProfile = () => {
  const profile = {
    _id: "1",
    name: "יוסף כהן",
    category: "חשמלאי",
    city: "חיפה",
    phone: "050-123-4567",
    facebook: "https://www.facebook.com/example",
    instagram: "https://www.instagram.com/example",
    email: "yosef@example.com",
    description:
      "בעל ניסיון של מעל 5 שנים בתיקוני חשמל, התקנות ובדיקות בטיחות לבית.",
    experience: 5,
    rating: 4.7,
    reviews: 24,
    profilePicture,
  };

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-6" dir="rtl">
      <div className="mx-auto max-w-5xl">
        {/* Top Profile Card */}
        <section className="overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-sm">
          {/* Cover */}
          <div className="relative h-32 bg-linear-to-l from-[#00132F] via-[#12315f] to-[#FEBC37]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.25),transparent_25%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.18),transparent_20%)]" />
          </div>

          {/* Profile Info */}
          <div className="relative px-5 pb-6">
            <div className="-mt-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                <div className="relative size-28 overflow-hidden rounded-3xl border-4 border-white bg-white shadow-md">
                  <Image
                    src={profile.profilePicture}
                    alt={profile.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="pt-1">
                  <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-[#FEBC37]/15 px-3 py-1 text-xs font-bold text-[#00132F]">
                    <FaCheckCircle className="text-[#FEBC37]" />
                    בעל מקצוע מאומת
                  </div>

                  <h1 className="text-2xl font-black text-[#00132F]">
                    {profile.name}
                  </h1>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span className="font-bold text-slate-700">
                      {profile.category}
                    </span>

                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-[#FEBC37]" />
                      {profile.city}
                    </span>

                    <span className="flex items-center gap-1">
                      <FaBriefcase className="text-[#FEBC37]" />
                      {profile.experience} שנות ניסיון
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3">
                <FaStar className="text-[#FEBC37]" />
                <div>
                  <p className="text-sm font-black text-[#00132F]">
                    {profile.rating}
                  </p>
                  <p className="text-xs text-slate-500">
                    {profile.reviews} ביקורות
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="mt-5 grid gap-5 lg:grid-cols-[1.5fr_0.8fr]">
          {/* Main Info */}
          <div className="space-y-5">
            <div className="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-black text-[#00132F]">
                אודות בעל המקצוע
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {profile.description}
              </p>
            </div>

            {/*//? Services */}
            {/* <div className="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-black text-[#00132F]">
                שירותים עיקריים
              </h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "תיקוני חשמל",
                  "התקנת נקודות חשמל",
                  "בדיקות בטיחות",
                  "תיקון תקלות בבית",
                ].map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
                  >
                    <FaCheckCircle className="shrink-0 text-[#FEBC37]" />
                    {service}
                  </div>
                ))}
              </div>
            </div> */}

            {/*//? Image Show Content  */}
            {/* <div className="rounded-4xl border border-dashed border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-black text-[#00132F]">
                עבודות קודמות
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                בהמשך יהיה ניתן להציג כאן תמונות של עבודות קודמות, לפני ואחרי,
                ופרויקטים שבעל המקצוע ביצע.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex aspect-square items-center justify-center rounded-3xl bg-slate-50 text-xs font-bold text-slate-400"
                  >
                    תמונה
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Contact Card */}
          <aside className="h-fit rounded-4xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-5">
            <h2 className="text-lg font-black text-[#00132F]">יצירת קשר</h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              צרו קשר עם בעל המקצוע לקבלת הצעת מחיר או פרטים נוספים.
            </p>

            <div className="mt-5 space-y-3">
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-bold text-[#00132F] transition hover:border-[#FEBC37]"
              >
                <FaPhoneAlt className="text-[#FEBC37]" />
                {profile.phone}
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-bold text-[#00132F] transition hover:border-[#FEBC37]"
              >
                <FaEnvelope className="text-[#FEBC37]" />
                {profile.email}
              </a>

              <a
                href={`https://wa.me/972501234567`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#00132F] px-4 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <FaWhatsapp className="text-lg text-[#FEBC37]" />
                שליחת הודעה בוואטסאפ
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-5 border-t border-slate-100 pt-5">
              <h3 className="text-sm font-black text-[#00132F]">
                עבודות ופרופילים נוספים
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                ניתן לצפות בעבודות קודמות דרך הרשתות החברתיות של בעל המקצוע.
              </p>

              <div className="mt-3 grid grid-cols-2 gap-3">
                {profile.instagram && (
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-bold text-[#00132F] transition hover:border-[#FEBC37] hover:bg-[#FEBC37]/10"
                  >
                    <FaInstagram className="text-lg text-pink-500" />
                    אינסטגרם
                  </a>
                )}

                {profile.facebook && (
                  <a
                    href={profile.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-bold text-[#00132F] transition hover:border-[#FEBC37] hover:bg-[#FEBC37]/10"
                  >
                    <FaFacebook  className="text-lg text-blue-400" />
                    פייסבוק
                  </a>
                )}
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-[#FEBC37]/12 p-4">
              <p className="text-sm font-bold text-[#00132F]">
                טיפ קטן לפני שסוגרים עבודה
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                מומלץ לבקש הצעת מחיר ברורה, זמן ביצוע, ותמונות של עבודות קודמות.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default ProfessionalProfile;
