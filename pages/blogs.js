import { createClient } from "contentful";
import BlogCards from "../components/BlogCards";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Link from "next/link";

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
		<div className='container mx-auto my-20'>
			<div className='container mx-auto flex justify-between py-2'>
				<h2 className='font-extrabold leading-tight tracking-tight text-gray-900 sm:text-2xl md:text-3xl'>
					Blog Posts
				</h2>
			</div>

			<BlogCards items={blogs} />
		</div>
	);
}
