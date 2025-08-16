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

import { GetStaticProps, NextPage } from "next";

import type {
	PortfolioItem,
	BlogPost,
	IndexPageProps,
} from "../types/contentful";



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
		<div className=''>
			<Head>
				<title>Home | Kenny Portfolio</title>
				<meta></meta>
				<link rel='icon' href='/favicon.ico'></link>
			</Head>
			{/**/}
			<Hero />
			

			    {/* --- 1. FEATURED PROJECTS (MOVED UP) --- */}
            {/* <section id="projects" className="py-20">
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
            </section> */}


			 


			{/* --- 4. RECENT BLOG POSTS --- */}
            {/* <section id="blog" className="py-20 bg-gray-50">
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
            </section> */}

			
		</div>
	);
}
