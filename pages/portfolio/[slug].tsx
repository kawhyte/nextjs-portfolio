// /Users/Kenny/Nextjs_Portfolio/nextjs-portfolio/pages/portfolio/[slug].tsx

import React from 'react'; // Import React
import { createClient } from "contentful";
import Image from "next/image";
import Head from "next/head";
import { BiArrowBack, BiRightArrow } from "react-icons/bi"; // BiArrowBack unused?
// import { BiArrowFromLeft, BiCheckCircle } from "react-icons/bi"; // Unused
import { ImArrowUpRight2 } from "react-icons/im"; // Unused?

import CaseStudy from "../../components/CaseStudy"; // Assuming typed
import Skeleton from "../../components/Skeleton"; // Assuming typed
import Button from "../../ui/Button"; // Assuming typed
import SectionTitle from "../../components/SectionTitle"; // Assuming typed
import HeroOrbit from "../../components/HeroOrbit"; // Assuming typed
import SparkleIcon from "/public/assets/icons/sparkle.svg"; // Assuming svg.d.ts exists
import StarIcon from "/public/assets/icons/star.svg"; // Assuming svg.d.ts exists
// import AboutSection from "../../components/AboutSection"; // Unused
import TechStack from "../../components/TechStack"; // Assuming typed

// Unused icon imports removed for clarity
// import techIcons from "../../util/techIcons"; // Unused

import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import type { Document as RichTextDocument } from "@contentful/rich-text-types";
import type { Options } from "@contentful/rich-text-react-renderer";
import { renderOptions } from "../../util/rich-text-types"; // Assuming typed

// Import your Contentful types (ensure PortfolioItemFields is updated)
import type {
	PortfolioItem,
	PortfolioItemFields,
	PortfolioDetailPageProps,
	ContentfulImage
} from "../../types/contentful"; // Adjust path as needed

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID || '', // Add fallback
	accessToken: process.env.CONTENTFUL_ACCESS_KEY || '', // Add fallback
});

// Type getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
	// Fetch only the slug field to optimize
	const res = await client.getEntries({
		content_type: "portfolio",
		select: ['fields.slug'] // Select only the slug field, use array
	});

	// Filter items to ensure 'fields.slug' is a string before mapping
	const validItems = res.items.filter(item => typeof item?.fields?.slug === 'string');

	const paths = validItems.map((item) => {
		return {
			params: { slug: item.fields.slug as string },
		};
	});

	return {
		paths,
		fallback: 'blocking', // Use 'blocking' or 'true'
	};
};

// Type getStaticProps
export const getStaticProps: GetStaticProps<PortfolioDetailPageProps, { slug: string }> = async (
    context: GetStaticPropsContext<{ slug: string }>
) => {
	const params = context.params;

    if (!params?.slug) {
        console.warn("getStaticProps called without slug in params for portfolio.");
        return { notFound: true };
    }

	// Use PortfolioItemFields generic
	const { items } = await client.getEntries({
		content_type: "portfolio",
		"fields.slug": params.slug,
		limit: 1
	});

	if (!items || items.length === 0) {
        console.warn(`No portfolio item found for slug: ${params.slug}`);
		return {
            notFound: true, // Return 404 page instead of redirect
		};
	}

	// Cast the fetched item to your PortfolioItem type
	const portfolioItem = items[0] as unknown as PortfolioItem;

	return {
		props: {
			portfolio: portfolioItem, // Pass the correctly typed item
		},
		revalidate: 60, // Revalidate interval
	};
};

