// components/ui/AnimatedImage.tsx
"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

// Extend the standard Next.js ImageProps to accept a custom className
interface AnimatedImageProps extends Omit<ImageProps, "className"> {
	className?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
	src,
	alt,
	width,
	height,
	className,
	...props
}) => {
	const [isLoading, setIsLoading] = useState(true);

	if (!src) {
		// Handle case where src might be missing
		return <div className={twMerge("bg-gray-200", className)}></div>;
	}

	// Generate a tiny, low-quality placeholder for the blur effect
	const blurDataURL =
		typeof src === "string"
			? `${src.split("?")[0]}?w=10&q=5&fm=webp`
			: undefined;

	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			placeholder={blurDataURL ? "blur" : "empty"}
			blurDataURL={blurDataURL}
			className={twMerge(
				`duration-700 ease-in-out`,
				isLoading ? "blur-lg scale-105" : "blur-0 scale-100",
				className // Merge with any custom classes passed in
			)}
			onLoad={() => setIsLoading(false)}
			{...props} // Pass down any other ImageProps
		/>
	);
};

export default AnimatedImage;
