import React from "react";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData
import SectionTitle from "./SectionTitle"; // Assuming typed
// import { IoGameController } from "react-icons/io5"; // Unused directly in JSX
import Card from "./Card"; // Assuming typed
// import StarIcon from "/public/assets/icons/star.svg"; // Unused directly in JSX
import bookImage from "/public/assets/images/book-cover.png"; // Type: StaticImageData
import mapImage from "/public/assets/images/map.png"; // Type: StaticImageData
import smileMemoji from "/public/assets/images/memoji-smile.png"; // Type: StaticImageData
import { IconType } from "react-icons"; // Import IconType
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCsharp, SiJavascript } from "react-icons/si";
import { BiLogoGraphql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import CardHeader from "./CardHeader"; // Assuming typed
import ToolBoxItems from "./ToolBoxItems"; // Assuming typed

// --- Define Interfaces ---

interface AboutItem {
	title: string;
	detail: string;
	quote: string;
	icon: string; // Emoji
}

interface PlaceItem {
	title: string;
	icon: string; // Emoji
}

// Interface for the languages array items (icon is a JSX element)
interface LanguageItem {
	title: string;
	icon: React.ReactElement; // Type for JSX element
}

interface HobbyItem {
	title: string;
	emoji: string;
	left: string; // Percentage string
	top: string; // Percentage string
}

// --- Component Data ---

// Type the arrays using the interfaces
const about: AboutItem[] = [
	{
		title: "Software Engineer",
		detail: `Currently, I'm focused on developing web applications with C#, .NET Core, Node.js, and React/NextJS/Gatsby.`,
		quote: `A good programmer is someone who always looks both ways
		before crossing a one-way street. ~ Doug Linder`,
		icon: `🚀`,
	},
	{
		title: "Observational Astronomer",
		detail: `I'm a Software Developer by day and an amateur astronomer by night.`, // Corrected typo
		quote:
			"The good thing about science is that it's true whether or not you believe in it. ~ Neil deGrasse Tyson",
		icon: `✨`,
	},
	{
		title: "Retro Nintendo Enthusiast",
		detail: `Games with Mario, Zelda or Metroid... Nintendo all the way!`, // Corrected typo
		quote: `When my dad was young he shot marbles. When I was young I
								played Marble Madness on my Nintendo Entertainment System.
								~ Kevin James Breaux`,
		icon: `🎮`,
	},
];

const imageSize = "size-12 "; // Keep as string for className

const places: PlaceItem[] = [
	{ title: "Negril, Jamaica", icon: "🇯🇲" },
	{ title: "Washington D.C., USA", icon: "🇺🇸" },
	{ title: "Copenhagen, Denmark", icon: "🇩🇰" },
	{ title: "Hawaii, USA", icon: "🇺🇸" },
	{ title: "Malmö, Sweden", icon: "🇸🇪" },
	{ title: "Jakarta, Indonesia", icon: "🇮🇩" }, // Corrected typo
	{ title: "Paris, France", icon: "🇫🇷" },
	{ title: "London, England", icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
	{ title: "Tokyo, Japan", icon: "🇯🇵" },
	{ title: "Toronto, Canada", icon: "🇨🇦" },
	{ title: "San Juan, Puerto Rico", icon: "🇺🇸" }, // Assuming PR is US territory context
];

// Note: This array contains JSX elements directly.
const languages: LanguageItem[] = [
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

const hobbies: HobbyItem[] = [
	{ title: "Weightlifting", emoji: "🏋🏾", left: "5%", top: "5%" },
	{ title: "Retro Nintendo Games", emoji: "🎮", left: "50%", top: "5%" },
	{ title: "Reading", emoji: "📙", left: "5%", top: "35%" },
	{ title: "Astronomy", emoji: "🪐", left: "50%", top: "30%" },
	{ title: "Traveling", emoji: "✈️", left: "40%", top: "50%" },
	{ title: "Watching Bad Movies", emoji: "🍿", left: "5%", top: "65%" },
	{ title: "Music", emoji: "🎵", left: "60%", top: "70%" },
	{ title: "Sneakers", emoji: "👟", left: "60%", top: "70%" }, // Note: Same position as Music, intentional?
];

// --- Component Definition ---

// Type the component using React.FC (Functional Component)
// Takes no props
const AboutSection: React.FC = () => {
	return (
		<div className=' lg:container'>
			{" "}
			{/* className is correct */}
			<div className='py-20 lg:py-24 max-w-7xl '>
				<div className='container'>
					{/* Assuming SectionTitle props are strings */}
					<SectionTitle
						sectionHeadtext={`Get to know me better`}
						header={"A Little More About Me"}
						description={
							"Beyond the code, there's a whole lot more to discover.  Come take a peek behind the curtain!"
						}
					/>
				</div>

				<div className='mt-20 flex flex-col gap-8'>
					<div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 md:gap-1'>
						{/* Assuming Card props are className and children */}
						<Card className='h-[320px] md:col-span-2 lg:col-span-1 '>
							{/* Assuming CardHeader props are optional strings */}
							<CardHeader
								title={"Bookworm Corner"}
								description={"A book that challenged my thinking:"}
								className={undefined}
							/>

							<div className='w-40 mx-auto '>
								{/* Image props seem okay for static import */}
								<Image src={bookImage} alt='book cover' />{" "}
							</div>
						</Card>
						<Card className='h-[320px] md:col-span-3 lg:col-span-2 '>
							<CardHeader
								title={"Places I've been"}
								description={
									"I've been fortunate enough to wander some incredible corners of the world:"
								}
								className='' // Pass empty string if needed
							/>

							{/* Assuming ToolBoxItems accepts 'languages' prop with PlaceItem[] structure */}
							<ToolBoxItems
								languages={places}
								className=''
								itemsWrapperClass={undefined}
							/>
							<ToolBoxItems
								languages={places}
								className='mt-6 '
								itemsWrapperClass='-translate-x-1/2'
							/>
						</Card>
					</div>

					<div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 md:gap-1'>
						<Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
							<CardHeader
								title={"Other things I like:"}
								description={
									"Beyond the screen, I have a life filled with other passions. "
								}
								className='px-6 py-6'
							/>
							<div className='relative flex-1'>
								{hobbies.map((hobby) => (
									<div
										key={hobby.title} // Key prop is present
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
								// Consider adding layout="fill" if parent Card provides dimensions reliably
								// layout="fill"
							/>

							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-green-100 to-orange-100 after:content-[''] after:absolute after:inset-0 after:outline after:ouline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
								<Image src={smileMemoji} alt='smiling memoji' className='' />{" "}
							</div>
						</Card>
					</div>
				</div>
			</div>
			{/* Removed commented out section */}
		</div>
	);
};

export default AboutSection;
