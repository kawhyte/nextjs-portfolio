import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroOrbit from "./HeroOrbit";
import { FaGithub, FaLinkedin, FaCodepen, FaPlus } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { FiTriangle, FiZap } from "react-icons/fi";
import { Separator } from "@radix-ui/react-separator";
import Lottie from "lottie-react";
import manOnComputerAnimation from "../public/lottie/man-on-computer.json";
import { Circle } from "lucide-react";
const Hero = () => {
	return (
		<div className='overflow-hidden '>
			<div className='min-h-screen flex items-center justify-center py-300 md:py-500 bg-accent-teal-subtlest bg-gradient relative z-0 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>
				<div className='absolute inset-0 '>
					<div
						className='absolute   inset-0 -z-30 opacity-5  '
						style={{
							backgroundImage: `url(${"/assets/images/grain.jpg"})`,
						}}>
						<div className='hidden md:block  md:size-[20px]  lg:size-[120px] hero-ring  '></div>
						<div className='hidden md:block  md:size-[120px] lg:size-[320px] hero-ring  '></div>
						<div className='hidden md:block  md:size-[220px] lg:size-[520px] hero-ring  '></div>
						<div className='hidden md:block  md:size-[420px]  lg:size-[720px] hero-ring  '></div>
						<div className='hidden md:block  md:size-[620px] lg:size-[920px] hero-ring  '></div>
					</div>

					<div className=' '>
						<HeroOrbit
							size={480}
							rotation={30}
							shouldOrbit
							orbitDuration={"35s"}
							shouldSpin
							spinDuration={"3s"}>
							<Circle className='size-10 text-teal-400/70 opacity-20 ' />
						</HeroOrbit>
						<HeroOrbit
							size={580}
							rotation={-60}
							shouldOrbit
							orbitDuration={"37s"}>
							<div className='size-4 rounded-full bg-teal-400/50 opacity-20 '></div>
						</HeroOrbit>
						<HeroOrbit
							size={650}
							rotation={120}
							shouldOrbit
							orbitDuration={"41s"}
							shouldSpin
							spinDuration={"5s"}>
							<Circle className='size-6 text-orange-400/70 opacity-20 ' />
						</HeroOrbit>

						<HeroOrbit
							size={540}
							rotation={178}
							shouldOrbit
							orbitDuration={"36s"}
							shouldSpin
							spinDuration={"3s"}>
							<div className='size-4 rounded-full bg-teal-400/50 opacity-20 '></div>
						</HeroOrbit>
						<HeroOrbit
							size={550}
							rotation={10}
							shouldOrbit
							orbitDuration={"38s"}
							shouldSpin
							spinDuration={"6s"}>
							<Circle className='size-10 text-orange-400/70 opacity-20 ' />
						</HeroOrbit>
						<HeroOrbit
							size={600}
							rotation={109}
							shouldOrbit
							orbitDuration={"40s"}
							shouldSpin
							spinDuration={"6s"}>
							<div className='size-4 rounded-full bg-teal-400/50 opacity-20 '></div>
						</HeroOrbit>
						<HeroOrbit
							size={620}
							rotation={-5}
							shouldOrbit
							orbitDuration={"42s"}>
							<div className='size-4 rounded-full bg-orange-400/50 opacity-20 '></div>
						</HeroOrbit>
					
						<HeroOrbit
							size={710}
							rotation={90}
							shouldOrbit
							orbitDuration={"46s"}>
							<div className='size-5 rounded-full bg-orange-400/50 opacity-20 '></div>
						</HeroOrbit>
						
					</div>
				</div>

				<div className='container  flex flex-col  items-center px-200 mx-auto  mt-500 '>
					<div className='w-[320px] h-[480px] md:w-[400px] md:h-[600px] lg:w-[450px] lg:h-[675px] pr-300 -mt-32 -mb-300'>
						<Lottie
							animationData={manOnComputerAnimation}
							loop={true}
							autoplay={true}
							style={{ width: '100%', height: '100%' }}
							aria-label="Man working on computer animation"
							role="img"
						/>
					</div>

					<div className='container mx-auto flex flex-col justify-center items-center w-full z-50 -mt-32 '>
						{/* <div className='bg-gray-950 border border-gray-800 px-200 py-150 inline-flex items-center text-white gap-200 rounded-xl'>
							<div className=' rounded-full text-2xl lg:text-3xl animate-wave'>
								👋🏽
							</div>
							<div className='text-sm font-medium'>Hello, I'm Kenny Whyte</div>
						</div> */}
						<div className='max-w-lg lg:max-w-4xl'>
							<h1 className=' font-serif text-3xl md:text-5xl lg:text-6xl text-center mt-400 leading-mega-16'>
								Full-Stack Engineer Building Modern Web Experiences.
							</h1>
							<p className='mt-200 text-center text-foreground md:text-lg lg:text-xl leading-relaxed-8'>
								I specialize in creating fast, intuitive, and user-friendly
								software using C#, .NET, and React/Next.js.
							</p>
						</div>

						<div className='mt-400 flex flex-col sm:flex-row items-center gap-200'>
							<Button asChild size='lg'>
								<Link href='/projects'>View My Projects</Link>
							</Button>
							<Button asChild variant='outline' size='lg'>
								<a
									href='https://linkedin.com/in/kawhyte'
									target='_blank'
									rel='noopener noreferrer'>
									Contact Me
								</a>
							</Button>
						</div>
						<Separator className='my-200' />
						{/* --- NEW: Social Links Section --- */}
						<div className='mt-300 flex justify-center items-center gap-200'>
							<Button asChild variant='ghost' size='icon'>
								<a
									href='https://github.com/kawhyte'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='GitHub'>
									<FaGithub className='h-6 w-6 text-muted-foreground hover:text-foreground' />
								</a>
							</Button>
							<Button asChild variant='ghost' size='icon'>
								<a
									href='https://linkedin.com/in/kawhyte'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='LinkedIn'>
									<FaLinkedin className='h-6 w-6 text-muted-foreground hover:text-foreground' />
								</a>
							</Button>
							<Button asChild variant='ghost' size='icon'>
								<a
									href='https://codepen.io/kawhyte'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Codepen'>
									<FaCodepen className='h-6 w-6 text-muted-foreground hover:text-foreground' />
								</a>
							</Button>
							<Button asChild variant='ghost' size='icon'>
								<a
									href='https://bsky.app/profile/kawhyte.bsky.social'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Bluesky'>
									<FaBluesky className='h-6 w-6 text-muted-foreground hover:text-foreground' />
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