// Type the Page Component
const PortfolioDetailPage: NextPage<PortfolioDetailPageProps> = ({ portfolio }) => {
	// Safety check, although getStaticProps should handle notFound
	if (!portfolio || !portfolio.fields) return <Skeleton />;

	// Destructure fields - use optional chaining extensively
	const {
		title, // Renamed from 'name' to match updated interface
		description,
		gallery,
		related,
		summary,
		thumbnail,
		caseStudyMainImage,
		url, // View Code URL
		demoUrl, // Live Demo URL
		technology, // Array of logo images
		tech, // Array of tech name strings
		approach,
		problem,
		result,
		richTextProblem,
		richTextApproach,
		richTextResult,
	} = portfolio.fields;

    // Determine image to display, prioritizing caseStudyMainImage
    const displayImage = caseStudyMainImage || thumbnail;
    const displayImageUrl = displayImage?.fields?.file?.url;
    const displayImageWidth = displayImage?.fields?.file?.details?.image?.width;
    const displayImageHeight = displayImage?.fields?.file?.details?.image?.height;
    const displayImageTitle = displayImage?.fields?.title;

	return (
		<div>
			<Head>
				<title>{title ? `${title} | Kenny Portfolio` : 'Project | Kenny Portfolio'}</title>
				<meta name="description" content={description || summary || `Details about the project: ${title || 'Untitled'}`} />
				<link rel='icon' href='/favicon.ico'></link>
			</Head>

			{/* Use className instead of class */}
			<section className='text-gray-600 bg-gradient'>
				{/* Hero Orbit Background */}
				<div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
					<div
						className='absolute inset-0 -z-30 opacity-5'
						style={{ backgroundImage: `url(${"/assets/images/grain.jpg"})` }}>
						{/* Rings */}
						<div className='hidden md:block md:size-[20px] lg:size-[120px] hero-ring'></div>
						<div className='hidden md:block md:size-[120px] lg:size-[320px] hero-ring'></div>
						<div className='hidden md:block md:size-[220px] lg:size-[520px] hero-ring'></div>
						<div className='hidden md:block md:size-[420px] lg:size-[720px] hero-ring'></div>
						<div className='hidden md:block md:size-[620px] lg:size-[920px] hero-ring'></div>
					</div>
					{/* Orbits */}
					<div className='hidden lg:block'>
						<HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration={"30s"} shouldSpin spinDuration={"3s"}>
							<SparkleIcon className='size-8 text-orange-300/70 ' />
						</HeroOrbit>
						<HeroOrbit size={440} rotation={90} shouldOrbit orbitDuration={"32s"} shouldSpin spinDuration={"3s"}>
							<SparkleIcon className='size-5 text-orange-300/70 ' />
						</HeroOrbit>
						<HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration={"34s"} shouldSpin spinDuration={"6s"}>
							<div className='size-2 rounded-full bg-green-300/50'></div>
						</HeroOrbit>
						<HeroOrbit size={540} rotation={178} shouldOrbit orbitDuration={"36s"} shouldSpin spinDuration={"3s"}>
							<SparkleIcon className='size-10 text-orange-300/70 ' />
						</HeroOrbit>
						<HeroOrbit size={550} rotation={10} shouldOrbit orbitDuration={"38s"} shouldSpin spinDuration={"6s"}>
							<StarIcon className='size-12 text-green-300 ' />
						</HeroOrbit>
						<HeroOrbit size={600} rotation={109} shouldOrbit orbitDuration={"40s"} shouldSpin spinDuration={"6s"}>
							<StarIcon className='size-8 text-green-300 ' />
						</HeroOrbit>
						<HeroOrbit size={620} rotation={-5} shouldOrbit orbitDuration={"42s"}>
							<div className='size-2 rounded-full bg-green-300/50'></div>
						</HeroOrbit>
						<HeroOrbit size={710} rotation={140} shouldOrbit orbitDuration={"44s"} shouldSpin spinDuration={"3s"}>
							<SparkleIcon className='size-14 text-orange-300/70 ' />
						</HeroOrbit>
						<HeroOrbit size={710} rotation={90} shouldOrbit orbitDuration={"46s"}>
							<div className='size-3 rounded-full bg-green-300/50'></div>
						</HeroOrbit>
						<HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration={"48s"} shouldSpin spinDuration={"6s"}>
							<StarIcon className='size-28 text-green-300 ' />
						</HeroOrbit>
					</div>
				</div>

				{/* Main Content */}
				<div className='md:container md:mx-auto flex flex-col px-5 pt-24 justify-center items-center relative z-10'> {/* Added relative z-10 */}
					<h1 className='font-serif title-font text-4xl md:text-5xl font-medium md:my-8'>
						{title ?? 'Project Details'} {/* Use title, provide fallback */}
					</h1>

					{/* Display Image if URL exists */}
					{displayImageUrl && (
						<Image
							src={`https:${displayImageUrl}?fm=webp&w=1024&q=75`}
							blurDataURL={displayImageUrl ? `https:${displayImageUrl}?fm=webp&q=1&w=10` : undefined}
							placeholder={displayImageUrl ? 'blur' : 'empty'}
							height={displayImageHeight || 600} // Provide fallback height
							width={displayImageWidth || 1000} // Provide fallback width
							quality={75} // Adjust quality
							className='rounded-t-2xl w-full max-w-xl lg:max-w-2xl mt-8 -mb-7 md:-mb-0 lg:mt-0' // Use max-w for control
							alt={displayImageTitle || title || 'Project main image'}
						/>
					)}

					{/* Buttons and Tech Icons Section */}
					<div className='w-full md:w-2/3 flex flex-col mt-12 lg:mt-0 my-8 items-center text-center'>
						{/* Technology Icons (Optional - using TechStack component below instead) */}
						{/* {technology && technology.length > 0 && (
							<div className='flex flex-col w-full justify-center items-center mb-8'>
								<SectionTitle sectionHeadtext={"Created with:"} header={""} description={""} />
								<div className='flex flex-wrap justify-center gap-4 mx-6 mt-2'>
									{technology.map((item) => (
										item?.fields?.file?.url && ( // Check if item and URL exist
											<div key={item.sys.id} className='flex flex-col items-center w-16'>
												<Image
													src={`https:${item.fields.file.url}?fm=webp&h=48&w=48&fit=pad`} // Request specific size
													width={48}
													height={48}
													alt={item.fields.title || 'technology icon'}
													className='object-contain' // Use object-contain
												/>
												<p className='text-gray-700 uppercase break-words text-xs mt-1'>
													{item.fields.title}
												</p>
											</div>
										)
									))}
								</div>
							</div>
						)} */}

						{/* Live Demo / View Code Buttons */}
						<div className='flex flex-col sm:flex-row justify-center gap-4 md:w-full lg:mt-12 z-30'>
							{demoUrl && ( // Conditionally render button
								<Button
									className={"bg-white text-black"}
									text={"Live Demo"}
									link={demoUrl}
									icon={<BiRightArrow />}
								/>
							)}
							{url && ( // Conditionally render button
								<Button
                                    text={"View Code"}
                                    link={url}
                                    icon={<BiRightArrow />}
                                />
							)}
						</div>
					</div>
				</div>

                {/* TechStack Component */}
                {/* Ensure 'tech' is an array of strings in Contentful matching keys in techIcons */}
                {tech && tech.length > 0 && (
                    <TechStack
                        languages={tech} // Pass the 'tech' string array
                        sectionHeadtext={"Technology Stack"}
                        description={"Tech used to create this project"}
                        header={"Languages/Frameworks"}
                    />
                )}

				{/* Case Study Component */}
				<div>
					<CaseStudy
						// Pass props conditionally, casting rich text
						richTextProblem={richTextProblem as RichTextDocument | undefined}
						richTextApproach={richTextApproach as RichTextDocument | undefined}
						richTextResult={richTextResult as RichTextDocument | undefined}
						problem={problem}
						approach={approach}
						result={result} 
						technology={undefined}						// technology={technology} // Pass if CaseStudy component needs it
					/>
				</div>
			</section>
		</div>
	);
}

export default PortfolioDetailPage;