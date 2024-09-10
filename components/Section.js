import React from "react";
import SectionTitle from "./SectionTitle";
import { IoGameController } from "react-icons/io5";

// import photo from "../images/bubble.png";

const about = [
	{
		title: "Software Engineer",
		detail: `Currently, I&apos;m focused on developing web applications with C#, .NET Core, Node.js, and React/NextJS/Gatsby.`,
		quote:
		`A good programmer is someone who always looks both ways
		before crossing a one-way street. ~ Doug Linder`,
		icon:`🚀`
	},

	{
		title: "Observational Astronomer",
		detail: `I'm a Software Developer by day and an amateur astronomery night.`,
		quote:
			"The good thing about science is that it&apos;s true whether or not you believe in it. ~ Neil deGrasse Tyson",
			icon:`✨`
	},
	
	{
		title: "Retro Nintendo Enthusiast",
		detail: `Games with Mario, Zelda or Metriod... Nintendo all the way!`,
		quote:
		`When my dad was young he shot marbles. When I was young I
								played Marble Madness on my Nintendo Entertainment System.
								~ Kevin James Breaux`,
								icon:`🎮`

	},
];

function Section() {
	return (
		<div className='bg-gradient '>
			<section className='max-w-6xl min-w-0 mx-auto mb-8 '>
				<div className='grid grid-cols-1 py-12 mx-8 sm:mx-20 md:mx-20 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3'>
					{about.map((item) => (
						<section className='my-4 overflow-hidden bg-white  md:mx-4 rounded-lg'>
							
						<div className="flex items-center   bg-yellow-50"> 
						<span className="text-2xl mx-2">{item.icon}</span>
						<p className='py-2 text-lg font-extrabold text-center bg-yellow-50 sm:py-4 md:text-md font-Montserrat'>
								{item.title}
							</p>
						
							</div> 

							<div className='p-5 font-light text-gray-700 break-words text-md font-Montserrat'>
								<span>{item.detail}</span>
								<span className='hidden pl-4 m-4 italic text-left text-gray-700 border-l-4 border-orange-500 rounded md:block'>
									{item.quote}
								</span>
							</div>
						</section>
					))}

					
					
				</div>
			</section>
		</div>
	);
}

export default Section;
