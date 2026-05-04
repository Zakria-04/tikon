"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/assets/images/demo-cutomer-job-post.webp";
import img2 from "@/assets/images/demo-cutomer-job-post.webp";
import img3 from "@/assets/images/demo-cutomer-job-post.webp";
import img4 from "@/assets/images/demo-cutomer-job-post.webp";
import {
  FaMapMarkerAlt,
  FaClock,
  FaShekelSign,
  FaBriefcase,
  FaCalendarAlt,
  FaArrowRight,
  FaPaperPlane,
  FaWhatsapp,
  FaPhoneAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const JobDetails = () => {
  const router = useRouter();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const jobDetails = {
    _id: "1",
    title: "צביעת חדר שינה",
    category: "צביעה",
    city: "חיפה",
    budget: "₪500",
    postedAt: "לפני שעה",
    description:
      "מחפש מישהו לצביעת חדר שינה בגודל בינוני. הקירות במצב טוב, צריך צבע לבן וניקיון בסיום.",
    urgency: "השבוע",
    requests: 3,
    phone: "050-123-4567",
    whatsapp: "972501234567",
    images: [img1, img2, img3, img4],
  };

  const openGallery = (index = 0) => {
    setSelectedImageIndex(index);
    setGalleryOpen(true);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === jobDetails.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? jobDetails.images.length - 1 : prev - 1,
    );
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-4 py-5" dir="rtl">
      <div className="mx-auto max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#00132F] shadow-sm transition hover:bg-slate-100"
        >
          <FaArrowRight className="text-xs text-[#FEBC37]" />
          חזרה לעבודות
        </button>

        {/* Main Card */}
        <section className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
          {/* Image Section */}
          {jobDetails.images.length > 0 ? (
            <div className="relative h-[260px] w-full bg-slate-100 sm:h-[360px]">
              <Image
                src={jobDetails.images[0]}
                alt="תמונה ראשית של העבודה"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              {/* Image Counter / Open Gallery */}
              <button
                onClick={() => openGallery(0)}
                className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-[#00132F] shadow-md transition hover:scale-[1.02]"
              >
                <FaImages className="text-[#FEBC37]" />+
                {jobDetails.images.length} תמונות
              </button>
            </div>
          ) : (
            <div className="flex h-64 items-center justify-center bg-slate-100 text-sm font-bold text-slate-400">
              אין תמונות לעבודה זו
            </div>
          )}

          {/* Content */}
          <div className="p-5 sm:p-6">
            <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#FEBC37]/15 px-3 py-1 text-xs font-black text-[#00132F]">
                    {jobDetails.category}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                    פורסם {jobDetails.postedAt}
                  </span>
                </div>

                <h1 className="text-2xl font-black leading-tight text-[#00132F]">
                  {jobDetails.title}
                </h1>

                <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-[#FEBC37]" />
                    {jobDetails.city}
                  </span>

                  <span className="flex items-center gap-1">
                    <FaClock className="text-[#FEBC37]" />
                    {jobDetails.urgency}
                  </span>

                  <span className="flex items-center gap-1">
                    <FaBriefcase className="text-[#FEBC37]" />
                    {jobDetails.requests} פניות
                  </span>
                </div>
              </div>

              <div className="rounded-3xl bg-[#00132F] px-5 py-4 text-white lg:min-w-36 lg:text-center">
                <p className="text-xs text-white/70">תקציב משוער</p>
                <p className="mt-1 text-2xl font-black">{jobDetails.budget}</p>
              </div>
            </div>

            {/* Bottom Layout */}
            <div className="grid gap-5 pt-5 lg:grid-cols-[1fr_300px]">
              {/* Details */}
              <div>
                <h2 className="text-lg font-black text-[#00132F]">
                  פרטי העבודה
                </h2>

                <p className="mt-3 leading-8 text-slate-600">
                  {jobDetails.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-3xl bg-slate-50 p-4">
                    <FaCalendarAlt className="mb-2 text-[#FEBC37]" />
                    <p className="text-xs text-slate-500">זמן ביצוע</p>
                    <p className="mt-1 font-black text-[#00132F]">
                      {jobDetails.urgency}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-slate-50 p-4">
                    <FaImages className="mb-2 text-[#FEBC37]" />
                    <p className="text-xs text-slate-500">תמונות</p>
                    <p className="mt-1 font-black text-[#00132F]">
                      {jobDetails.images.length} תמונות
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="h-fit rounded-[1.75rem] border border-slate-100 bg-slate-50 p-4">
                <h3 className="text-base font-black text-[#00132F]">
                  יצירת קשר והצעה
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  אפשר לשלוח הצעה ללקוח או ליצור קשר ישיר אם הוא הוסיף פרטי קשר.
                </p>

                {/* <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FEBC37] px-4 py-3 text-sm font-black text-[#00132F] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <FaPaperPlane />
                  שליחת הצעה
                </button> */}

                <div className="mt-4 space-y-3">
                  {jobDetails.phone && (
                    <a
                      href={`tel:${jobDetails.phone}`}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FEBC37] px-4 py-3 text-sm font-black text-[#00132F] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <FaPhoneAlt className="text-[#00132F]" />
                      התקשר ללקוח
                    </a>
                  )}

                  {jobDetails.whatsapp && (
                    <a
                      href={`https://wa.me/${jobDetails.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00132F] px-4 py-3 text-sm font-bold text-white transition hover:opacity-95"
                    >
                      <FaWhatsapp className="text-emerald-500" />
                      שליחת הודעה בוואטסאפ
                    </a>
                  )}
                </div>

                <div className="mt-4 rounded-2xl bg-white p-3">
                  <p className="text-xs font-bold text-[#00132F]">
                    לפני יצירת קשר
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    מומלץ לעבור על התמונות, להבין את היקף העבודה, ורק אז לשלוח
                    הצעה או לפנות ללקוח.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>

      {/* Gallery Modal */}
      {galleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 px-4 py-6">
          <div className="mx-auto flex h-full max-w-6xl flex-col">
            {/* Top Bar */}
            <div className="mb-4 flex items-center justify-between text-white">
              <p className="text-sm font-bold">
                תמונה {selectedImageIndex + 1} מתוך {jobDetails.images.length}
              </p>

              <button
                onClick={() => setGalleryOpen(false)}
                className="flex size-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <FaTimes />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative flex-1 overflow-hidden rounded-3xl bg-black">
              <Image
                src={jobDetails.images[selectedImageIndex]}
                alt={`תמונה ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
              />

              {jobDetails.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25"
                  >
                    <FaChevronRight />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25"
                  >
                    <FaChevronLeft />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {jobDetails.images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {jobDetails.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border-2 transition ${
                      selectedImageIndex === index
                        ? "border-[#FEBC37]"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`תמונה ממוזערת ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default JobDetails;
