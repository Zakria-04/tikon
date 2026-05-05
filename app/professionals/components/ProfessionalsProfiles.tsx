import Image from "next/image";
import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import profile from "@/assets/images/profile.png";
import { useRouter } from "next/navigation";

interface ProfessionalsProfilesProps {
  filteredProfiles: {
    _id: string;
    name: string;
    category: string;
    categoryLabel: string;
    city: string;
    region: string;
    description: string;
    experience: number;
  }[];
}

const ProfessionalsProfiles = ({
  filteredProfiles,
}: ProfessionalsProfilesProps) => {
  const router = useRouter();
  const navigateToProfessionalsProfile = (id: string) => {
    router.push(`/professionals/${id}`);
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProfiles.map((pro, index) => (
        <article
          key={`${pro.name}-${index}`}
          className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#FEBC37]/50 hover:shadow-xl"
        >
          <div className="flex items-start gap-4">
            <div className="relative size-20 shrink-0 overflow-hidden rounded-full border-4 border-gray-100 bg-slate-100 shadow-sm">
              <Image
                src={profile}
                alt={`${pro.name} profile`}
                fill
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#00132F]">
                      {pro.name}
                    </h3>
                    <MdVerified className="text-[#2FA4D7] size-4.5 mt-0.5" />
                  </div>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    {pro.categoryLabel}
                  </p>
                </div>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-[#FEBC37]" />
                  {pro.city}
                </span>
                <span className="flex items-center gap-1">
                  <FaBriefcase className="text-[#FEBC37]" />
                  {pro.experience}+ שנות ניסיון
                </span>
              </div>

              <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                {pro.description}
              </p>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={() => navigateToProfessionalsProfile(pro._id)}
              className="flex-1 rounded-2xl bg-[#00132F] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#FEBC37] hover:text-[#00132F]"
            >
              צפייה בפרופיל
            </button>
            <button
              aria-label={`צור קשר עם ${pro.name}`}
              className="flex size-12 items-center justify-center rounded-2xl border border-slate-200 text-[#00132F] transition hover:border-[#FEBC37] hover:bg-[#FEBC37]/10"
            >
              <FaPhoneAlt className="text-sm" />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProfessionalsProfiles;
