import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCsharp,SiJavascript } from "react-icons/si";
import { BiLogoGraphql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";




const languages = [
  {
    name: "C#",
    logo: <SiCsharp className='h-8 w-8' />,
  },
	{
		name: "HTML 5",
		logo: <FaHtml5 className='h-8 w-8' />,
	},
	{
		name: "NodeJS",
		logo: <FaNodeJs className='h-8 w-8' />,
	},
	// {
	// 	name: "Tailwind",
	// 	logo: <RiTailwindCssFill className='h-8 w-8' />,
	// },
	// {
	// 	name: "GraphQL",
	// 	logo: <BiLogoGraphql className='h-8 w-8' />,
	// },
	// {
	// 	name: "NextJS",
	// 	logo: <RiNextjsFill className='h-8 w-8' />,
	// },
	{
		name: "CSS",
		logo: <IoLogoCss3 className='h-8 w-8' />,
	},
	{
		name: "JavaScript",
		logo: <SiJavascript className='h-8 w-8' />,
	},
	{
		name: "React",
		logo: <FaReact className='h-8 w-8' />,
	},

];

function TechStack() {
	return (
		<div className='flex flex-row container mx-auto align-middle items-center '>
			<h2 className=' w-28 mr-4 text-lg font-extrabold text-center'>
				Tech Stack
			</h2>

			<div class='h-[35px] my-3  bg-orange-300 w-[4px] '></div>

			<div className='grid grid-cols-3 md:grid-cols-6 gap-x-10  gap-y-5  mx-6'>
			
				{languages.map((item) => (
					<div className='flex flex-col items-center'>
						{item.logo}
            <p className='font-light text-gray-700 break-words text-sm font-Montserrat'>

            {item.name}</p>
					</div>
				))}

				
			</div>

      <p>View More...</p>
		</div>
	);
}

export default TechStack;
