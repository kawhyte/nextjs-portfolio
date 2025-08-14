"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Apple } from 'lucide-react';

// --- Reusable Button Component (Shadcn UI inspired) ---
const Button = React.forwardRef(({ className, variant, children, ...props }, ref) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-gray-800/80 text-white hover:bg-gray-700/80 border border-gray-700",
  };

  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;
  
  return (
    <motion.a
      ref={ref}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      {...props}
    >
      {children}
    </motion.a>
  );
});
Button.displayName = "Button";


// --- Animated SVG Background Component ---
const AnimatedBackground = () => {
  // Animation variants for the floating/rotating effect
  const floatVariant = (duration, delay = 0) => ({
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, -5, 0, 5, 0],
      rotate: [0, 2, 0, -2, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        width="2376"
        height="548"
        viewBox="0 0 2376 548"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Each 'g' tag is a motion component with the float animation */}
        <motion.g variants={floatVariant(10)}>
          <path d="M786.513 84.2656C869.041 86.7887 869.017 205.517 786.513 208.041C703.984 205.517 704.008 86.7887 786.513 84.2656Z" fill="#FDE68A" fillOpacity="0.1" />
        </motion.g>
        <motion.g variants={floatVariant(12, 1)}>
          <path d="M542.544 341.703C625.073 344.226 625.048 462.955 542.544 465.478C460.015 462.955 460.039 344.226 542.544 341.703Z" fill="#FDE68A" fillOpacity="0.1" />
        </motion.g>
        <motion.g variants={floatVariant(15, 2)}>
          <path d="M1787.04 298.479C1869.57 301.002 1869.55 419.73 1787.04 422.253C1704.52 419.73 1704.54 301.002 1787.04 298.479Z" fill="#FDE68A" fillOpacity="0.1" />
        </motion.g>
        <motion.g variants={floatVariant(13, 0.5)}>
          <path d="M1591.19 216.836C1673.72 219.359 1673.7 338.088 1591.19 340.611C1508.66 338.088 1508.69 219.359 1591.19 216.836Z" fill="#D1FAE5" fillOpacity="0.1" />
        </motion.g>
      </svg>
    </div>
  );
};


// --- Main Hero Section Component ---
export default function JoinSection() {
  const headline = "Your favorite crypto wallet.";
  const words = headline.split(" ");

  // Animation variants for the staggered text reveal
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: "100%",
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: "0%",
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="join" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black text-white py-20">
      <AnimatedBackground />
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          
          <motion.h1
            className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ perspective: 600 }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <span key={index} className="inline-block overflow-hidden pb-4">
                <motion.span
                  className="inline-block"
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
                {/* Add a non-breaking space after each word */}
                {index < words.length - 1 && '\u00A0'} 
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="max-w-md text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Explore Ethereum with the best wallet for iOS. Interacting with crypto has never been so simple.
          </motion.p>
          
          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button href="#" variant="primary" className="px-6 py-3 gap-2">
              <Apple className="h-5 w-5" />
              Download on iOS
            </Button>
            <Button href="#" variant="secondary" className="px-6 py-3 gap-2">
              <Play className="h-5 w-5" />
              Watch the Video
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
