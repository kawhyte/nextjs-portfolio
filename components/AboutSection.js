import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { IoGameController } from "react-icons/io5";
import Card from "./Card";
import StarIcon from "/public/assets/icons/star.svg";
import bookImage from "/public/assets/images/book-cover.png";
import mapImage from "/public/assets/images/map.png";
import smileMemoji from "/public/assets/images/memoji-smile.png";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCsharp, SiJavascript } from "react-icons/si";
import { BiLogoGraphql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import CardHeader from "./CardHeader";
import ToolBoxItems from "./ToolBoxItems";

// import photo from "../images/bubble.png";

const about = [
	{
		title: "Software Engineer",
		detail: `Currently, I&apos;m focused on developing web applications with C#, .NET Core, Node.js, and React/NextJS/Gatsby.`,
		quote: `A good programmer is someone who always looks both ways
		before crossing a one-way street. ~ Doug Linder`,
		icon: `🚀`,
	},

	{
		title: "Observational Astronomer",
		detail: `I'm a Software Developer by day and an amateur astronomery night.`,
		quote:
			"The good thing about science is that it&apos;s true whether or not you believe in it. ~ Neil deGrasse Tyson",
		icon: `✨`,
	},

	{
		title: "Retro Nintendo Enthusiast",
		detail: `Games with Mario, Zelda or Metriod... Nintendo all the way!`,
		quote: `When my dad was young he shot marbles. When I was young I
								played Marble Madness on my Nintendo Entertainment System.
								~ Kevin James Breaux`,
		icon: `🎮`,
	},
];

const imageSize = "size-11 ";

const languages = [
	{
		title: "C#",
		icon: (
			<SiCsharp className={imageSize} style={{ fill: "url(#icon-gradient)" }} />
		),
	},
	{
		title: "HTML 5",
		icon: (
			<FaHtml5 className={imageSize} style={{ fill: "url(#icon-gradient)" }} />
		),
	},
	{
		title: "NodeJS",
		icon: (
			<FaNodeJs className={imageSize} style={{ fill: "url(#icon-gradient)" }} />
		),
	},
	// {
	// 	title: "Tailwind",
	// 	icon: <RiTailwindCssFill className='h-8 w-8' />,
	// },
	{
		title: "GraphQL",
		icon: (
			<BiLogoGraphql
				className={imageSize}
				style={{ fill: "url(#icon-gradient)" }}
			/>
		),
	},
	{
		title: "NextJS",
		icon: (
			<RiNextjsFill
				className={imageSize}
				style={{ fill: "url(#icon-gradient)" }}
			/>
		),
	},
	{
		title: "CSS",
		icon: (
			<IoLogoCss3
				className={imageSize}
				style={{ fill: "url(#icon-gradient)" }}
			/>
		),
	},
	{
		title: "JavaScript",
		icon: (
			<SiJavascript
				className={imageSize}
				style={{ fill: "url(#icon-gradient)" }}
			/>
		),
	},
	{
		title: "React",
		icon: (
			<FaReact className={imageSize} style={{ fill: "url(#icon-gradient)" }} />
		),
	},
];

const hobbies = [
	{
		title: "Weightlifting",
		emoji: "🏋🏾",
		left: "5%",
		top: "5%",
	},
	{
		title: "Retro Games",
		emoji: "🎮",
		left: "50%",
		top: "5%",
	},
	{
		title: "Reading",
		emoji: "📙",
		left: "5%",
		top: "35%",
	},
	{
		title: "Astronomy",
		emoji: "🪐",
		left: "50%",
		top: "30%",
	},
	{
		title: "Travel",
		emoji: "✈️",
		left: "40%",
		top: "50%",
	},
	{
		title: "Bad Movies",
		emoji: "🍿",
		left: "5%",
		top: "65%",
	},
	{
		title: "Music",
		emoji: "🎵",
		left: "60%",
		top: "70%",
	},
];

function AboutSection() {
	return (
		<>
			<div className='py-20 lg:py-24'>
				<div className='container'>
					<SectionTitle
						sectionHeadtext={`About me`}
						header={"Just a Liitle Info About Me"}
						description={"Learn more about who I am "}
					/>
				</div>

				<div className='mt-20 flex flex-col gap-8'>
					<div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 md:gap-1'>
						<Card className='h-[320px] md:col-span-2 lg:col-span-1 '>
							<CardHeader
								title={"My Reads"}
								description={"Book that Ive read in the last 24 months."}
							/>

							<div className='w-40 mx-auto '>
								<Image src={bookImage} alt='book cover' />{" "}
							</div>
						</Card>
						<Card className='h-[320px] md:col-span-3 lg:col-span-2 '>
							<CardHeader
								title={"My Toolbox"}
								description={"The tech and tool that Ive been using"}
								className=''
							/>

							<ToolBoxItems languages={languages} className='' />
							<ToolBoxItems
								languages={languages}
								className='mt-6 '
								itemsWrapperClass='-translate-x-1/2'
							/>
						</Card>
					</div>

					<div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 md:gap-1'>
						<Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
							<CardHeader
								title={"Beyond the code"}
								description={"Explore my other hobbies outside"}
								className='px-6 py-6'
							/>

							<div className='relative flex-1'>
								{hobbies.map((hobby) => (
									<div
										key={hobby.title}
										className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-green-100 to-orange-100 rounded-full py-1.5 absolute'
										style={{
											left: hobby.left,
											top: hobby.top,
										}}>
										<span className='font-medium text-gray-950'>
											{hobby.title}
										</span>
										<span>{hobby.emoji}</span>
									</div>
								))}
							</div>
						</Card>

						<Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
							<Image
								src={mapImage}
								alt='map'
								className='h-full w-full object-cover'
							/>

							<div className="  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-green-100 to-orange-100 after:content-[''] after:absolute after:inset-0 after:outline after:ouline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
								<Image src={smileMemoji} alt='smiling' className='' />{" "}
							</div>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutSection;

// <div className='bg-gradient '>
// 				<section className='max-w-6xl min-w-0 mx-auto mb-8 '>
// 					<div className='grid grid-cols-1 py-12 mx-8 sm:mx-20 md:mx-20 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3'>
// 						{about.map((item) => (
// 							<section className='my-4 overflow-hidden bg-white  md:mx-4 rounded-lg'>
// 								<div className='flex items-center   bg-yellow-50'>
// 									<span className='text-2xl mx-2'>{item.icon}</span>
// 									<p className='py-2 text-lg font-extrabold text-center bg-yellow-50 sm:py-4 md:text-md font-Montserrat'>
// 										{item.title}
// 									</p>
// 								</div>

// 								<div className='p-5 font-light text-gray-700 break-words text-md font-Montserrat'>
// 									<span>{item.detail}</span>
// 									<span className='hidden pl-4 m-4 italic text-left text-gray-700 border-l-4 border-orange-500 rounded md:block'>
// 										{item.quote}
// 									</span>
// 								</div>
// 							</section>
// 						))}
// 					</div>
// 				</section>
// 			</div>
