import { createClient } from "contentful";
import PortfolioCards from "../components/PortfolioCards";
import Hero from "../components/Hero";
// import Section from "../components/Section";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import ProjectDetailHeader from "../components/ProjectDetailHeader";
import SectionHero from "../components/SectionHero";
import { GetStaticProps, NextPage } from "next";


import type {
	PortfolioItem,
	BlogPost,
	PortfolioPageProps,
} from "../types/contentful";


export const getStaticProps: GetStaticProps<PortfolioPageProps> = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID || "",
		accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
	});

	const res = await client.getEntries({
		content_type: "portfolio",
		// order: ["fields.sortByNumber"],
	});

	const portfolioItems = res.items
		? (res.items as unknown as PortfolioItem[])
		: [];

	return {
		props: {
			portfolio: portfolioItems,
		},
	};
}

export default function Recipes({ portfolio }) {

	console.log("PORTFOLIO", portfolio)
	return (
		<>
			<SectionHero
				title={"All Projects"}
				description={"Take a look at some of the stuff I've built!"}
			/>
			
			<div className='lg:container lg:mx-auto my-20'>
			

				<PortfolioCards items={portfolio} />
			</div>
		</>
	);
}
