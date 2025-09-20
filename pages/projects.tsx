import { createClient } from "contentful";
import PortfolioCards from "../components/PortfolioCards";
import SectionHero from "../components/SectionHero";
import { GetStaticProps } from "next";
import SeoHead from "../components/SeoHead";

import type {
	PortfolioItem,
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
	return (
		<>
			<SeoHead 
				title="Projects"
				description="Explore a collection of projects by Kenny Whyte, showcasing his skills in full-stack development, from web applications to case studies."
				url="/projects"
			/>
			<SectionHero
				title={"All Projects"}
				description={"Take a look at some of the stuff I've built!"}
			/>
			
			<div className=''>
			

				<PortfolioCards items={portfolio} />
			</div>
		</>
	);
}
