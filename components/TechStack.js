import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCsharp,SiJavascript } from "react-icons/si";
import { BiLogoGraphql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";

const  imageSize='h-10 w-10'


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
		logo: <FaNodeJs className={imageSize}  />,
	},
	// {
	// 	name: "Tailwind",
	// 	logo: <RiTailwindCssFill className='h-8 w-8' />,
	// },
	{
		name: "GraphQL",
		logo: <BiLogoGraphql className={imageSize}  />,
	},
	{
		name: "NextJS",
		logo: <RiNextjsFill className={imageSize} />,
	},
	{
		name: "CSS",
		logo: <IoLogoCss3 className={imageSize}  />,
	},
	{
		name: "JavaScript",
		logo: <SiJavascript className={imageSize}  />,
	},
	{
		name: "React",
		logo: <FaReact className={imageSize}  />,
	},

];

function TechStack() {
	return (

		<div className='flex flex-row container mx-auto align-middle items-center border-white rounded-2xl bg-yellow-50  w-full px-5 py-4 max-w-7xl '>
			<h2 className=' md:w-44 mr-4  font-extrabold leading-tight text-center text-3xl'>
				Tech Stack
			</h2>

			<div class='h-[35px] my-3  bg-orange-500 w-[4px] '></div>

			<div className='grid grid-cols-4 md:grid-cols-8 gap-x-10  gap-y-5  mx-6'>
			
				{languages.map((item) => (
					<div className='flex flex-col items-center'>
						{item.logo}
            <p className='font-light text-gray-700 break-words text-nowrap text-sm font-Montserrat'>

            {item.name}</p>
					</div>
				))}

				
			</div>

  
		</div>
	);
}

export default TechStack;
