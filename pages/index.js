import { createClient } from "contentful";
import PortfolioCards from "../components/PortfolioCards";
import BlogCards from "../components/BlogCards";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Link from "next/link";
import Head from 'next/head'
import PortfolioDetails from './portfolio/[slug]';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: "portfolio" , order: 'fields.sortByNumber'}); 
	const res2 = await client.getEntries({ content_type: "blogPost" }); 
	
	return {
		props: {
			portfolio: res.items,
			blog: res2.items,
		},
		revalidate: 1
	};
}

export default function Index({ portfolio, blog }) {

	//console.log("portfolio ", portfolio)

	portfolio = portfolio.filter(item => item.fields.featured === true).sort((a,b)=>a.sortByNumber - b.sortByNumber);
	
	console.log("new portfolio ", portfolio)
	return (
        <div className='mb-24 '>
		<Head>
		<title>Home | Kenny Portfolio</title>
		<meta></meta>
		<link rel="icon" href="/favicon.ico"></link>
		</Head>
			<Hero />
			<Section />

			<div id="projects" className='container mx-auto flex flex-col justify-between px-4 py-2'>
				<div className='flex flex-row justify-between align-middle items-center py-2 container max-w-7xl mx-auto'>
					<h2 className='font-extrabold px-4 leading-tight tracking-tight text-gray-800 sm:text-2xl md:text-3xl'>
						Featured Projects
					</h2>
					
				</div>
        {portfolio && portfolio.length > 0 ? (
				<PortfolioCards items={portfolio.slice(0, 6)} />
        ) : (
          <div className="container">No projects found.</div>
        )}


		<div className=" flex mx-28 pt-7 justify-center  align-middle items-center"> 
		<Link className='flex flex-row cursor-pointer' href={`projects`} legacyBehavior>
					


						<p className="
						w-52
						font-medium
						text-center
						inline-block
						text-[0.9375rem]
						sm:text-xl
						tracking-tight
						leading-6
						text-shade-90
						z-10
						relative
						transition-transform
						duration-300
						overflow-hidden
						rounded-[36px]
						bg-white cursor-pointer
						hover:bg-green-400
						
						whitespace-nowrap
						scale-95 
					
 
				
						 hover:scale-100
						 focus:scale-100
						
						 py-2 md:py-4 px-3 md:px-7 sm:px-5 border-2 md:border-4 border-solid border-shade-90" data-component-name="signup" href="https://accounts.shopify.com/store-create?language=en&amp;locale=en&amp;signup_page=https%3A%2F%2Fwww.shopify.com%2Fstarter&amp;signup_types%5B%5D=starter_plan&amp;signup_types%5B%5D=paid_trial_experience&amp;_y=d9a21f4d-f419-4245-a520-8cef1fb9baa7&amp;_s=65c028c9-ed82-4e72-bac6-cd28f2cf50ed&amp;_p=ce43e3a3-57f2-474d-a73c-446dd8e97f99"><span class="hidden sm:inline">View All Projects</span><span class="inline sm:hidden">Sign up</span></p>


					</Link>
					</div>


        <div className='flex flex-row justify-between py-2 mt-28 container max-w-7xl mx-auto'>
        <h2 className='font-extrabold leading-tight tracking-tight text-gray-900 sm:text-2xl md:text-3xl'>
          Recent Blog Posts
        </h2>
        <Link className='flex flex-row cursor-pointer' href={`blogs`} legacyBehavior>
          <p className='pb-1 mb-6 text-sm text-blue-600 md:text-lg sm:text cursor-pointer'>
            View All Blog Posts
          </p>
        </Link>
      </div>

        {blog && blog.length > 0 ? (
				<BlogCards items={blog.slice(0, 4)} />
        ) : (
          <div className="container">No blog found.</div>
        )}
			</div>
		</div>
    );
}
