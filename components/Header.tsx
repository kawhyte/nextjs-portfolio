"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiUser, FiGrid, FiEdit3 } from "react-icons/fi";

// --- Configuration ---
const navLinks = [
  { title: "Home", href: "/", icon: <FiHome /> },
  { title: "About", href: "/about", icon: <FiUser /> },
  { title: "Projects", href: "/projects", icon: <FiGrid /> },
  { title: "Blog", href: "/blog", icon: <FiEdit3 /> },
];

// --- Reusable Hook for Clicking Outside ---
const useClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

// --- Main Navbar Component ---
export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const navRef = React.useRef(null);

  useClickOutside(navRef, () => setIsOpen(false));

  // --- Styling Constants ---
  const navClasses =
    "flex items-center justify-between bg-zinc-800/80 backdrop-blur-md border-b border-zinc-700/80 rounded-full px-6 py-2.5 shadow-lg shadow-black/20";
  const linkClasses = "flex items-center gap-x-2 text-gray-300 hover:text-white transition-colors duration-300";
  const activeLinkClasses = "text-white font-semibold";
  const mobileButtonClasses =
    "p-2 text-gray-200 rounded-full hover:bg-white/10 transition-colors duration-300";

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center">
      <div ref={navRef} className="relative w-full max-w-sm md:max-w-2xl mx-4">
        <nav className={navClasses}>
          <Link href="/" className="font-bold text-white text-xl tracking-wider">
            KW.
          </Link>

          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                /* 1. Add motion props to desktop link item */
                <motion.li
                  key={link.href}
                  whileHover={{ y: -3, transition: { type: "spring", stiffness: 300 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={link.href} className={`${linkClasses} ${isActive ? activeLinkClasses : ""}`}>
                    {React.cloneElement(link.icon, {
                      className: "h-5 w-5",
                    })}
                    <span>{link.title}</span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={mobileButtonClasses}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </motion.button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute top-full mt-2 left-0 right-0 rounded-2xl shadow-xl origin-top md:hidden"
            >
              <div className="bg-zinc-900/90 backdrop-blur-lg border border-white/10 rounded-2xl">
                <ul className="flex flex-col p-4 space-y-2">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      /* 2. Add motion props to mobile link item */
                      <motion.li
                        key={link.href}
                        custom={i}
                        variants={menuLinkVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        whileHover={{
                          scale: 1.03,
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="rounded-lg" // Add rounding for the hover background
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block w-full p-3 ${
                            isActive ? activeLinkClasses : ""
                          }`}
                        >
                          <div className={`${linkClasses} text-lg`}>
                            {React.cloneElement(link.icon, {
                              className: "h-5 w-5",
                            })}
                            <span>{link.title}</span>
                          </div>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

// --- Animation Variants (unchanged) ---
const menuVariants = {
  initial: { opacity: 0, y: -10, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2, ease: "easeOut" } },
};
const menuLinkVariants = {
  initial: { opacity: 0, y: 15 },
  animate: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, ease: "easeOut", duration: 0.3 } }),
  exit: { opacity: 0, transition: { duration: 0.15, ease: "easeIn" } },
};