"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiUser, FiGrid, FiEdit3, FiMail } from "react-icons/fi";
import { Button } from "@/components/ui/button"; // --- NEW: Import Shadcn Button ---

// --- UPDATED: Add a Contact link ---
const navLinks = [
  { title: "Home", href: "/", icon: <FiHome /> },
  { title: "About", href: "/about", icon: <FiUser /> },
  { title: "Projects", href: "/projects", icon: <FiGrid /> },
  { title: "Blog", href: "/blog", icon: <FiEdit3 /> },
];

// --- Reusable Hook for Clicking Outside (Unchanged) ---
const useClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
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

  // --- Styling Constants (Slightly updated) ---
  const navClasses =
    "flex items-center justify-between bg-zinc-800/80 backdrop-blur-md border border-zinc-700/80 rounded-full px-4 py-2 shadow-lg shadow-black/20";
  const linkClasses = "relative flex items-center gap-x-2 text-gray-300 hover:text-white transition-colors duration-300 px-3 py-1.5";
  const mobileButtonClasses =
    "p-2 text-gray-200 rounded-full hover:bg-white/10 transition-colors duration-300";

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center">
      <div ref={navRef} className="relative w-full max-w-xs md:max-w-3xl mx-4">
        <nav className={navClasses}>
          <Link href="/" className="font-bold text-white text-xl tracking-wider">
            KW.
          </Link>

          {/* --- UPDATED: Desktop Nav with Sliding Pill --- */}
          <ul className="hidden md:flex items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.li key={link.href} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                  <Link href={link.href} className={`${linkClasses} ${isActive ? "text-white" : ""}`}>
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 bg-zinc-700 rounded-full"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-x-2">
                      {React.cloneElement(link.icon, { className: "h-4 w-4" })}
                      {link.title}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* --- NEW: Desktop CTA Button --- */}
          <div className="hidden md:block">
              <Button asChild variant="ghost" size="sm">
                  <Link href="/contact">
                      <FiMail className="mr-2 h-4 w-4"/>
                      Contact
                  </Link>
              </Button>
          </div>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={mobileButtonClasses}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
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
              <div className="bg-zinc-900/90 backdrop-blur-lg border border-white/10 rounded-2xl p-2">
                <ul className="flex flex-col space-y-1">
                  {[...navLinks, { title: "Contact", href: "/contact", icon: <FiMail /> }].map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.li
                        key={link.href}
                        custom={i}
                        variants={menuLinkVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-x-3 w-full p-3 rounded-lg text-lg transition-colors ${
                            isActive
                              ? "bg-zinc-700 text-white font-semibold"
                              : "text-gray-300 hover:bg-zinc-800"
                          }`}
                        >
                          {React.cloneElement(link.icon, { className: "h-5 w-5" })}
                          <span>{link.title}</span>
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

// --- Animation Variants (Unchanged) ---
const menuVariants = { /* ... */ };
const menuLinkVariants = { /* ... */ };