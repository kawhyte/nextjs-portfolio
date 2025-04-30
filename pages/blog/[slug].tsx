// /Users/Kenny/Nextjs_Portfolio/nextjs-portfolio/pages/blog/[slug].tsx

import React from 'react'; // Import React
import { createClient } from "contentful";
import Image from "next/image";
import Head from "next/head";
// import Button from "../../components/Button"; // Unused
// import CaseStudy from "../../components/CaseStudy"; // Unused
// import ShareButtons from "../../components/ShareButton"; // Unused
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Options } from "@contentful/rich-text-react-renderer"; // Import Options type
import type { Document as RichTextDocument } from "@contentful/rich-text-types"; // Import Document type
// You might need BLOCKS, INLINES, MARKS if customizing renderOptions heavily
// import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { renderOptions } from "../../util/rich-text-types"; // Assuming this exports typed Options
import Skeleton from "../../components/Skeleton"; // Assuming Skeleton is typed or will be
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";

// Import your Contentful types
import type { BlogPost, BlogPostFields,BlogPageProps, ContentfulImage } from "../../types/contentful"; // Adjust path as needed

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID || '', // Add fallback
	accessToken: process.env.CONTENTFUL_ACCESS_KEY || '', // Add fallback
});

// Type getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
	// Fetch only the slug field to optimize
	const res = await client.getEntries({ // Type the fields needed
		content_type: "blogPost",
		select: ['fields.slug'] // Select only the slug field
	});

	// Filter items to ensure 'fields.slug' is a string before mapping
	const validItems = res.items.filter(item => typeof item?.fields?.slug === 'string')

	const paths = validItems.map((item) => {
		// Now we know item.fields.slug is a string
		return {
			params: { slug: item.fields.slug as string }, // Asserting as string is safe here after filtering
		};
	});

	return {
		paths,
		fallback: 'blocking', // Use 'blocking' or 'true' for better handling of new posts
	};
};


// Type getStaticProps
export const getStaticProps: GetStaticProps<BlogPageProps, { slug: string }> = async (
    context: GetStaticPropsContext<{ slug: string }> // Type the context
) => {
	const params = context.params; // Extract params

    // Handle case where params or slug might be undefined
    if (!params?.slug) {
        console.warn("getStaticProps called without slug in params.");
        return { notFound: true }; // Return 404 if slug is missing
    }

	const { items } = await client.getEntries({ // Use BlogPostFields generic
		content_type: "blogPost",
		"fields.slug": params.slug,
		limit: 1 // Fetch only one item
	});

	// Handle case where no item is found for the slug
	if (!items || items.length === 0) {
        console.warn(`No blog post found for slug: ${params.slug}`);
		return {
            notFound: true, // Return 404 page
		};
	}

	// Cast the fetched item to your BlogPost type
	const blogPost = items[0] as unknown as BlogPost;

	return {
		props: {
			blog: blogPost, // Pass the correctly typed blog post
		},
		revalidate: 60, // Revalidate interval in seconds (e.g., 1 minute)
	};
};

// Type the Page Component (Renamed from PortfolioDetails)
const BlogDetailsPage: NextPage<BlogPageProps> = ({ blog, }) => {
	// Add initial check for safety, although getStaticProps should handle notFound
	if (!blog || !blog.fields) return <Skeleton />; // Or return null/error component

	// Destructure fields - use optional chaining for safety on potentially missing fields
	const {
		slug,
		title,
		thumbnail, // This is ContentfulImage | undefined
		photoCredit,
		richText, // This is RichTextDocument | undefined
		// description, // Unused
		// gallery, // Unused
		// name, // Unused
		// related, // Unused
		// summary, // Unused
		// url, // Unused
		// demoUrl, // Unused
		// technology, // Unused
		// approach, // Unused
		// problem, // Unused
		// result, // Unused
		// richTextProblem, // Unused
		// richTextApproach, // Unused
		// richTextResult, // Unused
	} = blog.fields;

	// Construct share URL safely
	const shareURL = slug ? `https://www.kennywhyte.com/blog/${slug}` : undefined;

    // Safely access thumbnail URL and details
    const thumbnailUrl = thumbnail?.fields?.file?.url;
    const imageWidth = thumbnail?.fields?.file?.details?.image?.width;
    const imageHeight = thumbnail?.fields?.file?.details?.image?.height;
    const imageTitle = thumbnail?.fields?.title;

	return (
		<main className='mt-20'>
			<Head>
				{/* Use title safely */}
				<title>{title ? `${title} | Kenny Portfolio` : 'Blog Post | Kenny Portfolio'}</title>
				{/* Add a meta description */}
				<meta name="description" content={`Read the blog post: ${title || 'Untitled'}`} />
				<link rel='icon' href='/favicon.ico'></link>
			</Head>
			<div className='mb-8 w-full max-w-screen-lg mx-auto text-gray-900/90 '>
				<div className='pt-12 pb-10 mx-4 '>
					<h3 className='font-serif text-2xl mt-6 md:mt-5 md:text-4xl text-gray-700'>
						{title ?? 'Untitled Blog Post'} {/* Provide fallback title */}
					</h3>
				</div>

				{/* Render Image only if thumbnailUrl exists */}
				{thumbnailUrl && (
					<div className='text-gray-700/60'>
						<Image
							// Use optional chaining/nullish coalescing for blurDataURL
							blurDataURL={thumbnailUrl ? `https:${thumbnailUrl}?fm=webp&q=1&w=10` : undefined} // Lower quality/width for blur
							placeholder={thumbnailUrl ? 'blur' : 'empty'} // Use blur only if URL exists
							src={`https:${thumbnailUrl}?fm=webp&w=1024&q=75`} // Request specific width/quality
							// Provide valid numbers for width/height or use layout="fill"
                            width={imageWidth || 1024} // Use fetched width or fallback
                            height={imageHeight || 384} // Use fetched height or fallback
                            // layout="responsive" // Consider responsive layout if dimensions vary
							className='w-full h-auto lg:rounded-lg object-cover' // Adjust height to auto if using width/height props
							alt={imageTitle || title || 'Blog post thumbnail'} // Alt text fallback
						/>
						{/* Render photo credit only if it exists */}
						{photoCredit && (
							<span // Changed <a> to <span> as href="#" is not ideal
                                className='px-2 pt-4 text-base inline-flex items-center justify-center'>
								Photo credit: {photoCredit}
							</span>
						)}
					</div>
				)}

				{/* Conditionally render ShareButtons if needed and URL exists */}
				{/* {shareURL && <ShareButtons shareURL={shareURL} />} */}
			</div>

			<div className='px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-lg mx-auto text-lg leading-relaxed prose lg:prose-lg'>
				{/* Render rich text only if it exists */}
				{richText && documentToReactComponents(richText as RichTextDocument, renderOptions as Options)}
			</div>
		</main>
	);
}

export default BlogDetailsPage; // Export with a descriptive name
