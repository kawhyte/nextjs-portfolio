import { createClient } from "contentful";
import BlogCards from "../components/BlogCards";
import Hero from "../components/Hero";
// import Section from "../components/Section";
import Link from "next/link";
import SectionHero from "../components/SectionHero";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: "blogPost" });
	
	return {
		props: {
			blogs: res.items,
		},
	};
}

export default function Recipes({ blogs }) {
	return (
		<> 
		<SectionHero title={"All Blog Posts"} description={"Explores my journey as a software developer, diving into technical challenges, coding insights, and the latest technologies."}/>
		<div className='container mx-auto my-20'>
		

			<BlogCards items={blogs} />
		</div></>
	);
}
