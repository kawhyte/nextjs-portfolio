import { createClient } from "contentful";
import Image from "next/image";
import Head from "next/head";
import { BiArrowBack, BiRightArrow } from "react-icons/bi";
import { BiArrowFromLeft, BiCheckCircle } from "react-icons/bi";
import { ImArrowUpRight2 } from "react-icons/im";

import CaseStudy from "../../components/CaseStudy";
import Skeleton from "../../components/Skeleton";
import Button from "../../ui/Button";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: "portfolio",
	});

	const paths = res.items.map((item) => {
		return {
			params: { slug: item.fields.slug },
		};
	});

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps = async ({ params }) => {
	const { items } = await client.getEntries({
		content_type: "portfolio",
		"fields.slug": params.slug,
	});

	if (!items.length) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: { portfolio: items[0] },
		revalidate: 1,
	};
};

export default function PortfolioDetails({ portfolio }) {
	if (!portfolio) return <Skeleton />;

	const {
		description,
		gallery,
		name,
		related,
		summary,
		thumbnail,
		url,
		demoUrl,
		technology,
		approach,
		problem,
		result,
		richTextProblem,
		richTextApproach,
		richTextResult,
	} = portfolio.fields;

	return (
		<div>
			<Head>
				<title>{name} | Kenny Portfolio</title>
				<meta></meta>
				<link rel='icon' href='/favicon.ico'></link>
			</Head>

			<div className=' flex flex-col mt-24 md:mt-28   '>
				<div className=" max-w-[200rem]  mx-3 md:mx-9  relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0  after:outline-2 after:border-b-4 after:-outline-offset-2  after:outline-gray-700/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20   after:pointer-events-none ">
					<div className='lg:grid lg:grid-cols-2 lg:gap-16 '>
						<div className='lg:pb-16'>
							<div className='bg-gradient-to-r gap-2 from-green-500 to-orange-500 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
								<span>Company name</span>
								<span>&bull;</span>
								<span>Year 2000</span>
							</div>

							<h3 className='font-serif text-3xl mt-2 md:mt-5 md:text-5xl'>
								{name}
							</h3>

							{description && (
								<div className=' md:text-lg lg:text-xl text-gray-900/80 mt-4  mx-auto'>
									{description}
								</div>
							)}


							<div className='flex gap-2 text-sm md:text-base border-gray-900/5 text-gray-700/60 mb-4 mt-8 '>
							<BiCheckCircle className='w-5 h-6 md:w-6 md:h-7 ' />
							<span> Tech used:</span>
						</div>

						<div className='grid grid-cols-2 md:grid-cols-4'>
							{technology.map((tech, i) => {
								return (
									<div
										key={tech.sys.id}
										className={
											"inline-flex items-center gap-4 py-2"
										}>
										<Image
											src={`https:${tech.fields.file.url}?fm=webp`}
											width='45'
											height='45'
											alt='technology icon'
											className='w-7 '
										/>

										<span
											target='_blank'
											rel='noopener noreferrer'
											className={"text-gray-700/60 text-xs md:text-sm uppercase"}>
											{tech.fields.title}
										</span>
									</div>
								);
							})}
							</div>


							

							<hr className='border-t-2 border-gray-900/5 mt-4 md:mt-5' />

							
							<div className='flex  lg:flex-row  items-start justify-start md:gap-16 gap-x-3  text-sm md:text-base'>
									<Button
										className={"bg-white text-black"}
										text={"Live Demo"}
										link={demoUrl}
										icon={<BiRightArrow />}
									/>
									<Button
										text={"View Code"}
										link={url}
										icon={<BiRightArrow />}
									/>
								</div>	
							
					
						</div>

						<div>
							<Image
								src={`https:${thumbnail.fields.file.url}?fm=webp`}
								blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
								placeholder='blur'
								height={1000}
								width={1000}
								quality={100}
								className='w-full rounded-t-2xl   mt-8 -mb-7 md:-mb-0 lg:mt-0 lg:absolute md:w-[] lg:w-[45rem] '
								alt=''
							/>
						</div>
					</div>
				</div>

<div> 


				<CaseStudy
					richTextProblem={richTextProblem}
 					richTextApproach={richTextApproach}
 					richTextResult={richTextResult}
 					problem={problem}
 					approach={approach}
 					result={result}
 				/></div>
			</div>

			




		</div>
	);
}

