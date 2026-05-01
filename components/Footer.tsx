import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTools,
} from "react-icons/fa";

const Footer = () => {
  const links = [
    { label: "איך זה עובד", href: "#" },
    { label: "קטגוריות", href: "#" },
    { label: "בעלי מקצוע", href: "#" },
    { label: "פרסום בקשה", href: "#" },
  ];

  const categories = [
    "חשמלאי",
    "אינסטלטור",
    "שיפוצים",
    "צבע",
    "מיזוג אוויר",
    "ניקיון",
  ];

  return (
    <footer className="bg-[#00132F] px-5 pt-12 text-white" dir="rtl">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-[#FEBC37] text-[#00132F]">
                <FaTools className="text-lg" />
              </div>

              <div>
                <h2 className="text-2xl font-black">Tikon</h2>
                <p className="text-sm text-white/60">תיקון שירותי בית</p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/70">
              הדרך הקלה למצוא בעלי מקצוע אמינים באזור שלכם, להשוות שירותים,
              ולפרסם בקשות עבודה בצורה פשוטה ומהירה.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FEBC37] hover:text-[#00132F]"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FEBC37] hover:text-[#00132F]"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FEBC37] hover:text-[#00132F]"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">ניווט מהיר</h3>

            <ul className="space-y-3 text-sm text-white/70">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition hover:text-[#FEBC37]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg font-bold">שירותים פופולריים</h3>

            <ul className="space-y-3 text-sm text-white/70">
              {categories.map((category) => (
                <li key={category}>
                  <a href="#" className="transition hover:text-[#FEBC37]">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">צור קשר</h3>

            <div className="space-y-3 text-sm text-white/70">
              <a
                href="mailto:support@tikon.co.il"
                className="flex items-center gap-2 transition hover:text-[#FEBC37]"
              >
                <FaEnvelope className="text-[#FEBC37]" />
                support@tikon.co.il
              </a>

              <a
                href="tel:+972500000000"
                className="flex items-center gap-2 transition hover:text-[#FEBC37]"
              >
                <FaPhoneAlt className="text-[#FEBC37]" />
                050-000-0000
              </a>

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#FEBC37]" />
                ישראל
              </p>
            </div>

            <div className="mt-5 rounded-3xl bg-white/10 p-4">
              <p className="text-sm font-bold text-white">
                בעל מקצוע?
              </p>

              <p className="mt-1 text-sm leading-6 text-white/65">
                הצטרף ל־Tikon ופתח פרופיל בחינם בתקופת ההשקה.
              </p>

              <button className="mt-3 w-full rounded-2xl bg-[#FEBC37] px-4 py-2.5 text-sm font-bold text-[#00132F] transition hover:bg-[#f3ad18]">
                הצטרפות כבעל מקצוע
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 py-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Tikon. כל הזכויות שמורות.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-[#FEBC37]">
              תנאי שימוש
            </a>

            <a href="#" className="transition hover:text-[#FEBC37]">
              מדיניות פרטיות
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;