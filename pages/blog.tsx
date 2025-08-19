import { createClient } from "contentful";
import BlogCards from "../components/BlogCards";
import Hero from "../components/Hero";
// import Section from "../components/Section";
import Link from "next/link";
import SectionHero from "../components/SectionHero";
import { GetStaticProps, NextPage } from "next";
import SeoHead from "../components/SeoHead";

import type {
	BlogPost,
	BlogsPageProps,
} from "../types/contentful";



export const getStaticProps: GetStaticProps<BlogsPageProps> = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID || "",
		accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
	});

	const res = await client.getEntries({ content_type: "blogPost" });
	const blogItems = res.items ? (res.items as unknown as BlogPost[]) : [];

	
	return {
		props: {
			blogs: blogItems,
		},
	};
}

export default function Recipes({ blogs }) {
	return (
		<> 
		<SeoHead 
			title="Blog"
			description="A collection of articles and thoughts on software development, technology, and more from Kenny Whyte."
			url="/blog"
		/>
		<SectionHero title={"All Blog Posts"} description={"Explores my journey as a software developer, diving into technical challenges, coding insights, and the latest technologies."}/>
		<div className='container mx-auto my-20'>
		

			<BlogCards items={blogs} />
		</div></>
	);
}
