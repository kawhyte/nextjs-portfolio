import { createClient } from "contentful";
import PortfolioCards from "../components/PortfolioCards";
import BlogCards from "../components/BlogCards";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import TechStack from "../components/TechStack";
import Link from "next/link";
import Head from "next/head";
import PortfolioDetails from "./portfolio/[slug]";
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

const imageSize = "h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-10 ";

const languages = [
	"CSharp",
	 "HTML",
	 "NodeJS",
	'GraphQL',
	'NextJS',
	"CSS",
	"JavaScript",
	"React"
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
			<TechStack languages={languages} sectionHeadtext={"Technology Stack"} description={"Here are a few of the technologies and tools I've been working with lately: "} header={"My Tech Stack"} />

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

					<div className='lg:mt-0 lg:flex-shrink-0 flex justify-center '>
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
						className=''
					/>

					{blog && blog.length > 0 ? (
						<BlogCards items={blog.slice(0, 4)} />
					) : (
						<div className='container'>No blog found.</div>
					)}

					<div className='lg:mt-0 lg:flex-shrink-0 flex justify-center '>
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
