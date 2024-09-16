import Image from "next/image";
import TechStack from "./TechStack";

const Hero = () => {
	return (
		<div>
			<div className='pt-3 bg-green-100  bg-gradient  '>
				<div className='container  flex flex-col  items-center justify-between px-3 mx-auto lg:flex-row mt-20 '>
					<div className='flex flex-col  items-center justify-center w-full   '>
						<div className='flex flex-col md:items-start'>
							<h2 className='pt-6 md:pt-32  pb-8   text-[8.5rem] tracking-tight leading-10  font-extrabold text-white sm:text-10xl lg:text-12xl xl:text-14xl xl:text-[14rem]   sm:pb-20 text-pop-up-top '>
								Hello.
							</h2>

							<p className='   tracking-tight  text-black lg:py-6 lg:text-2xl font-extrabold leading-tight text-2xl'>
							I'm a Full Stack Software Engineer
							</p>
							<p className=" mt-6 text-base ">
								Currently focused on developing web
								applications with C#, .NET Core, Node.js, and React/NextJS.
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
					</div>
					
				</div>
			<TechStack/>
			</div>
		</div>
	);
};

export default Hero;

// <Img
// fluid={data.persononcomputer.childImageSharp.fluid}
// alt="person on computer"
// className="z-50 w-full md:3/5 lg:w-4/5"
// />

// Kon&apos;nichiwa | Bonjour | Salut!

