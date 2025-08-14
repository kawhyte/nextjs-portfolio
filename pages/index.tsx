import React from "react"; // Import React

import { createClient } from "contentful";
import PortfolioCards from "../components/PortfolioCards";
import BlogCards from "../components/BlogCards";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import TechStack from "../components/TechStack";
import Link from "next/link";
import Head from "next/head";
import SectionTitle from "../components/SectionTitle";
import Button from "../ui/Button";
import Quote from "../components/Quote";
import { ImArrowUpRight2 } from "react-icons/im";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCsharp, SiJavascript } from "react-icons/si";
import { BiLogoGraphql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import techIcons from "../util/techIcons";
import { GetStaticProps, NextPage } from "next";

import type {
	PortfolioItem,
	BlogPost,
	IndexPageProps,
} from "../types/contentful";

// (Optional but recommended) Define interfaces for your Contentful data structures
// You might need to adjust these based on your actual Contentful models

// interface ContentfulImage {
// 	fields: {
// 		title: string;
// 		description?: string;
// 		file: {
// 			url: string;
// 			details: {
// 				size: number;
// 				image?: {
// 					width: number;
// 					height: number;
// 				};
// 			};
// 			fileName: string;
// 			contentType: string;
// 		};
// 	};
// 	sys: any; // Or import Contentful Sys type
// }

// interface PortfolioItemFields {
// 	title: string;
// 	slug: string;
// 	thumbnail: ContentfulImage; // Assuming thumbnail is an Asset
// 	featured: boolean;
// 	sortByNumber: number;
// 	// Add other fields from your 'portfolio' content type;
// }

// // Use Contentful's Entry type if you have the SDK types installed, otherwise define manually
// interface PortfolioItem {
// 	// Replace with import { Entry } from 'contentful'; if using SDK types
// 	sys: any; // Or Contentful Sys type
// 	fields: PortfolioItemFields;
// }

// interface BlogPostFields {
// 	title: string;
// 	slug: string;
// }

// interface BlogPost {
// 	// Replace with import { Entry } from 'contentful'; if using SDK types
// 	sys: any; // Or Contentful Sys type
// 	fields: BlogPostFields;
// }

// // Interface for the props passed to the Index page component
// interface IndexPageProps {
// 	portfolio: PortfolioItem[];
// 	blog: BlogPost[];
// }

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID || "",
		accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
	});

	// Fetch entries using the Contentful SDK generics
	const res = await client.getEntries({
		content_type: "portfolio",
		order: ["fields.sortByNumber"],
	});
	const res2 = await client.getEntries({ content_type: "blogPost" });

	// Safely handle potential undefined items and cast to your custom types
	const portfolioItems = res.items
		? (res.items as unknown as PortfolioItem[])
		: [];
	const blogItems = res2.items ? (res2.items as unknown as BlogPost[]) : [];

	return {
		props: {
			portfolio: portfolioItems,
			blog: blogItems,
		},
		revalidate: 1,
	};
};

const imageSize = "h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-10 ";

const languages = [
	"CSharp",
	"HTML",
	"NodeJS",
	"GraphQL",
	"NextJS",
	"CSS",
	"JavaScript",
	"React",
];

export default function Index({ portfolio, blog }) {
	portfolio = portfolio
		.filter((item) => item.fields.featured === true)
		.sort((a, b) => a.sortByNumber - b.sortByNumber);

	//console.log("new portfolio ", portfolio);
	return (
		<div className='mb-24 '>
			<Head>
				<title>Home | Kenny Portfolio</title>
				<meta></meta>
				<link rel='icon' href='/favicon.ico'></link>
			</Head>
			{/**/}
			<Hero />
			<TechStack
				languages={languages}
				sectionHeadtext={"Technology Stack"}
				description={
					"Here are a few of the technologies and tools I've been working with lately: "
				}
				header={"My Tech Stack"}
			/>

			<div className=''>
				<SectionTitle
					sectionHeadtext={"Real-world Results"}
					header={"Featured Projects"}
					description={"Take a look at some of the stuff I've built!"}
				/>

				<div className='my-20      '>
					{portfolio && portfolio.length > 0 ? (
						<PortfolioCards items={portfolio.slice(0, 4)} />
					) : (
						<div className='container'>No projects found.</div>
					)}

					<div className='lg:mt-0 lg:shrink-0 flex justify-center '>
						<div className=' inline-flex '>
							<Button
								className={"bg-white text-black"}
								text={"View All Projects"}
								link={"/projects"}
								icon={<ImArrowUpRight2 />}
							/>

							{/*<Button link={"/projects"}>View All Projects</Button>*/}
						</div>
					</div>
				</div>
				<Quote />
				<AboutSection />
				<div className='my-20'>
					<SectionTitle
						header={"Recent Blog Posts"}
						description={`Explores my journey as a software developer, diving into technical challenges, coding insights, and the latest technologies.`}
						sectionHeadtext={`spilling coffee on my keyboard`}
					/>

					{blog && blog.length > 0 ? (
						<BlogCards items={blog.slice(0, 4)} />
					) : (
						<div className='container'>No blog found.</div>
					)}

					<div className='lg:mt-0 lg:shrink-0 flex justify-center '>
						<div className=' inline-flex mt-10 '>
							<Button
								className={"bg-white text-black"}
								icon={<ImArrowUpRight2 />}
								text={"View All Blog Posts"}
								link={"/blogs"}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
