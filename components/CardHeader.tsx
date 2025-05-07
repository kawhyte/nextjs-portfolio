import React from "react"; // Import React for FC type
import { twMerge } from "tailwind-merge";
import { Zap } from 'lucide-react';
// Define the interface for the component's props
interface CardHeaderProps {
	title: string; // Title is expected to be a string
	description: string; // Description is expected to be a string
	className?: string; // className is optional
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, description, className }) => {
	return (
		<div className={twMerge("flex flex-col p-6", className)}> {/* Apply className safely */}
			<div>
				<div className='inline-flex items-center gap-2'>
				
					{/* <StarIcon className='size-9 text-green-300 ' /> */}
					<Zap className='size-7 text-green-300 mr-2 ' />

					<h3 className='font-serif text-3xl '>{title}</h3>
				</div>
				<p className='text-sm lg:text-base max-w-base text-gray-500/90 mt-2'>{description}</p>
			</div>
		</div>
	);
};

export default CardHeader;
