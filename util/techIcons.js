import React from 'react'
import { ImArrowUpRight2 } from "react-icons/im";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCsharp, SiJavascript } from "react-icons/si";
import { BiLogoGraphql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { PiFileSql } from "react-icons/pi";
import { SiArduino } from "react-icons/si";
import { RiRfidFill } from "react-icons/ri";



const imageSize = "h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-10 ";


const techIcons = {

CSharp: {
		name: "C#",
		logo: <SiCsharp className={imageSize} />,
		
	},

	HTML:{
		name: "HTML 5",
		logo: <FaHtml5 className={imageSize} />,
	},
	NodeJS:{
		name: "NodeJS",
		logo: <FaNodeJs className={imageSize} />,
	},
	Tailwind:{
		name: "Tailwind",
		logo: <RiTailwindCssFill className='h-8 w-8' />,
	},
	GraphQL:{
		name: "GraphQL",
		logo: <BiLogoGraphql className={imageSize} />,
	},
	NextJS:{
		name: "NextJS",
		logo: <RiNextjsFill className={imageSize} />,
	},
	CSS:{
		name: "CSS",
		logo: <IoLogoCss3 className={imageSize} />,
	},
	JavaScript:{
		name: "JavaScript",
		logo: <SiJavascript className={imageSize} />,
	},
	React:{
		name: "React",
		logo: <FaReact className={imageSize} />,
	},
	SQL:{
		name: "SQL",
		logo:  <PiFileSql className={imageSize} />,
	},
	Arduino:{
		name: "Arduino",
		logo:  <SiArduino className={imageSize} />,
	},
	RFID:{
		name: "RFID",
		logo:  <RiRfidFill className={imageSize} />,
	},

  
 
}

export default techIcons