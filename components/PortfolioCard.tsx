import Image from "next/image";
import React from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HighlightItem from "./HighlightItem";
import {PortfolioItem } from "../types/contentful";
import TechnologyBadge from "./TechnologyBadge";


interface PortfolioCardProps {
	portfolio: PortfolioItem;
}

// --- Main Portfolio Card Component ---
const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio }) => {
	// Destructure the new 'highlights' field
	const { name, slug, summary, thumbnail, projectHighlights, technologies } =
		portfolio.fields;
	const imageAltText =
		thumbnail.fields.title || name || "Portfolio project thumbnail";

	return (
		<div className='h-full flex flex-col'>
			{/* Responsive Layout: Vertical on md+, Side-by-side on lg+ */}
			<div className='grid grid-cols-1 md:grid-rows-[auto_1fr_auto] lg:grid-cols-2 lg:grid-rows-1 items-start gap-400 lg:gap-600 h-full'>

				{/* Image Section - Top on md+, Right on lg+ */}
				<div className='md:order-first lg:order-last'>
					<Link href={`/portfolio/${slug}`}>
						<div className='aspect-[16/9] md:aspect-[16/10] overflow-hidden rounded-lg border shadow-lg hover:shadow-2xl transition-shadow duration-300'>
							<Image
								src={`https:${thumbnail.fields.file.url}?fm=webp&w=800&q=80`}
								blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp&w=20&q=10`}
								placeholder='blur'
								height={thumbnail.fields.file.details?.image?.height || 500}
								width={thumbnail.fields.file.details?.image?.width || 800}
								className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
								alt={imageAltText}
							/>
						</div>
					</Link>
				</div>

				{/* Content Section */}
				<div className='flex flex-col h-full md:order-last lg:order-first'>
					<div className='flex-grow'>
						{/* Technology Badges */}
						{technologies && technologies.length > 0 && (
							<div className='flex flex-wrap gap-100 mb-200'>
								{technologies.map((tech) => (
									<TechnologyBadge key={tech.sys.id} technology={tech} />
								))}
							</div>
						)}

						{/* Title */}
						<h3 className='font-serif text-xl md:text-2xl lg:text-3xl font-bold mb-100'>
							{name}
						</h3>

						{/* Summary - Hidden on md in 2-column, shown on lg in side-by-side */}
						<p className='text-muted-foreground text-sm md:text-base mb-300 hidden lg:block'>
							{summary}
						</p>

						{/* Highlights - Reduced count for tighter layout */}
						<ul className='text-muted-foreground flex flex-col gap-150 mb-400'>
							{projectHighlights?.slice(0, 3).map((highlight) => (
								<HighlightItem key={highlight.sys.id} highlight={highlight} />
							))}
						</ul>
					</div>

					{/* CTA Button */}
					<div className='mt-auto'>
						<Button asChild className='w-full md:w-auto lg:w-full xl:w-auto'>
							<Link href={`/portfolio/${slug}`}>
								<span className='hidden lg:inline'>View Project Details</span>
								<span className='lg:hidden'>View Details</span>
								<ArrowUpRight className='ml-100 h-4 w-4' />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;
