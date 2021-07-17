import { createClient } from "contentful";
import PortfolioCards from "../components/PortfolioCards";
import BlogCards from "../components/BlogCards";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Link from "next/link";

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
	};
}

export default function Index({ portfolio, blog }) {

	return (
		<div className='mb-24 '>
			<Hero />
			<Section />

			<div id="projects" className='container mx-auto flex flex-col justify-between px-4 py-2'>
				<div className='flex flex-row justify-between py-2 container max-w-7xl mx-auto'>
					<h2 className='font-extrabold leading-tight tracking-tight text-gray-900 sm:text-2xl md:text-3xl'>
						Featured Projects
					</h2>
					<Link className='flex flex-row cursor-pointer' href={`projects`}>
						<p className='pb-1 mb-6 text-sm text-blue-600 md:text-lg sm:text cursor-pointer'>
							View All Projects
						</p>
					</Link>
				</div>
        {portfolio && portfolio.length > 0 ? (
				<PortfolioCards items={portfolio.slice(0, 6)} />
        ) : (
          <div className="container">No projects found.</div>
        )}



        <div className='flex flex-row justify-between py-2 mt-28 container max-w-7xl mx-auto'>
        <h2 className='font-extrabold leading-tight tracking-tight text-gray-900 sm:text-2xl md:text-3xl'>
          Recent Blog Posts
        </h2>
        <Link className='flex flex-row cursor-pointer' href={`blogs`}>
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
