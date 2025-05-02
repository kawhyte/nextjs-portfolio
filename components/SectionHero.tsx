import Image from "next/image";
// import TechStack from "./TechStack"; // Unused import
// import { BiArrowBack, BiRightArrow } from "react-icons/bi"; // Unused import
import StarIcon from "/public/assets/icons/star.svg";
import SparkleIcon from "/public/assets/icons/sparkle.svg";
import HeroOrbit from "./HeroOrbit";
// import Button from "../ui/Button"; // Unused import
import React from "react"; // Import React for FC type
// import memojiImage from '@/assets/images/memoji-avatar-1.png'

// Define the interface for the component's props
interface SectionHeroProps {
	title: string;
	description: string;
}

const SectionHero: React.FC<SectionHeroProps> = ({ title, description }) => {
	return (
		<div className="overflow-hidden">
			<div className=' py-12 md:py-20 bg-green-100  bg-gradient relative z-0 overflow-hidden '>
				<div className=' absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] overflow-hidden '>
				<div
				className='absolute   inset-0 -z-30 opacity-5  '
				style={{
					backgroundImage: `url(${"/assets/images/grain.jpg"})`,
				}}>
				{/**/}
				{/* Hero Rings - unchanged */}
				<div className='hidden md:block  md:size-[20px]  lg:size-[120px] hero-ring  '></div>
				<div className='hidden md:block  md:size-[120px] lg:size-[320px] hero-ring  '></div>
				<div className='hidden md:block  md:size-[220px] lg:size-[520px] hero-ring  '></div>
				<div className='hidden md:block  md:size-[420px]  lg:size-[720px] hero-ring  '></div>
				<div className='hidden md:block  md:size-[620px] lg:size-[920px] hero-ring  '></div>
			</div>

					{/* HeroOrbit components - unchanged */}
					<div className="hidden lg:block absolute inset-0 " style={{ clipPath: 'inset(0 0 0 0)' }}> {/* Replace overflow-hidden with clip-path */}
					<HeroOrbit
						size={430}
						rotation={-14}
						shouldOrbit
						orbitDuration={"30s"}
						shouldSpin
						spinDuration={"3s"}>
						<SparkleIcon className='size-8 text-orange-300/70 ' />
					</HeroOrbit>
					<HeroOrbit
						size={440}
						rotation={90}
						shouldOrbit
						orbitDuration={"32s"}
						shouldSpin
						spinDuration={"3s"}>
						<SparkleIcon className='size-5 text-orange-300/70 ' />
					</HeroOrbit>
					<HeroOrbit
						size={520}
						rotation={-41}
						shouldOrbit
						orbitDuration={"34s"}
						shouldSpin
						spinDuration={"6s"}>
						<div className='size-2 rounded-full bg-green-300/50'></div>
					</HeroOrbit>
					<HeroOrbit
						size={530}
						rotation={178}
						shouldOrbit
						orbitDuration={"36s"}
						shouldSpin
						spinDuration={"3s"}>
						<SparkleIcon className='size-10 text-orange-300/70 ' />
					</HeroOrbit>
					<HeroOrbit
						size={550}
						rotation={10}
						shouldOrbit
						orbitDuration={"38s"}
						shouldSpin
						spinDuration={"6s"}>
						<StarIcon className='size-12 text-green-300 ' />
					</HeroOrbit>
					<HeroOrbit
						size={600}
						rotation={109}
						shouldOrbit
						orbitDuration={"40s"}
						shouldSpin
						spinDuration={"6s"}>
						<StarIcon className='size-8 text-green-300 ' />
					</HeroOrbit>
					<HeroOrbit size={620} rotation={-5} shouldOrbit orbitDuration={"42s"}>
						<div className='size-2 rounded-full bg-green-300/50'></div>
					</HeroOrbit>
					<HeroOrbit
						size={710}
						rotation={140}
						shouldOrbit
						orbitDuration={"44s"}
						shouldSpin
						spinDuration={"3s"}>
						<SparkleIcon className='size-14 text-orange-300/70 ' />
					</HeroOrbit>
					<HeroOrbit size={710} rotation={90} shouldOrbit orbitDuration={"46s"}>
						<div className='size-3 rounded-full bg-green-300/50'></div>
					</HeroOrbit>
					<HeroOrbit
						size={800}
						rotation={-72}
						shouldOrbit
						orbitDuration={"48s"}
						shouldSpin
						spinDuration={"6s"}>
						<StarIcon className='size-28 text-green-300 ' />
					</HeroOrbit>
				</div>

				</div>

				<div className='container  flex flex-col  items-center px-3 mx-auto  mt-20 '>
					{/* Commented out Image remains unchanged */}
					{/*<Image ... />*/}
					{/* Commented out div remains unchanged */}
					{/*<div className='bg-gray-950 ...'> ... </div>*/}

					<div className='container mx-auto flex flex-col justify-center items-center w-full z-50 '>
						<div className='max-w-lg lg:max-w-4xl'>
							<h1 className=' font-serif text-2xl md:text-4xl lg:text-6xl text-center mt-8 leading-tight'>
								{title}
							</h1>
							<p className='mt-4 text-center text-gray-900 md:text-lg lg:text-xl'>
								{description}
							</p>
						</div>

						{/* Commented out buttons remain unchanged */}
						<div className='flex flex-col md:flex-row item-center gap-4 z-10'>
							{/*<Button ... />*/}
							{/*<Button ... />*/}
							{/*<button ... />*/}
							{/*<button ... />*/}
						</div>
					</div>
					{/* Other commented out sections remain unchanged */}
					{/*<div className='flex flex-col ...'> ... </div>*/}
					{/*<div className='flex justify-center ...'> ... </div>*/}
				</div>
			</div>
		</div>
	);
};

export default SectionHero;

// Other commented out code remains unchanged
