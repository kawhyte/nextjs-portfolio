// components/HobbiesCloud.tsx
"use client";

import React, { useRef } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';

// --- Data ---
const hobbies = [
    { title: "Weightlifting", emoji: "🏋🏾" },
    { title: "Electric Vehicles", emoji: "⚡️" },
    { title: "Retro Games", emoji: "🎮" },
    { title: "Reading", emoji: "📙" },
    { title: "Astronomy", emoji: "🪐" },
    { title: "Traveling", emoji: "✈️" },
    { title: "Watching Bad Movies", emoji: "🍿" },
    { title: "Music", emoji: "🎵" },
    { title: "Sneakers", emoji: "👟" },
];

// --- Hobby Bubble Component ---
const HobbyBubble = ({ title, emoji, mouseX, mouseY }) => {
    // Each bubble gets a random size and animation duration for a more organic look
    const size = React.useMemo(() => Math.random() * 60 + 80, []);
    const duration = React.useMemo(() => Math.random() * 5 + 5, []);

    // Parallax effect: move the bubble based on mouse position
    const transformedX = useTransform(mouseX, (pos) => pos / 20);
    const transformedY = useTransform(mouseY, (pos) => pos / 20);

    return (
        <motion.div
            className="absolute flex items-center justify-center"
            style={{
                width: size,
                height: size,
                x: transformedX,
                y: transformedY,
            }}
            // Gentle floating animation
            animate={{ y: [0, -10, 0] }}
            transition={{
                duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
            }}
        >
            <div className="flex flex-col items-center text-center">
                <span className="text-3xl">{emoji}</span>
                <span className="text-xs font-medium text-gray-800 mt-1">{title}</span>
            </div>
        </motion.div>
    );
};


// --- Main Hobbies Cloud Component ---
export const HobbiesCloud = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Track mouse position relative to the container
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const { left, top } = containerRef.current.getBoundingClientRect();
        mouseX.set(event.clientX - left - containerRef.current.offsetWidth / 2);
        mouseY.set(event.clientY - top - containerRef.current.offsetHeight / 2);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex flex-wrap items-center justify-center gap-4 p-8 w-full h-[400px]"
        >
            {hobbies.map((hobby) => (
                <HobbyBubble key={hobby.title} {...hobby} mouseX={mouseX} mouseY={mouseY} />
            ))}
        </motion.div>
    );
};
