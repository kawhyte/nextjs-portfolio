import Image from "next/image";

const Hero = () => {
	return (
		<div>
			<div className='pt-3 bg-green-100 '>
				<div className='container max-w-7xl flex flex-col flex-wrap items-center justify-center px-3 mx-auto md:flex-row '>
					<div className='flex flex-col items-center justify-center w-full lg:w-2/5 '>
						<h2 className='pt-32 pb-10 px-10  md:pl-0  text-8.5xl tracking-tight leading-10 font-extrabold text-white sm:text-10xl lg:text-12xl xl:text-14xl lg:pl-20   sm:pb-16 text-pop-up-top '>
							Hello.
						</h2>

						<p className='text-3xl font-extrabold leading-10 tracking-tight text-center text-black lg:py-6 lg:text-4xl'>
							Kon&apos;nichiwa. Bonjour. Salut!
						</p>

						<div className='arrow bounce md:hidden'>
						<a href="#projects">
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
							</svg></a>
						</div>
					</div>

					<div className='flex justify-center w-full px-6 py-6 text-center md:w-3/5 md:justify-end'>
					
					<div>
					<Image
							src='/person-on-computer.png'
							blurDataURL='https://res.cloudinary.com/babyhulk/image/upload/e_blur:1058,q_10/v1627169850/hero-image/person-on-computer.webp'
							placeholder='blur'
							width='545'
							height='471'
							alt='boy running'
							className='w-48  m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20'
						/>
					</div></div>
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
