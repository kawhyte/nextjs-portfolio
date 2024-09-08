import Image from "next/image";
import TechStack from "./TechStack";

const Hero = () => {
	return (
		<div>
			<div className='pt-3 bg-green-100 '>
				<div className='container  flex flex-col  items-center justify-between px-3 mx-auto lg:flex-row '>
					<div className='flex flex-col  items-center justify-center w-full   '>
						<div className='flex flex-col items-center'>
							<h2 className='pt-32  pb-8  md:pl-0  text-9xl tracking-tight leading-10 font-extrabold text-white sm:text-10xl lg:text-12xl xl:text-14xl   sm:pb-16 text-pop-up-top '>
								Hello.
							</h2>

							<p className='text-3xl text-center font-bold tracking-tight  text-black lg:pb-6 lg:text-4xl'>
								Kon&apos;nichiwa | Bonjour | Salut!
							</p>
							<p className="text-center mt-6 ">
								I'm a Software Engineer currently, focused on developing web
								applications with C#, .NET Core, Node.js, and React/NextJS.
							</p>
						</div>
						<div className='arrow bounce md:hidden'>
							<a href='#projects'>
								<svg
									className='inline-block w-12 h-12 text-white '
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
								alt='boy running'
								className='w-full  mt-   md: lg:'
							/>
						</div>
					</div>
				</div>
			
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
