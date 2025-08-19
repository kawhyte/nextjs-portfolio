// /Users/Kenny/Nextjs_Portfolio/nextjs-portfolio/pages/blog/[slug].tsx

import React from 'react'; // Import React
import { createClient } from "contentful";
import Image from "next/image";
import SeoHead from "../../components/SeoHead";
// import Button from "../../components/Button"; // Unused
// import CaseStudy from "../../components/CaseStudy"; // Unused
// import ShareButtons from "../../components/ShareButton"; // Unused
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Options } from "@contentful/rich-text-react-renderer"; // Import Options type
import type { Document as RichTextDocument } from "@contentful/rich-text-types"; // Import Document type
// You might need BLOCKS, INLINES, MARKS if customizing renderOptions heavily
// import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { defaultRenderOptions } from "../../lib/rich-text-types"; // Assuming this exports typed Options
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
// pages/blog/[slug].tsx

// ... (imports remain the same)

const BlogDetailsPage: NextPage<BlogPageProps> = ({ blog }) => {
    if (!blog || !blog.fields) return <Skeleton />;

    const { slug, title, thumbnail, photoCredit, richText } = blog.fields;
    const publicationDate = blog.sys.createdAt; // Get the creation date from sys

    // Helper to generate a description/excerpt from the first paragraph
    const generateExcerpt = (document: RichTextDocument | undefined, length = 155): string => {
        if (!document) return '';
        const firstParagraph = document.content.find(node => node.nodeType === 'paragraph');
        if (firstParagraph) {
            const textContent = firstParagraph.content
                .filter(node => node.nodeType === 'text' && (node as any).value)
                .map(node => (node as any).value)
                .join('');
            return textContent.length > length ? textContent.slice(0, length) + '...' : textContent;
        }
        return ''; // Fallback
    };

    const excerpt = generateExcerpt(richText);
    const coverImageUrl = thumbnail?.fields?.file?.url ? `https:${thumbnail.fields.file.url}` : undefined;

    // A simple function to estimate read time
    const calculateReadTime = (text: RichTextDocument | undefined): string => {
        if (!text) return '3 min read'; // Default
        const plainText = text.content.map(node =>
            node.content.map(innerNode => (innerNode as any).value || '').join('')
        ).join('');
        const wordsPerMinute = 200;
        const words = plainText.split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return `${minutes} min read`;
    };

    return (
        // Use a more modern, centered layout container
        <main className='mt-20 px-4 py-8 md:py-12'>
            <SeoHead 
                title={title}
                description={excerpt}
                imageUrl={coverImageUrl}
                url={`/blog/${slug}`}
                type="article"
            />

            <article className="max-w-6xl mx-auto">
                {/* 1. REFINED HERO SECTION */}
                <header className="mb-8 md:mb-12">
                    <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4'>
                        {title}
                    </h1>

                    {/* 2. AUTHOR & METADATA SECTION */}
                    <div className="flex items-center space-x-4 text-gray-500">
                         {/* You can replace this with a real avatar */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/assets/images/memoji-avatar.png"
                                alt="Kenny Whyte"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-800">Kenny Whyte</p>
                            <p className="text-sm">
                                <span>{new Date(publicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                <span className="mx-1">·</span>
                                <span>{calculateReadTime(richText)}</span>
                            </p>
                        </div>
                    </div>
                </header>

                {/* 3. HERO IMAGE */}
                {thumbnail?.fields?.file?.url && (
                    <div className='mb-8 max-w-6xl mx-auto md:mb-12'>
                         <Image
                            src={`https:${thumbnail.fields.file.url}?fm=webp&w=1280&q=80`}
                            width={1280}
                            height={540}
                            alt={thumbnail.fields.title || title || 'Blog post thumbnail'}
                            className='w-full h-auto rounded-lg shadow-md'
                         />
                         {photoCredit && (
                            <p className='mt-2 text-xs text-center text-gray-500'>
                                Photo credit: {photoCredit}
                            </p>
                        )}
                    </div>
                )}

                {/* 4. CONTENT WITH PROSE FOR READABILITY */}
                <div className='prose prose-lg max-w-none'>
                    {richText && documentToReactComponents(richText as RichTextDocument, defaultRenderOptions as Options)}
                </div>
            </article>
        </main>
    );
}

export default BlogDetailsPage;

 // Export with a descriptive name
