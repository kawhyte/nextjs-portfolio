import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
import SeoHead from "../../components/SeoHead";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Options } from "@contentful/rich-text-react-renderer";
import type { Document as RichTextDocument } from "@contentful/rich-text-types";
import { defaultRenderOptions } from "../../lib/rich-text-types";
import Skeleton from "../../components/Skeleton";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { ArrowLeft, Clock, Calendar, Share2, BookOpen, Eye } from "lucide-react";
import type {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	NextPage,
} from "next";

import type {
	BlogPost,
	BlogPostFields,
	BlogPageProps,
	ContentfulImage,
} from "../../types/contentful";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID || "", // Add fallback
	accessToken: process.env.CONTENTFUL_ACCESS_KEY || "", // Add fallback
});

// Type getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
	// Fetch only the slug field to optimize
	const res = await client.getEntries({
		// Type the fields needed
		content_type: "blogPost",
		select: ["fields.slug"], // Select only the slug field
	});

	// Filter items to ensure 'fields.slug' is a string before mapping
	const validItems = res.items.filter(
		(item) => typeof item?.fields?.slug === "string"
	);

	const paths = validItems.map((item) => {
		// Now we know item.fields.slug is a string
		return {
			params: { slug: item.fields.slug as string }, // Asserting as string is safe here after filtering
		};
	});

	return {
		paths,
		fallback: "blocking", // Use 'blocking' or 'true' for better handling of new posts
	};
};

// Type getStaticProps
export const getStaticProps: GetStaticProps<
	BlogPageProps,
	{ slug: string }
