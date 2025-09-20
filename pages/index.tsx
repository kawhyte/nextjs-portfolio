import { ArrowUpRight } from "lucide-react";
import { createClient } from "contentful";
import PortfolioCards from "../components/PortfolioCards";
import Hero from "../components/Hero";
import Link from "next/link";
import SeoHead from "../components/SeoHead";
import { Button } from "@/components/ui/button";
import { GetStaticProps } from "next";
import type {
	PortfolioItem,
	BlogPost,
	IndexPageProps,
} from "../types/contentful";



export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID || "",
		accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
	});

	// Fetch entries using the Contentful SDK generics
	const res = await client.getEntries({
		content_type: "portfolio",
		// order: ["fields.sortByNumber"],
	});
	const res2 = await client.getEntries({ content_type: "blogPost" });

	// Safely handle potential undefined items and cast to your custom types
	const portfolioItems = res.items
		? (res.items as unknown as PortfolioItem[])
		: [];
	const blogItems = res2.items ? (res2.items as unknown as BlogPost[]) : [];

	return {
		props: {
			portfolio: portfolioItems,
			blog: blogItems,
		},
		revalidate: 10, // Checks for updates every 10 seconds
	};
};


export default function Index({ portfolio, blog }: IndexPageProps) {
	// Filter and sort featured portfolio items for homepage display
	const featuredPortfolio = portfolio
		.filter((item: PortfolioItem) => item.fields.featured === true)
		.sort((a: PortfolioItem, b: PortfolioItem) => (a.fields.displayOrder || 999) - (b.fields.displayOrder || 999));

	//console.log("featured portfolio ", featuredPortfolio);
	return (
		<div className=''>
			<SeoHead 
				title="Kenny Whyte - Full-Stack Engineer"
        		description="The portfolio of Kenny Whyte, a full-stack engineer specializing in C#, .NET, and React/Next.js. View projects, read blog posts, and get in touch."
			/>
			<Hero />
			

			    {/* --- 1. FEATURED PROJECTS (8-point spacing) --- */}
            <section id="projects" className="py-1000">
                <div className='container mx-auto text-center'>
                    <h2 className="text-4xl font-header font-bold leading-extra-8">Featured Projects</h2>
                    <p className="mt-200 text-lg text-muted-foreground leading-relaxed-8">Take a look at some of the stuff I've built!</p>
                </div>
                <div className='my-600'>
                    {featuredPortfolio.length > 0 ? (
                        <PortfolioCards items={featuredPortfolio} />
                    ) : (
                        <div className='container'>No featured projects found.</div>
                    )}
                    <div className='mt-200 flex justify-center'>
                        <Button asChild variant="outline" size="lg" className="border-teal-300 text-white bg-teal-400 hover:bg-teal-500 hover:text-white hover:border-teal-400">
                            <Link href="/projects">
                                View All Projects <ArrowUpRight className="ml-200 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>


			 


			{/* --- 4. RECENT BLOG POSTS --- */}
            {/* <section id="blog" className="py-20 bg-gray-50">
                <div className='container mx-auto text-center'>
                    <h2 className="text-4xl font-serif font-bold">Recent Blog Posts</h2>
                    <p className="mt-2 text-lg text-muted-foreground">My latest thoughts on technology and development.</p>
                </div>
                <div className='my-12'>
                    {blog && blog.length > 0 ? (
                        <BlogCards items={blog.slice(0, 3)} /> // Show 3 for a cleaner grid
                    ) : (
                        <div className='container'>No blog posts found.</div>
                    )}
                    <div className='mt-12 flex justify-center'>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/blog">
                                View All Posts <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section> */}

			
		</div>
	);
}
