import Image from "next/image";
import logo from "@/assets/images/Group 14.png";
import { FaRegBell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Right: Notifications */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <FaRegBell className="size-5 text-gray-700" />

          {/* Notification dot */}
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-yellow-400 ring-2 ring-white animate-pulse" />
        </button>

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
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <RxHamburgerMenu className="size-6 text-gray-800" />
        </button>
      </div>
    </header>
  );
};

export default Header;
