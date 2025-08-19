"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiUser, FiGrid, FiEdit3, FiMail } from "react-icons/fi";
import { Button } from "@/components/ui/button";

// --- Data Configuration ---
const navLinks = [
  { title: "Home", href: "/", icon: FiHome },
  { title: "Projects", href: "/projects", icon: FiGrid },
  { title: "Blog", href: "/blog", icon: FiEdit3 },
  { title: "About", href: "/about", icon: FiUser },
];

// --- NEW: Animated Icon Component ---
// This component wraps the icon and handles its animation based on the active state.
const AnimatedIcon = ({ icon: Icon, isActive }) => {
    return (
        <motion.div
            animate={{
                scale: isActive ? [1, 1.25, 1] : 1,
                color: isActive ? "#FFFFFF" : "#a1a1aa", // text-white vs text-zinc-400
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 20 }}
        >
            <Icon className="h-4 w-4" />
        </motion.div>
    );
};


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

  const navClasses = "flex items-center justify-between bg-zinc-800/80 backdrop-blur-md border border-zinc-700/80 rounded-full px-4 py-2 shadow-lg shadow-black/20";
  const linkClasses = "relative flex items-center gap-x-2 text-gray-300 hover:text-white transition-colors duration-300 px-3 py-1.5";
  const mobileButtonClasses = "p-2 text-gray-200 rounded-full hover:bg-white/10 transition-colors duration-300";

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center">
      <div ref={navRef} className="relative w-full max-w-xs md:max-w-3xl mx-4">
        <nav className={navClasses}>
          <Link href="/" className="font-bold text-white text-xl tracking-wider">
            KW.
          </Link>

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
                      {/* --- UPDATED: Use the new AnimatedIcon component --- */}
                      <AnimatedIcon icon={link.icon} isActive={isActive} />
                      <span>{link.title}</span>
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>

             <div className="hidden md:block">
              <Button 
                asChild 
                variant="ghost" 
                size="sm" 
                className="text-gray-300 hover:bg-zinc-700 hover:text-white transition-colors"
              >
                  <a href="https://linkedin.com/in/kawhyte" target="_blank" rel="noopener noreferrer">
                      <FiMail className="mr-2 h-4 w-4"/>
                      Contact
                  </a>
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
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
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
                          <Icon className="h-5 w-5" />
                          <span>{link.title}</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                  <motion.li
                    key="contact-mobile"
                    custom={navLinks.length}
                    variants={menuLinkVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <a
                      href="https://linkedin.com/in/kawhyte"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-x-3 w-full p-3 rounded-lg text-lg transition-colors text-gray-300 hover:bg-zinc-800"
                    >
                      <FiMail className="h-5 w-5" />
                      <span>Contact</span>
                    </a>
                  </motion.li>
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
const menuVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
  exit: { opacity: 0, y: -10 },
};
const menuLinkVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};
