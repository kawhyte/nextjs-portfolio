import React from "react";
import Image from "next/image";
import TechStack from "./TechStack";
import { BiArrowBack, BiRightArrow } from "react-icons/bi";
import StarIcon from "/public/assets/icons/star.svg";
import SparkleIcon from "/public/assets/icons/sparkle.svg";
import HeroOrbit from "./HeroOrbit";
import { Triangle, Plus, Zap } from "lucide-react"; // Import desired icons
import { Button } from "@/components/ui/button";
import memojiImage from '/public/assets/images/memoji-avatar.png'
import Link from "next/link";


const Hero = () => {
	return (
		<div className='overflow-hidden'>
            <div className='py-12 md:py-20 bg-green-100 bg-gradient relative z-0 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>
				<div className='absolute inset-0 '>
					<div
						className='absolute   inset-0 -z-30 opacity-5  '
						style={{
							backgroundImage: `url(${"/assets/images/grain.jpg"})`,
						}}>
						{/**/}
						<div className='hidden md:block  md:size-[20px]  lg:size-[120px] hero-ring  '></div>
						<div className='hidden md:block  md:size-[120px] lg:size-[320px] hero-ring  '></div>
						<div className='hidden md:block  md:size-[220px] lg:size-[520px] hero-ring  '></div>
						<div className='hidden md:block  md:size-[420px]  lg:size-[720px] hero-ring  '></div>
						<div className='hidden md:block  md:size-[620px] lg:size-[920px] hero-ring  '></div>
					</div>

					<div className=' '>
						{/**/}
						<HeroOrbit
							size={480}
							rotation={30}
							shouldOrbit
							orbitDuration={"35s"}
							shouldSpin
							spinDuration={"3s"}>
							<Triangle className='size-10 text-orange-300/70 ' />
							{/* <SparkleIcon className='size-8 text-orange-300/70 ' /> */}
						</HeroOrbit>
						<HeroOrbit
							size={580}
							rotation={-60}
							shouldOrbit
							orbitDuration={"37s"}>
							<Plus className='size-8 text-green-400/60' />
						</HeroOrbit>
						<HeroOrbit
							size={650}
							rotation={120}
							shouldOrbit
							orbitDuration={"41s"}
							shouldSpin
							spinDuration={"5s"}>
							<Zap className='size-6 text-green-300/70' />
						</HeroOrbit>

						<HeroOrbit
							size={540}
							rotation={178}
							shouldOrbit
							orbitDuration={"36s"}
							shouldSpin
							spinDuration={"3s"}>
							<Triangle className='size-7 text-green-300/70 ' />
						</HeroOrbit>
						<HeroOrbit
							size={550}
							rotation={10}
							shouldOrbit
							orbitDuration={"38s"}
							shouldSpin
							spinDuration={"6s"}>
							<Plus className='size-5 text-green-300 ' />
						</HeroOrbit>
						<HeroOrbit
							size={600}
							rotation={109}
							shouldOrbit
							orbitDuration={"40s"}
							shouldSpin
							spinDuration={"6s"}>
							<Zap className='size-6 text-green-300 ' />
						</HeroOrbit>
						<HeroOrbit
							size={620}
							rotation={-5}
							shouldOrbit
							orbitDuration={"42s"}>
							<div className='size-4 rounded-full bg-orange-300/50'></div>
						</HeroOrbit>
						<HeroOrbit
							size={710}
							rotation={140}
							shouldOrbit
							orbitDuration={"44s"}
							shouldSpin
							spinDuration={"3s"}>
							<Plus className='size-4 text-orange-300/70 ' />
						</HeroOrbit>
						<HeroOrbit
							size={710}
							rotation={90}
							shouldOrbit
							orbitDuration={"46s"}>
							<div className='size-5 rounded-full bg-green-300/50'></div>
						</HeroOrbit>
						<HeroOrbit
							size={800}
							rotation={-72}
							shouldOrbit
							orbitDuration={"48s"}
							shouldSpin
							spinDuration={"6s"}>
							<Triangle className='size-8 text-green-300 ' />
						</HeroOrbit>
					</div>
				</div>

				<div className='container  flex flex-col  items-center px-3 mx-auto  mt-20 '>
					<Image
						src={memojiImage}
						blurDataURL='https://res.cloudinary.com/babyhulk/image/upload/e_blur:1058,q_10/v1627169850/hero-image/person-on-computer.webp'
						placeholder='blur'
						width='270'
						height='400'
						alt='man on computer'
						className=' pr-7 -mb-10'
					/>

					<div className='container mx-auto flex flex-col justify-center items-center w-full z-50 '>
						<div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center text-white gap-4 rounded-xl'>
							<div className='hidden md:block rounded-full text-2xl lg:text-3xl animate-wave'>
								👋🏽
							</div>
							<div className='text-sm font-medium'>
								I'm a Full Stack Software Engineer
							</div>
						</div>
						<div className='max-w-lg lg:max-w-4xl'>
							<h1 className=' font-serif text-3xl md:text-5xl lg:text-7xl text-center mt-8 leading-tight'>
								Creating Extraordinary User Friendly Software
							</h1>
							<p className='mt-4 text-center text-gray-900 md:text-lg lg:text-xl'>
								Currently focused on developing web applications with C#, .NET
								Core, Node.js, and React/NextJS.
							</p>
						</div>

				   <div className='mt-8 flex flex-col sm:flex-row items-center gap-4'>
                            {/* Primary CTA */}
                            <Button asChild size="lg">
                                <Link href="/projects">View My Work</Link>
                            </Button>
                            {/* Secondary CTA */}
                            <Button asChild variant="outline" size="lg">
                                <Link href="/contact">Contact Me</Link>
                            </Button>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
