import { createClient } from "contentful";
import Image from "next/image";
import Head from "next/head";
import { BiArrowBack, BiRightArrow } from "react-icons/bi";
import { BiArrowFromLeft, BiCheckCircle } from "react-icons/bi";
import { ImArrowUpRight2 } from "react-icons/im";

import CaseStudy from "../../components/CaseStudy";
import Skeleton from "../../components/Skeleton";
import Button from "../../ui/Button";
import SectionTitle from "../../components/SectionTitle";

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

	console.log("!!", technology)

	return (
		<div>
			<Head>
				<title>{name} | Kenny Portfolio</title>
				<meta></meta>
				<link rel='icon' href='/favicon.ico'></link>
			</Head>

			<section class='text-gray-600 mt-6  md:mt-12'>
				<div class='md:container md:mx-auto flex flex-col px-5 pt-24 justify-center items-center'>
					<h1 class=' font-serif title-font text-4xl md:text-5xl font-medium text-gray-900 md:mb-8'>
						{name}
					</h1>
					<Image
						src={`https:${thumbnail.fields.file.url}?fm=webp`}
						blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
						placeholder='blur'
						height={1000}
						width={1000}
						quality={100}
						className='w-full rounded-t-2xl   mt-8 -mb-7 md:-mb-0 lg:mt-0  md:w-[] lg:w-[55rem] '
						alt=''
					/>

					<div class='w-full md:w-2/3 flex flex-col my-8 items-center text-center '>
						{/*<div class='flex flex-col w-full  justify-center items-center'>
							<SectionTitle
								sectionHeadtext={"Tech used"}
								header={"Created with"}
							/>
							<div className=' flex  justify-between w-full  mx-6 mt-2'>
								{technology.map((item) => (
									<div key={item.sys.id} className='flex flex-col items-center'>
										<Image
											src={`https:${item.fields.file.url}?fm=webp`}
											width='45'
											height='45'
											alt='technology icon'
											className=' size-7 md:size-12 fill-red-900/80'
										/>

										<p className=' text-gray-700  fill-gray-200 uppercase break-words text-nowrap text-sm mt-2 md:text-sm lg:text-base'>
											{item.fields.title}
										</p>
									</div>
								))}
							</div>
						</div>*/}

						<div class='flex flex-col justify-center md:flex-row md:w-full w-60 lg:mt-12 '>
							<Button
								className={"bg-white text-black mr-20"}
								text={"Live Demo"}
								link={demoUrl}
								icon={<BiRightArrow />}
							/>
							<Button text={"View Code"} link={url} icon={<BiRightArrow />} />
						</div>
					</div>
				</div>
				<hr className='border-t-2 border-gray-900/5 ' />
				<div>
					<CaseStudy
						richTextProblem={richTextProblem}
						richTextApproach={richTextApproach}
						richTextResult={richTextResult}
						problem={problem}
						approach={approach}
						result={result}
						technology={technology}
					/>
				</div>
			</section>
		</div>
	);
}

// <div className=' flex flex-col mt-24 md:mt-28   '>
// 				<div className=" max-w-[200rem]  mx-3 md:mx-9  relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0  after:outline-2 after:border-b-4 after:-outline-offset-2  after:outline-gray-700/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20   after:pointer-events-none ">
// 					<div className='lg:grid lg:grid-cols-2 lg:gap-16 '>
// 						<div className='lg:pb-16'>
// 							<div className='bg-gradient-to-r gap-2 from-green-500 to-orange-500 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
// 								<span>Company name</span>
// 								<span>&bull;</span>
// 								<span>Year 2000</span>
// 							</div>

// 							<h3 className='font-serif text-3xl mt-2 md:mt-5 md:text-5xl'>
// 								{name}
// 							</h3>

// 							{description && (
// 								<div className=' md:text-lg lg:text-xl text-gray-900/80 mt-4  mx-auto'>
// 									{description}
// 								</div>
// 							)}

// 							<div className='flex gap-2 text-sm md:text-base border-gray-900/5 text-gray-700/60 mb-4 mt-8 '>
// 							<BiCheckCircle className='w-5 h-6 md:w-6 md:h-7 ' />
// 							<span> Tech used:</span>
// 						</div>

// 						<div className='grid grid-cols-2 md:grid-cols-4 '>
// 							{technology.map((tech, i) => {
// 								return (
// 									<div
// 										key={tech.sys.id}
// 										className={
// 											"flex flex-col justify-start items-center gap-2 py-2"
// 										}>
// 										<Image
// 											src={`https:${tech.fields.file.url}?fm=webp`}
// 											width='45'
// 											height='45'
// 											alt='technology icon'
// 											className='size-12'
// 										/>

// 										<span
// 											target='_blank'
// 											rel='noopener noreferrer'
// 											className={"text-gray-700/60 text-xs md:text-sm uppercase"}>
// 											{tech.fields.title}
// 										</span>
// 									</div>
// 								);
// 							})}
// 							</div>

// 							<hr className='border-t-2 border-gray-900/5 mt-4 md:mt-5' />

// 							<div className='flex  lg:flex-row  items-start justify-start md:gap-16 gap-x-3  text-sm md:text-base'>
// 									<Button
// 										className={"bg-white text-black"}
// 										text={"Live Demo"}
// 										link={demoUrl}
// 										icon={<BiRightArrow />}
// 									/>
// 									<Button
// 										text={"View Code"}
// 										link={url}
// 										icon={<BiRightArrow />}
// 									/>
// 								</div>

// 						</div>

// 						<div>
// 							<Image
// 								src={`https:${thumbnail.fields.file.url}?fm=webp`}
// 								blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
// 								placeholder='blur'
// 								height={1000}
// 								width={1000}
// 								quality={100}
// 								className='w-full rounded-t-2xl   mt-8 -mb-7 md:-mb-0 lg:mt-0 lg:absolute md:w-[] lg:w-[45rem] '
// 								alt=''
// 							/>
// 						</div>
// 					</div>
// 				</div>

// <div>

// 				<CaseStudy
// 					richTextProblem={richTextProblem}
//  					richTextApproach={richTextApproach}
//  					richTextResult={richTextResult}
//  					problem={problem}
//  					approach={approach}
//  					result={result}
//  				/></div>
// 			</div>

// 		</div>
