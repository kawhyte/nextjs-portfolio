import { createClient } from "contentful";
import PortfolioCards from "../components/PortfolioCards";
import BlogCards from "../components/BlogCards";
import Hero from "../components/Hero";
import Section from "../components/Section";
import TechStack from "../components/TechStack";
import Link from "next/link";
import Head from "next/head";
import PortfolioDetails from "./portfolio/[slug]";
import SectionTitle from "../components/SectionTitle";
import Button from "../ui/Button";
import Quote from "../components/Quote";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({
		content_type: "portfolio",
		order: "fields.sortByNumber",
	});
	const res2 = await client.getEntries({ content_type: "blogPost" });

	return {
		props: {
			portfolio: res.items,
			blog: res2.items,
		},
		revalidate: 1,
	};
}

export default function Index({ portfolio, blog }) {
	//console.log("portfolio ", portfolio)

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
			<Hero />
			{/*<TechStack />*/}
			
			

			<div className=''>
				<div className='my-20'>
					<SectionTitle
						header={"Featured Projects"}
						description={``}
					/>

					{portfolio && portfolio.length > 0 ? (
						<PortfolioCards items={portfolio.slice(0, 6)} />
					) : (
						<div className='container'>No projects found.</div>
					)}

					<div className='lg:mt-0 lg:flex-shrink-0 flex justify-center '>
						<div className='mt-6 inline-flex '>
							<Button link={"/projects"}>View All Projects</Button>
						</div>
					</div>
				</div>
				<Quote />
				{/* <Section />*/}
				<div className='my-20'>
					<SectionTitle
						header={"Recent Blog Posts"}
						description={``}
					/>

					{blog && blog.length > 0 ? (
						<BlogCards items={blog.slice(0, 4)} />
					) : (
						<div className='container'>No blog found.</div>
					)}

					<div className='lg:mt-0 lg:flex-shrink-0 flex justify-center '>
						<div className='mt-6 inline-flex '>
							<Button link={"/blogs"}>View All Blog Posts</Button>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
}
