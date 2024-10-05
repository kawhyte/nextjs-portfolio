import Image from "next/image";
import TechStack from "./TechStack";
import { BiArrowBack, BiRightArrow } from "react-icons/bi";
import StarIcon from "/public/assets/icons/star.svg";
import SparkleIcon from "/public/assets/icons/sparkle.svg";
import { HeroOrbit } from "./HeroOrbit";
// import memojiImage from '@/assets/images/memoji-avatar-1.png'

const Hero = () => {
	return (
		<div>
			<div className=' py-12 md:py-20 bg-green-100  bg-gradient relative z-0 '>
				
			<div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"> 
			
			<div
					className='absolute inset-0 -z-30 opacity-5'
					style={{
						backgroundImage: `url(${"/assets/images/grain.jpg"})`,
					}}>
					<div className=' size-[620px] hero-ring  '></div>
					<div className=' size-[820px] hero-ring  '></div>
					<div className=' size-[1020px] hero-ring  '></div>
					<div className=' size-[1220px] hero-ring  '></div>
					<div className=' size-[1420px] hero-ring  '></div>
				</div>

				<HeroOrbit size={800} rotation={-72}>
					<StarIcon className='size-28 text-green-300 ' />
				</HeroOrbit>
				<HeroOrbit size={550} rotation={10}>
					<StarIcon className='size-12 text-green-300 ' />
				</HeroOrbit>
				<HeroOrbit size={600} rotation={109}>
					<StarIcon className='size-8 text-green-300 ' />
				</HeroOrbit>
				<HeroOrbit size={430} rotation={-14}>
					<SparkleIcon className='size-8 text-orange-300/70 ' />
				</HeroOrbit>
				<HeroOrbit size={440} rotation={90}>
					<SparkleIcon className='size-5 text-orange-300/70 ' />
				</HeroOrbit>
				<HeroOrbit size={530} rotation={178}>
					<SparkleIcon className='size-10 text-orange-300/70 ' />
				</HeroOrbit>
				<HeroOrbit size={710} rotation={140}>
					<SparkleIcon className='size-14 text-orange-300/70 ' />
				</HeroOrbit>
				<HeroOrbit size={710} rotation={90}>
					<div className="size-3 rounded-full bg-green-300/50"></div>
				</HeroOrbit>
				<HeroOrbit size={520} rotation={-41}>
					<div className="size-2 rounded-full bg-green-300/50"></div>
				</HeroOrbit>
				<HeroOrbit size={620} rotation={-5}>
					<div className="size-2 rounded-full bg-green-300/50"></div>
				</HeroOrbit>

				</div>
				
				<div className='container  flex flex-col  items-center px-3 mx-auto  mt-20 '>
					<Image
						src={"/assets/images/portrait.png"}
						blurDataURL='https://res.cloudinary.com/babyhulk/image/upload/e_blur:1058,q_10/v1627169850/hero-image/person-on-computer.webp'
						placeholder='blur'
						width='370'
						height='500'
						alt='man on computer'
						className=' pr-7'
					/>

					<div className='container mx-auto flex flex-col justify-center items-center w-full '>
						<div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center text-white gap-2 rounded-xl'>
							<div className='hidden md:block rounded-full'>👋🏽</div>
							<div className='text-sm font-medium'>
							I'm a Full Stack Software Engineer
							</div>
						</div>
						<div className='max-w-lg lg:max-w-4xl'>
							<h1 className=' font-serif text-3xl md:text-5xl lg:text-7xl text-center mt-8 leading-tight'>
								Creating Extraordinary User Friendly Software
							</h1>
							<p className='mt-4 text-center text-gray-900 md:text-lg lg:text-2xl'>
								Currently focused on developing web applications with C#, .NET
								Core, Node.js, and React/NextJS.
							</p>
						</div>

						<div className='flex flex-col md:flex-row item-center mt-8 gap-4'>
							<button className='inline-flex items-center gap-2 border border-white text-white bg-gray-900 px-6 h-12 rounded-xl'>
								<span className='font-semibold'>Check out my Projects</span>
								<span>🚀</span>
 {/**/}
								
							</button>
							<button className='flex justify-center items-center gap-2 border border-gray-800 bg-white border-gray-300/70 px-6 h-12 rounded-xl'>
								<span className='font-semibold'>Lets Connect</span>
								<BiRightArrow />
								 {/*<span>👋🏽</span>*/}
							</button>
						</div>
					</div>
					{/*<div className='flex flex-col  items-center justify-center w-full   '>
						<div className='flex flex-col md:items-start'>
							<h2 className='pt-6 md:pt-32  pb-8   text-[8.5rem] tracking-tight leading-10  font-extrabold text-white sm:text-10xl lg:text-12xl xl:text-14xl xl:text-[14rem]   sm:pb-20  '>
								Hello.
							</h2>

							<p className='   tracking-tight  text-black lg:py-6 lg:text-2xl font-extrabold leading-tight text-2xl'>
								I'm a Full Stack Software Engineer
							</p>
							<p className=' mt-6 text-base '>
								Currently focused on developing web applications with C#, .NET
								Core, Node.js, and React/NextJS.
							</p>
						</div>

						<div className='arrow bounce md:hidden'>
							<a href='#projects'>
								<svg
									className='inline-block w-12 h-12 '
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z'
									/>
								</svg>
							</a>
						</div>
					</div>

					<div className='flex justify-center w-full  text-center  '>
						<div>
							<Image
								src='/person-on-computer.png'
								blurDataURL='https://res.cloudinary.com/babyhulk/image/upload/e_blur:1058,q_10/v1627169850/hero-image/person-on-computer.webp'
								placeholder='blur'
								width='545'
								height='471'
								alt='boy on computer'
								className='w-full'
							/>
						</div>
					</div>*/}
				</div>
				{/*<TechStack />*/}
			</div>
		</div>
	);
};

export default Hero;

// text-pop-up-top

// <Img
// fluid={data.persononcomputer.childImageSharp.fluid}
// alt="person on computer"
// className="z-50 w-full md:3/5 lg:w-4/5"
// />

// Kon&apos;nichiwa | Bonjour | Salut!
