import React from "react"; // Import React for React.ReactElement type
import { twMerge } from "tailwind-merge";
// Icons are imported in the parent component (AboutSection.tsx) and passed down
// No need to import them here unless this component becomes standalone with fixed items

// Define the structure for each item in the 'languages' array
interface ToolboxItem {
	title: string;
	icon: string | React.ReactElement; // Can be an emoji string or a JSX element/React component
}

// Define the props for the ToolBoxItems component
interface ToolBoxItemsProps {
	languages: ToolboxItem[]; // Array of items conforming to the ToolboxItem interface
	className?: string; // Optional className for the outer div
	itemsWrapperClass?: string; // Optional className for the inner div containing the items
}

const ToolBoxItems = ({
	languages,
	className,
	itemsWrapperClass,
}: ToolBoxItemsProps) => {
	return (
		<div
			className={twMerge(
				"flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
				className // Apply optional className here
			)}>
			<div
				className={twMerge(
					"flex flex-none py-0.5 gap-6 pr-6 animate-marquee-infinite", // Added base animation class
					itemsWrapperClass // Apply optional itemsWrapperClass here
				)}>
				{/* Map over the languages array twice to create a seamless loop effect */}
				{[...languages, ...languages].map((item, index) => (
					<div
						// Use a combination of title and index for a more unique key in case of duplicates
						key={`${item.title}-${index}`}
						className='inline-flex items-center align-middle justify-between gap-4 py-2 px-3 outline outline-2 outline-gray-500 rounded-lg bg-white/50'>
						{/* SVG definitions for gradient - this is fine */}
						<svg className='size-0 absolute'>
							<defs>
								<linearGradient id='icon-gradient'>
									<stop offset='0%' stopColor='rgb(134 239 172)' />
									<stop offset='100%' stopColor='rgb(187 247 208)' />
								</linearGradient>
							</defs>
						</svg>

						{/* Render the icon - it could be a string (emoji) or a React element */}
						<span className='text-3xl'>{item.icon}</span>
						<span className='font-semibold text-base'>{item.title}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ToolBoxItems;
