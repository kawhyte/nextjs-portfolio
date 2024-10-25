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
import { HeroOrbit } from "../../components/HeroOrbit";
import SparkleIcon from "/public/assets/icons/sparkle.svg";
import StarIcon from "/public/assets/icons/star.svg";
import AboutSection from "../../components/AboutSection";
import TechStack from "../../components/TechStack";

import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCsharp, SiJavascript } from "react-icons/si";
import { BiLogoGraphql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import techIcons from "../../util/techIcons";
const imageSize = "h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-10 ";



const languages = [
	{
		name: "C#",
		logo: <SiCsharp className={imageSize} />,
	},
	{
		name: "HTML 5",
		logo: <FaHtml5 className={imageSize} />,
	},
	{
		name: "NodeJS",
		logo: <FaNodeJs className={imageSize} />,
	},
	// {
	// 	name: "Tailwind",
	// 	logo: <RiTailwindCssFill className='h-8 w-8' />,
	// },
	{
		name: "GraphQL",
		logo: <BiLogoGraphql className={imageSize} />,
	},
	{
		name: "NextJS",
		logo: <RiNextjsFill className={imageSize} />,
	},
	{
		name: "CSS",
		logo: <IoLogoCss3 className={imageSize} />,
	},
	{
		name: "JavaScript",
		logo: <SiJavascript className={imageSize} />,
	},
	{
		name: "React",
		logo: <FaReact className={imageSize} />,
	},
];

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
		tech,
		approach,
		problem,
		result,
		richTextProblem,
		richTextApproach,
		richTextResult,
	} = portfolio.fields;

	 console.log("portfolio.fields!!", portfolio.fields);

	return (
		<div>
			<Head>
				<title>{name} | Kenny Portfolio</title>
				<meta></meta>
				<link rel='icon' href='/favicon.ico'></link>
			</Head>

			<section class='text-gray-600 bg-gradient  '>
				<div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
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

					<div className='hidden lg:block'>
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
							size={540}
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
						<HeroOrbit
							size={620}
							rotation={-5}
							shouldOrbit
							orbitDuration={"42s"}>
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
						<HeroOrbit
							size={710}
							rotation={90}
							shouldOrbit
							orbitDuration={"46s"}>
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

				<div class='md:container md:mx-auto flex flex-col px-5 pt-24 justify-center items-center'>
					<h1 class=' font-serif title-font text-4xl md:text-5xl font-medium text-gray-500/90 md:my-8'>
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

					<div class='w-full md:w-2/3 flex flex-col mt-12 lg:mt-0 my-8 items-center text-center '>
						{/*	<div class='flex flex-col w-full  justify-center items-center'>
							<SectionTitle sectionHeadtext={"Created with:"} header={""} />
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

						<div class='flex flex-col justify-center md:flex-row md:w-full w-48  lg:mt-12 z-30 '>
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
				<TechStack languages={tech} sectionHeadtext={"Technology Stack"} description={"Tech used to create this project"} header={"Software/Framework"}/>
				
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
