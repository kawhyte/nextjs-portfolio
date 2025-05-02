import React from "react";
import { twMerge } from "tailwind-merge";

const Card = ({className, children}) => {
	return (
		<div className={twMerge("bg-yellow-50/50  max-w-6xl mx-3 md:mx-4 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0  after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-gray-700/20 after:pointer-events-none  ", className)}>
			{children}
		</div>
	);
};


export default Card