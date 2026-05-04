"use client";

import Image from "next/image";
import logo from "@/assets/images/Group 14.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/store/authStore";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user, auth, getProfile } = useAuthStore();

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <header className="w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Right: User / Login state */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex max-w-32.5 items-center gap-2 rounded-full bg-gray-50 px-2.5 py-2 transition hover:bg-gray-100"
        >
          {auth && user ? (
            <>
              {user.profilePicture ? (
                <Image
                  src={user.profilePicture}
                  alt={user.name}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00132F] text-xs font-bold text-white">
                  {user.name?.charAt(0)}
                </div>
              )}

              <span className="truncate text-sm font-bold text-[#00132F]">
                {user.name}
              </span>
            </>
          ) : (
            <>
              <FaUserCircle className="size-6 text-gray-700" />
              <span className="text-sm font-bold text-[#00132F]">התחברות</span>
            </>
          )}
        </button>
        <div className="flex items-center gap-5">
          {/* Center: Logo */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Tikon Logo"
              width={75}
              height={30}
              priority
              className="object-contain"
            />
          </div>
          {/* Left: Menu */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-full p-2 transition hover:bg-gray-100"
            aria-label="Open menu"
          >
            <RxHamburgerMenu className="size-6 text-gray-800" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {sidebarOpen && (
          <MobileNav
            onClose={() => setSidebarOpen(false)}
            sidebarOpen={sidebarOpen}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
