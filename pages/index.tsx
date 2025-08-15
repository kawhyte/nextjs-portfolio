import React from "react"; // Import React
import { ArrowUpRight } from "lucide-react";

import { createClient } from "contentful";
import PortfolioCards from "../components/PortfolioCards";
import BlogCards from "../components/BlogCards";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import TechStack from "../components/TechStack";
import Link from "next/link";
import Head from "next/head";
import SectionTitle from "../components/SectionTitle";
// import Button from "../ui/Button";
import Quote from "../components/Quote";
import Image from "next/image";
import { ImArrowUpRight2 } from "react-icons/im";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BiLogoGraphql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { Button } from "@/components/ui/button";

// import techIcons from "../util/techIcons";
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
			{/* <TechStack
				languages={languages}
				sectionHeadtext={"Technology Stack"}
				description={
					"Here are a few of the technologies and tools I've been working with lately: "
				}
				header={"My Tech Stack"}
			/> */}


			    {/* --- 1. FEATURED PROJECTS (MOVED UP) --- */}
            <section id="projects" className="py-20">
                <div className='container mx-auto text-center'>
                    <h2 className="text-4xl font-serif font-bold">Featured Projects</h2>
                    <p className="mt-2 text-lg text-muted-foreground">Take a look at some of the stuff I've built!</p>
                </div>
                <div className='my-12'>
                    {portfolio.length > 0 ? (
                        <PortfolioCards items={portfolio.slice(0, 4)} />
                    ) : (
                        <div className='container'>No projects found.</div>
                    )}
                    <div className='mt-12 flex justify-center'>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/projects">
                                View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>


			 {/* --- 2. NEW TESTIMONIALS SECTION --- */}
            {/* <section id="testimonials" className="py-20 bg-gray-50">
                <div className="container mx-auto max-w-4xl">
                     <h2 className="text-4xl font-serif font-bold text-center mb-12">What My Colleagues Say</h2>
                     <TestimonialCard 
                        quote="Kenny is a highly skilled and dedicated developer who consistently delivers high-quality work. His problem-solving abilities and positive attitude make him a valuable asset to any team."
                        author="Jane Doe"
                        title="Senior Engineer at TechCorp"
                        avatarUrl="https://github.com/shadcn.png" // Replace with a real image URL
                     />
                </div>
            </section> */}

			{/* --- 3. NEW CONDENSED ABOUT SECTION --- */}
            <section id="about" className="py-20">
                 <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-1 flex justify-center">
                         <Image 
                            src="/assets/images/memoji-avatar.png" // Your memoji
                            width={200}
                            height={200}
                            alt="Kenny Whyte's Memoji"
                            className="rounded-full bg-green-200/50 p-3 shadow-lg"
                         />
                    </div>
                    <div className="md:col-span-2 text-center md:text-left">
                        <h2 className="text-4xl font-serif font-bold">A Little More About Me</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            I'm a full-stack engineer passionate about building beautiful, user-friendly applications. My core technologies include C#, .NET, React, and Next.js, but I'm always excited to learn something new. When I'm not coding, I enjoy traveling and exploring new coffee shops.
                        </p>
                        <div className="mt-6">
                             <Button asChild size="lg">
                                <Link href="/about">Learn More About Me</Link>
                            </Button>
                        </div>
                    </div>
                 </div>
            </section>


			{/* --- 4. RECENT BLOG POSTS --- */}
            <section id="blog" className="py-20 bg-gray-50">
                <div className='container mx-auto text-center'>
                    <h2 className="text-4xl font-serif font-bold">Recent Blog Posts</h2>
                    <p className="mt-2 text-lg text-muted-foreground">My latest thoughts on technology and development.</p>
                </div>
                <div className='my-12'>
                    {blog && blog.length > 0 ? (
                        <BlogCards items={blog.slice(0, 3)} /> // Show 3 for a cleaner grid
                    ) : (
                        <div className='container'>No blog posts found.</div>
                    )}
                    <div className='mt-12 flex justify-center'>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/blog">
                                View All Posts <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

			<div className=''>
				<SectionTitle
					sectionHeadtext={"Real-world Results"}
					header={"Featured Projects"}
					description={"Take a look at some of the stuff I've built!"}
				/>

				{/* <div className='my-20      '>
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

						</div>
					</div>
				</div> */}
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

					{/* <div className='lg:mt-0 lg:shrink-0 flex justify-center '>
						<div className=' inline-flex mt-10 '>
							<Button
								className={"bg-white text-black"}
								icon={<ImArrowUpRight2 />}
								text={"View All Blog Posts"}
								link={"/blogs"}
							/>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}