> = async (
	context: GetStaticPropsContext<{ slug: string }> // Type the context
) => {
	const params = context.params; // Extract params

	// Handle case where params or slug might be undefined
	if (!params?.slug) {
		console.warn("getStaticProps called without slug in params.");
		return { notFound: true }; // Return 404 if slug is missing
	}

	const { items } = await client.getEntries({
		// Use BlogPostFields generic
		content_type: "blogPost",
		"fields.slug": params.slug,
		limit: 1, // Fetch only one item
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
	const [readingProgress, setReadingProgress] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	if (!blog || !blog.fields) return <Skeleton />;

	const { slug, title, thumbnail, photoCredit, richText, tags } = blog.fields;
	const publicationDate = blog.sys.createdAt;

	// Helper to generate a description/excerpt from the first paragraph
	const generateExcerpt = (
		document: RichTextDocument | undefined,
		length = 155
	): string => {
		if (!document) return "";
		const firstParagraph = document.content.find(
			(node) => node.nodeType === "paragraph"
		);
		if (firstParagraph) {
			const textContent = firstParagraph.content
				.filter((node) => node.nodeType === "text" && (node as any).value)
				.map((node) => (node as any).value)
				.join("");
			return textContent.length > length
				? textContent.slice(0, length) + "..."
				: textContent;
		}
		return "";
	};

	const excerpt = generateExcerpt(richText);
	const coverImageUrl = thumbnail?.fields?.file?.url
		? `https:${thumbnail.fields.file.url}`
		: undefined;

	// Enhanced read time calculation
	const calculateReadTime = (text: RichTextDocument | undefined): string => {
		if (!text) return "3 min read";
		const plainText = text.content
			.map((node) =>
				node.content?.map((innerNode) => (innerNode as any).value || "").join("") || ""
			)
			.join("");
		const wordsPerMinute = 200;
		const words = plainText.split(/\s+/).filter(word => word.length > 0).length;
		const minutes = Math.ceil(words / wordsPerMinute);
		return `${minutes} min read`;
	};

	// Reading progress tracker and scroll animations
	useEffect(() => {
		const handleScroll = () => {
			const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
			const progress = (window.scrollY / totalHeight) * 100;
			setReadingProgress(Math.min(progress, 100));
		};

		const handleVisibility = () => {
			setIsVisible(window.scrollY > 100);
		};

		// Intersection Observer for fade-in animations
		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('in-view');
				}
			});
		};

		const observer = new IntersectionObserver(observerCallback, {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		});

		// Observe all fade-in elements
		const fadeElements = document.querySelectorAll('.fade-in-up');
		fadeElements.forEach((el) => observer.observe(el));

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('scroll', handleVisibility);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('scroll', handleVisibility);
			observer.disconnect();
		};
	}, []);

	const readTime = calculateReadTime(richText);
	const formattedDate = new Date(publicationDate).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<>
			{/* Reading Progress Bar */}
			<div
				className="reading-progress"
				style={{ width: `${readingProgress}%` }}
			/>

			<SeoHead
				title={title}
				description={excerpt}
				imageUrl={coverImageUrl}
				url={`/blog/${slug}`}
				type="article"
			/>

			{/* Floating Back Button */}
			<div className={`fixed top-400 left-400 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
				<Button
					asChild
					variant="outline"
					size="sm"
					className="bg-white/90 backdrop-blur-md border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
				>
					<Link href="/blog" className="inline-flex items-center gap-100">
						<ArrowLeft className="w-4 h-4" />
						<span className="hidden sm:inline">Back to All Blogs</span>
					</Link>
				</Button>
			</div>

			<main className="min-h-screen">
				{/* Enhanced Hero Section */}
				<section className="blog-post-hero relative pt-800 pb-400 md:pt-1000 md:pb-600">
					<div className="max-w-5xl mx-auto px-300 md:px-500">

						{/* Navigation Breadcrumb */}
						{/* <nav className="mb-600 fade-in-up">
							<Link
								href="/blog"
								className="inline-flex items-center gap-100 text-teal-600 hover:text-teal-700 transition-colors duration-200 blog-meta-text"
							>
								<ArrowLeft className="w-4 h-4" />
								Back to Blog
							</Link>
						</nav> */}

						{/* Article Header */}
						<header className="fade-in-up mt-8">
							{/* Tags */}
							{/* {tags && tags.length > 0 && (
								<div className="flex flex-wrap gap-100 mb-400">
									{tags.slice(0, 3).map((tag) => (
										<Badge
											key={tag.sys.id}
											variant="secondary"
											className="bg-[var(--teal-surface)] text-teal-700 border-[var(--teal-border-subtle)] hover:bg-[var(--teal-surface-hover)] blog-meta-text"
										>
											{tag.fields.name}
										</Badge>
									))}
								</div>
							)} */}

							{/* Title */}
							<h1 className="font-serif font-bold text-gray-900 mb-600 blog-hero-title leading-tight">
								{title}
							</h1>

							{/* Metadata Row */}
							<div className="flex flex-wrap items-center gap-400 text-gray-600 mb-600">
								<div className="flex items-center gap-200">
									<div className="relative w-12 h-12">
										<Image
											src="/assets/images/memoji-avatar.png"
											alt="Kenny Whyte"
											fill
											className="rounded-full object-cover ring-2 ring-teal-100"
										/>
									</div>
									<div>
										<p className="font-medium text-gray-900 blog-meta-text">Kenny Whyte</p>
										<p className="text-gray-500 text-sm">Software Engineer</p>
									</div>
								</div>

								<div className="flex items-center gap-300 blog-meta-text">
									<div className="flex items-center gap-100">
										<Calendar className="w-4 h-4" />
										<span>{formattedDate}</span>
									</div>
									<div className="flex items-center gap-100">
										<Clock className="w-4 h-4" />
										<span>{readTime}</span>
									</div>
									<div className="flex items-center gap-100">
										<BookOpen className="w-4 h-4" />
										<span>Article</span>
									</div>
								</div>
							</div>

							{/* Share Button */}
							<div className="flex items-center gap-200">
								<Button
									variant="outline"
									size="sm"
									className="magnetic-button bg-white/70 border-gray-200 hover:bg-teal-50 hover:border-teal-200 transition-all duration-300"
									onClick={() => {
										if (navigator.share) {
											navigator.share({
												title: title,
												text: excerpt,
												url: window.location.href,
											});
										}
									}}
								>
									<Share2 className="w-4 h-4 mr-100" />
									Share
								</Button>
							</div>
						</header>
					</div>
				</section>

				{/* Hero Image */}
				{thumbnail?.fields?.file?.url && (
					<section className="mb-800 fade-in-up">
						<div className="max-w-5xl mx-auto px-300 md:px-500">
							<div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
								<Image
									src={`https:${thumbnail.fields.file.url}?fm=webp&w=1400&q=85`}
									fill
									alt={thumbnail.fields.title || title || "Blog post cover"}
									className="object-cover transition-transform duration-700 hover:scale-105"
									priority
								/>
								{photoCredit && (
									<div className="absolute bottom-200 right-200 bg-black/70 text-white px-200 py-100 rounded text-xs backdrop-blur-sm">
										Photo: {photoCredit}
									</div>
								)}
							</div>
						</div>
					</section>
				)}

				{/* Article Content */}
				<article className="max-w-4xl mx-auto px-300 md:px-500 pb-1600">
					<div className="blog-post-content fade-in-up">
						{richText &&
							documentToReactComponents(
								richText as RichTextDocument,
								defaultRenderOptions as Options
							)}
					</div>

					{/* Article Footer */}
					<footer className="mt-1200 pt-800 border-t border-gray-200 fade-in-up">
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-400">
							<div className="flex items-center gap-200">
								<p className="text-gray-600 blog-meta-text">
									Published on {formattedDate}
								</p>
							</div>

							<div className="flex items-center gap-200">
								<Button
									asChild
									variant="outline"
									className="magnetic-button"
								>
									<Link href="/blog">
										← More Articles
									</Link>
								</Button>

								<Button
									variant="outline"
									size="sm"
									className="magnetic-button"
									onClick={() => {
										if (navigator.share) {
											navigator.share({
												title: title,
												text: excerpt,
												url: window.location.href,
											});
										}
									}}
								>
									<Share2 className="w-4 h-4" />
								</Button>
							</div>
						</div>
					</footer>
				</article>
			</main>
		</>
	);
};

export default BlogDetailsPage;

// Export with a descriptive name
