import React from "react";
// Removed unused icon imports as they seem to come from techIcons now
// import { FaHtml5 } from "react-icons/fa6";
// import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
// import { FaNodeJs, FaReact } from "react-icons/fa";
// import { SiCsharp, SiJavascript } from "react-icons/si";
// import { BiLogoGraphql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io"; // Keep if used as fallback
import SectionTitle from "./SectionTitle";
import techIcons from "../util/techIcons"; // Assuming techIcons has a structure like: { [key: string]: { name: string; logo: React.ReactElement } }

const imageSize = "h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-10 ";

// Define the expected structure for the props
interface TechStackProps {
	languages: string[]; // Expecting an array of keys for techIcons
	sectionHeadtext: string;
	description: string;
	header: string;
}

// Define the expected structure of the techIcons object (optional but good practice)
// You might want to move this to where techIcons is defined or a shared types file
interface TechIconData {
    name: string;
    logo: React.ReactElement;
}

interface TechIconsMap {
    [key: string]: TechIconData | undefined; // Use undefined to reflect potential missing keys
}


const TechStack = ({languages, sectionHeadtext, description, header}:TechStackProps) => {
	// Cast techIcons to the defined type for better type checking within the component
	const typedTechIcons = techIcons as TechIconsMap;

	return (
		<div className=" pt-24 lg:pt-28">
			{/* Assuming SectionTitle props are correctly typed */}
			<SectionTitle sectionHeadtext={sectionHeadtext} description={description} header={header}/>
			<div className='flex flex-col justify-center items-center md:flex-row container mx-auto align-middle border-white rounded-2xl  w-full py-10  mb-36 '>

				<div className='h-[35px] my-3  bg-orange-500 w-[4px] hidden '></div> {/* This div seems unused based on 'hidden' class */}

				{/* Consider using grid for better layout control instead of flex-wrap */}
				<div className='flex align-middle items-center justify-center gap-x-3 md:gap-x-11 gap-y-8 flex-wrap border'>
					{languages.map((itemKey, index) => {
						const techData = typedTechIcons[itemKey]; // Get the data for the current key
						const key = techData?.name || `${itemKey}-${index}`; // Use name or key+index for React key
						const logo = techData?.logo || <IoLogoCss3 className={imageSize} />; // Get logo or fallback
						const name = techData?.name || itemKey; // Get name or use the key itself as fallback

						return (
							<div key={key} className='flex flex-col items-center align-middle w-20'> {/* Increased width slightly */}
								{/* Render the logo */}
								<span className="h-9 flex items-center justify-center">{logo}</span>
								{/* Render the name */}
								<p className='text-center text-gray-700 break-words text-sm font-Montserrat mt-2 md:text-base lg:text-lg'>
									{name}
								</p>
							</div>
						);
					})}
				</div>
			</div>

		</div>
	);
}

export default TechStack;