// <div className='mt-24 lg:mt-16'>
// 				<div className='bg-red-200 flex items-center'>
// 					<div className='flex flex-col lg:flex-row w-full '>
// 						<div className='w-full '>
// 							{gallery && gallery.length === 1 && (
// 								<a href={demoUrl} target='_blank' rel='noopener noreferrer'>
// 									<Image
// 										blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
// 										placeholder='blur'
// 										src={`https:${gallery[0].fields.file.url}?fm=webp`}
// 										width={gallery[0].fields.file.details.image.width}
// 										height={gallery[0].fields.file.details.image.height}
// 										className='w-full'
// 									/>
// 								</a>
// 							)}

// 							{/*gallery && gallery.length > 1 && <Carousel images={gallery} />*/}
// 						</div>
// 						<div className=' mb-8 px-8  lg:pl-8 bg-green-200 w-full'>
// 							<div className='flex flex-col'>
// 								<div className='mb-5 md:mt-8 lg:mt-0'>
// 									<h1 className=' font-serif text-3xl md:text-5xl text-center mt-6'>
// 										{name}
// 									</h1>
// 									{description && (
// 										<div className='text-center md:text-lg lg:text-xl text-gray-900/80 mt-4 max-w-md mx-auto'>
// 											{description}
// 										</div>
// 									)}
// 								</div>

// 								<div className='mb-1  md:inline-flex md:justify-center md:items-center '>
// 									<div className='text-center md:text-lg lg:text-xl text-gray-900/80 mt-4 mx-auto '>
// 										<h4 className='text-left'>Technology used: </h4>
// 										<div className='flex flex-wrap md:flex-none py-0.5 gap-6 pr-6 mt-6  '>
// 											{technology.map((tech, i) => {
// 												//console.log("TECH " ,tech)
// 												return (
// 													<div
// 														key={tech.sys.id}
// 														className={
// 															"inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-gray-500 rounded-lg"
// 														}>
// 														<Image
// 															src={`https:${tech.fields.file.url}?fm=webp`}
// 															width='45'
// 															height='45'
// 															alt='technology icon'
// 															className='w-8 '
// 														/>

// 														<span
// 															target='_blank'
// 															rel='noopener noreferrer'
// 															className={
// 																"font-semibold text-sm uppercase"
// 															}>
// 															{tech.fields.title}
// 														</span>
// 													</div>
// 												);
// 											})}
// 										</div>
// 									</div>
// 								</div>
// 							</div>

// 							<div className='flex   lg:flex-row md:justify-center md:gap-16 gap-x-3 gap-y-6 justify-evenly mt-8 '>
// 								<Button className={"bg-white text-black"} text={"Live Demo"} link={demoUrl} icon={<BiRightArrow />}  />
// 								<Button text={"View Code"} link={url} icon={<BiRightArrow />}  />
// 							</div>

// 							{/* <div className="flex flex-row lg:py-2">
//                 {url && (
//                   <div className=" ">
//                     <Button
//                       href={url}
//                       buttonColor={" bg-indigo-700 text-white"}
//                     >
//                       Github
//                     </Button>
//                   </div>
//                 )}
//                 {demoUrl && (
//                   <div className="">
//                     <Button
//                       href={demoUrl}
//                       buttonColor={" bg-white text-indigo-700"}
//                     >
//                       Demo
//                     </Button>
//                   </div>
//                 )}
//               </div>*/}
// 						</div>
// 					</div>
// 				</div>

// 				{/*<CaseStudy
// 					richTextProblem={richTextProblem}
// 					richTextApproach={richTextApproach}
// 					richTextResult={richTextResult}
// 					problem={problem}
// 					approach={approach}
// 					result={result}
// 				/>*/}
// 			</div>
