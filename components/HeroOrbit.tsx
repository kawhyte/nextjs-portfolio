import React from "react";

import { twMerge } from "tailwind-merge";
import StarIcon from "/public/assets/icons/star.svg";

interface HeroOrbitProps {
	// Use React.ReactNode for children type safety
	children: React.ReactNode;
	size: number; // Use specific types instead of 'any' if possible
	rotation: number;
	orbitDuration: string;
	shouldSpin?: boolean; // Optional prop
	spinDuration?: string; // Use string if orbitDuration is string
	shouldOrbit?: boolean; // Optional prop
	// Add any other props the component uses
}

function HeroOrbit ({
	children,
	size,
	rotation,
	orbitDuration,
	shouldSpin = false,
	spinDuration,
	shouldOrbit = false,
} : HeroOrbitProps) {

	
	return (
		<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2    '>
			<div
				className={twMerge(shouldOrbit === true && "animate-spin")}
				style={{
					animationDuration: orbitDuration,
				}}>
				<div
					className=' flex  items-start justify-start  '
					style={{
						transform: `rotate(${rotation}deg)`,
						height: `${size}px`,
						width: `${size}px`,
					}}>
					<div
						className={twMerge(shouldSpin === true && "animate-spin")}
						style={{
							animationDuration: spinDuration,
						}}>
						<div
							className='inline-flex  '
							style={{
								transform: `rotate(${rotation * -1}deg)`,
							}}>
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


export default HeroOrbit;