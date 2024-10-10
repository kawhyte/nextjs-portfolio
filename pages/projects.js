import { createClient } from "contentful";
import PortfolioCards from "../components/PortfolioCards";
import Hero from "../components/Hero";
// import Section from "../components/Section";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import ProjectDetailHeader from "../components/ProjectDetailHeader";
import SectionHero from "../components/SectionHero";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: "portfolio", order: 'fields.sortByNumber' });
	
	return {
		props: {
			portfolio: res.items,
		},
	};
}

export default function Recipes({ portfolio }) {
	return (
		<> 
		<SectionHero title={"All Projects"} description={"Take a look at some of the stuff I've built!"}/>
		<div className='lg:container lg:mx-auto my-20'>
			<div className='container mx-auto flex justify-between py-2'>
			
			
			</div>
			

			<PortfolioCards items={portfolio} />
		</div></>
	);
}
