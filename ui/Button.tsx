/* eslint-disable @next/next/no-html-link-for-pages */

import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
	text: string;
	link: string;
	icon?: React.ReactNode;
	className?: string;
	children?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
	text,
	link,
	icon,
	className: propClassName,
	children,
}) => {
	const initialButtonClasses =
		"bg-gray-900 border-gray-300/70 border border-gray-800 hover:text-gray-900 text-gray-200 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8";

	return (
		<Link href={link} passHref legacyBehavior>
			<button
				className={twMerge(
					"relative group overflow-hidden",
					initialButtonClasses, // Your specified initial classes
					propClassName // Allow for additional classes to be passed
				)}>
				<span
					className={twMerge(
						"absolute inset-0",

						"bg-gradient-to-r from-orange-200 via-orange-300 to-orange-300",

						"-translate-x-full",

						"group-hover:translate-x-0",

						"transition-transform duration-500 ease-in-out"
					)}
					aria-hidden='true'
				/>

				<span className='relative z-[1]'>{text}</span>
				<span className='relative z-[1]'>{icon}</span>
			</button>
		</Link>
	);
};

export default Button;
