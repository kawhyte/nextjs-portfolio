import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCsharp, SiJavascript } from "react-icons/si";
import { BiLogoGraphql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import SectionTitle from "./SectionTitle";

const imageSize = "h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-10 ";

const languages = [
	{
		name: "C#",
		logo: <SiCsharp className={imageSize} />,
	},
	{
		name: "HTML 5",
		logo: <FaHtml5 className={imageSize} />,
	},
	{
		name: "NodeJS",
		logo: <FaNodeJs className={imageSize} />,
	},
	// {
	// 	name: "Tailwind",
	// 	logo: <RiTailwindCssFill className='h-8 w-8' />,
	// },
	{
		name: "GraphQL",
		logo: <BiLogoGraphql className={imageSize} />,
	},
	{
		name: "NextJS",
		logo: <RiNextjsFill className={imageSize} />,
	},
	{
		name: "CSS",
		logo: <IoLogoCss3 className={imageSize} />,
	},
	{
		name: "JavaScript",
		logo: <SiJavascript className={imageSize} />,
	},
	{
		name: "React",
		logo: <FaReact className={imageSize} />,
	},
];

function TechStack() {


	return (
<div className=" pt-24 lg:pt-28">
		<SectionTitle sectionHeadtext={"Technology Stack"} description={"Here are a few of the technologies and tools I've been working with lately: "} header={"My Tech Stack"}/>
		<div className='flex flex-col justify-center items-center md:flex-row container mx-auto align-middle border-white rounded-2xl  w-full py-10  mb-36 '>
		
			<div class='h-[35px] my-3  bg-orange-500 w-[4px] hidden '></div>

			<div className='grid grid-cols-4 md:grid-cols-8 md:gap-x-10 gap-x-20  gap-y-10 md:gap-y-5  mx-6'>
				{languages.map((item) => (
					<div className='flex flex-col items-center'>
					<span>{item.logo} </span>	
						<p className=' text-gray-700 break-words text-nowrap text-sm font-Montserrat mt-2 md:text-base lg:text-lg'>
							{item.name}
						</p>
					</div>
				))}
			</div>
		</div> 
		
		</div>
	);
}

export default TechStack;
