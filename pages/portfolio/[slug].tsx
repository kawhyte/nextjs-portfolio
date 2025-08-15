// /Users/Kenny/Nextjs_Portfolio/nextjs-portfolio/pages/portfolio/[slug].tsx

import React from 'react'; // Import React
import { createClient } from "contentful";
import Image from "next/image";

import { BiArrowBack, BiRightArrow } from "react-icons/bi"; // BiArrowBack unused?
// import { BiArrowFromLeft, BiCheckCircle } from "react-icons/bi"; // Unused
import { ImArrowUpRight2 } from "react-icons/im"; // Unused?




import SectionTitle from "../../components/SectionTitle"; // Assuming typed
import HeroOrbit from "../../components/HeroOrbit"; // Assuming typed
import SparkleIcon from "/public/assets/icons/sparkle.svg"; // Assuming svg.d.ts exists
import StarIcon from "/public/assets/icons/star.svg"; // Assuming svg.d.ts exists
// import AboutSection from "../../components/AboutSection"; // Unused
import TechStack from "../../components/TechStack"; // Assuming typed

// Unused icon imports removed for clarity
// import techIcons from "../../util/techIcons"; // Unused



import type { Options } from "@contentful/rich-text-react-renderer";
import { renderOptions } from "../../util/rich-text-types"; // Assuming typed





import Head from "next/head";
import  CaseStudy  from "../../components/CaseStudy"; // Ensure correct import
import Skeleton from "../../components/Skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Code, Home } from "lucide-react";

import type { GetStaticPaths, GetStaticProps } from "next";
import type { Document as RichTextDocument } from "@contentful/rich-text-types";



// Import your Contentful types (ensure PortfolioItemFields is updated)
import type {
	PortfolioItem,
	PortfolioItemFields,
	PortfolioDetailPageProps,
	ContentfulImage
} from "../../types/contentful"; // Adjust path as needed

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID || '', // Add fallback
	accessToken: process.env.CONTENTFUL_ACCESS_KEY || '', // Add fallback
});

// Type getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
	// Fetch only the slug field to optimize
	const res = await client.getEntries({
		content_type: "portfolio",
		select: ['fields.slug'] // Select only the slug field, use array
	});

	// Filter items to ensure 'fields.slug' is a string before mapping
	const validItems = res.items.filter(item => typeof item?.fields?.slug === 'string');

	const paths = validItems.map((item) => {
		return {
			params: { slug: item.fields.slug as string },
		};
	});

	return {
		paths,
		fallback: 'blocking', // Use 'blocking' or 'true'
	};
};

// Type getStaticProps
export const getStaticProps: GetStaticProps<PortfolioDetailPageProps, { slug: string }> = async (
    context: GetStaticPropsContext<{ slug: string }>
) => {
	const params = context.params;

    if (!params?.slug) {
        console.warn("getStaticProps called without slug in params for portfolio.");
        return { notFound: true };
    }

	// Use PortfolioItemFields generic
	const { items } = await client.getEntries({
		content_type: "portfolio",
		"fields.slug": params.slug,
		limit: 1
	});

	if (!items || items.length === 0) {
        console.warn(`No portfolio item found for slug: ${params.slug}`);
		return {
            notFound: true, // Return 404 page instead of redirect
		};
	}

	// Cast the fetched item to your PortfolioItem type
	const portfolioItem = items[0] as unknown as PortfolioItem;

	return {
		props: {
			portfolio: portfolioItem, // Pass the correctly typed item
		},
		revalidate: 60, // Revalidate interval
	};
};

// Type the Page Component
const PortfolioDetailPage: NextPage<PortfolioDetailPageProps> = ({ portfolio }) => {
	// Safety check, although getStaticProps should handle notFound
	if (!portfolio || !portfolio.fields) return <Skeleton />;

	// Destructure fields - use optional chaining extensively
	const {
		title, // Renamed from 'name' to match updated interface
		description,
		gallery,
		related,
		summary,
		thumbnail,
		caseStudyMainImage,
		url, // View Code URL
		demoUrl, // Live Demo URL
		technology, // Array of logo images
		tech, // Array of tech name strings
		approach,
		problem,
		result,
		richTextProblem,
		richTextApproach,
		richTextResult,
	} = portfolio.fields;


    
	console.log("portfolio.fields",portfolio.fields)
	    // Determine image to display, prioritizing caseStudyMainImage
    const displayImage = caseStudyMainImage || thumbnail;
    const displayImageUrl = displayImage?.fields?.file?.url;
    const displayImageWidth = displayImage?.fields?.file?.details?.image?.width;
    const displayImageHeight = displayImage?.fields?.file?.details?.image?.height;
    const displayImageTitle = displayImage?.fields?.title;

	return (
		 <main className='pt-24'>
		  <Head>
                <title>{`${title} | Kenny Portfolio`}</title>
                <meta name="description" content={summary || `Details about the project: ${title}`} />
                <link rel='icon' href='/favicon.ico' />
            </Head>

		
				   <section className="container mx-auto max-w-4xl text-center mb-16 md:mb-24">
                <h1 className='font-serif text-4xl md:text-6xl font-bold'>{title}</h1>
                <p className='mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto'>
                    {summary}
                </p>
                <div className='mt-8 flex justify-center items-center gap-4'>
                    {demoUrl && (
                        <Button asChild size="lg">
                            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                                <Home className="mr-2 h-4 w-4" /> Live Demo
                            </a>
                        </Button>
                    )}
                    {url && (
                        <Button asChild size="lg" variant="outline">
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                <Code className="mr-2 h-4 w-4" /> View Code
                            </a>
                        </Button>
                    )}
                </div>
            </section>

				{/* Main Content */}
				<div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Image Column */}
                    {displayImage && (
                        <div className="overflow-hidden rounded-lg border shadow-lg">
                            <Image
                                src={`https:${displayImage.fields.file.url}?fm=webp&w=1200&q=80`}
                                width={displayImage.fields.file.details.image.width}
                                height={displayImage.fields.file.details.image.height}
                                alt={displayImage.fields.title || title}
                                className="w-full h-auto"
                            />
                        </div>
                    )}

                    {/* Tech Stack Card */}
                    {tech && tech.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Technology Stack</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    The core technologies used to build this project.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {tech.map((item) => (
                                        <Badge key={item} variant="secondary">{item}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
                
                <Separator className="my-16 md:my-24" />
            </div>

                <div className="container mx-auto max-w-4xl">
                <CaseStudy
                    richTextProblem={richTextProblem as RichTextDocument | undefined}
                    richTextApproach={richTextApproach as RichTextDocument | undefined}
                    richTextResult={richTextResult as RichTextDocument | undefined}
                />
            </div>
			
		</main>
	);
}

export default PortfolioDetailPage;