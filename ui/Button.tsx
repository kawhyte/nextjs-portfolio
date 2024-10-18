/* eslint-disable @next/next/no-html-link-for-pages */

import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
// import { ReactNode } from 'react'

// type ButtonProps = {
//   children?: ReactNode
//   link: string
//   text?: string
// }
export default function Button({ text, link, icon, className, children }) {
	//if (!preview) return null

//   console.log("***link****", link)

	return (
		<Link href={link} passHref legacyBehavior>
			<button
				className={twMerge(
					"bg-gray-900 border-gray-300/70 border border-gray-800  hover:text-orange-400 text-gray-200 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8",
					className
				)}>
				{/* <span> {children} </span> */}

				<span> {text}</span>
				<span> {icon}</span>
				
			</button>
		</Link>
	);
}
