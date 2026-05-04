"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiHome,
  FiBriefcase,
  FiLogIn,
  FiSearch,
  FiUser,
  FiLogOut,
  FiGrid,
} from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaTools, FaPlusCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";

type MobileNavProps = {
  onClose: () => void;
  sidebarOpen: boolean;
};

const MobileNav = ({ onClose, sidebarOpen }: MobileNavProps) => {
  const { user, auth, getProfile } = useAuthStore();

  // later this should come from your auth state/context
  // const user = {
  //   isLoggedIn: false,
  //   name: "יוסף כהן",
  //   role: "professional", // "customer" | "professional"
  // };

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const isProfessional = user?.role === "professional";

  const dashboardPath = isProfessional
    ? "/dashboard/professional"
    : "/dashboard/customer";

  const roleLabel = isProfessional ? "בעל מקצוע" : "לקוח";

  const nav = [
    {
      id: 1,
      label: "דף הבית",
      icon: <FiHome />,
      path: "/",
    },
    {
      id: 2,
      label: "עבודות פתוחות",
      icon: <FiBriefcase />,
      path: "/jobs",
    },
    {
      id: 3,
      label: "בעלי מקצוע",
      icon: <FiSearch />,
      path: "/professionals",
    },
    // {
    //   id: 4,
    //   label: "הזדמנויות עבודה",
    //   icon: <FaTools />,
    //   path: "/job-openings",
    // },
  ];

  useEffect(() => {
    if (sidebarOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [sidebarOpen]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#00132F]/50 p-3 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.aside
        onClick={(e) => e.stopPropagation()}
        initial={{ x: "100%", scale: 0.96 }}
        animate={{ x: 0, scale: 1 }}
        exit={{ x: "100%", scale: 0.96 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="mr-auto flex h-full w-[88%] max-w-sm flex-col overflow-hidden rounded-4xl bg-slate-50 shadow-2xl"
      >
        {/* Top */}
        <div className="relative overflow-hidden bg-[#00132F] p-5 text-white">
          <div className="absolute -left-10 -top-10 size-32 rounded-full bg-[#FEBC37]/25 blur-2xl" />
          <div className="absolute -right-12 bottom-0 size-36 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex items-start justify-between">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FEBC37] hover:text-[#00132F]"
            >
              <IoClose size={24} />
            </button>

            <div>
              <h2 className="text-left text-2xl font-black">Tikon</h2>
              <p className="mt-1 text-sm text-white/65">
                מצאו שירותים ועבודות באזור שלכם
              </p>
            </div>
          </div>

          {/* Main Actions */}
          <div className="relative mt-6 grid grid-cols-2 gap-3">
            <Link
              href="/post-job"
              onClick={onClose}
              className="rounded-3xl bg-[#FEBC37] p-4 text-[#00132F] transition hover:bg-[#f3ad18]"
            >
              <FaPlusCircle className="mb-3 text-xl" />
              <p className="text-sm font-black">פרסום בקשה</p>
              <p className="mt-1 text-xs font-medium text-[#00132F]/70">
                צריכים בעל מקצוע?
              </p>
            </Link>

            <Link
              href="/join-pro"
              onClick={onClose}
              className="rounded-3xl bg-white/10 p-4 text-white backdrop-blur transition hover:bg-white/15"
            >
              <FaTools className="mb-3 text-xl text-[#FEBC37]" />
              <p className="text-sm font-black">קבלת עבודות</p>
              <p className="mt-1 text-xs font-medium text-white/60">
                הצטרפו כבעל מקצוע
              </p>
            </Link>
          </div>
        </div>

        {/* Links */}
        <nav className="flex-1 space-y-2 overflow-y-auto p-4">
          <p className="px-2 pb-1 text-xs font-bold text-slate-400">
            ניווט מהיר
          </p>

          {nav.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              <Link
                href={item.path}
                onClick={onClose}
                className="flex items-center justify-between rounded-3xl bg-white p-4 shadow-sm transition hover:bg-[#FEBC37]/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-100 text-lg text-[#00132F]">
                    {item.icon}
                  </div>

                  <span className="text-sm font-bold text-[#00132F]">
                    {item.label}
                  </span>
                </div>

                <span className="text-xs text-slate-300">←</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Bottom Account Area */}
        <div className="border-t border-slate-200 bg-white p-4">
          {auth ? (
            <div className="space-y-3">
              {/* Profile Preview */}
              <Link
                href={dashboardPath}
                onClick={onClose}
                className="flex items-center gap-3 rounded-3xl bg-slate-50 p-3 transition hover:bg-[#FEBC37]/10"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#00132F] text-white">
                  <FiUser size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-black text-[#00132F]">
                    שלום, {user?.name}
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-slate-500">
                    {roleLabel}
                  </p>
                </div>
              </Link>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  href={dashboardPath}
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#00132F] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#FEBC37] hover:text-[#00132F]"
                >
                  <FiGrid />
                  דשבורד
                </Link>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-[#00132F] transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  <FiLogOut />
                  יציאה
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/login"
                onClick={onClose}
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-[#00132F] transition hover:border-[#FEBC37] hover:bg-[#FEBC37]/10"
              >
                <FiLogIn />
                התחברות
              </Link>

              <Link
                href="/register"
                onClick={onClose}
                className="rounded-2xl bg-[#00132F] px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#FEBC37] hover:text-[#00132F]"
              >
                הרשמה
              </Link>
            </div>
          )}
        </div>
      </motion.aside>
    </motion.div>
  );
};

export default MobileNav;
