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
		<div className='h-full flex flex-col overflow-hidden'>
			{/* Image Section - Flush to top and sides */}
			<div className='relative'>
				<Link href={`/portfolio/${slug}`}>
					<div className='aspect-[16/9] overflow-hidden'>
						<Image
							src={`https:${thumbnail.fields.file.url}?fm=webp&w=800&q=80`}
							blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp&w=20&q=10`}
							placeholder='blur'
							height={thumbnail.fields.file.details?.image?.height || 500}
							width={thumbnail.fields.file.details?.image?.width || 800}
							className='w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105 rounded-xl'
							alt={imageAltText}
						/>
					</div>
				</Link>
			</div>

			{/* Content Section */}
			<div className='flex flex-col flex-grow p-150'>
				{/* Technology Badges */}
				{technologies && technologies.length > 0 && (
					<div className='flex flex-wrap gap-100 mb-200'>
						{technologies.map((tech) => (
							<TechnologyBadge key={tech.sys.id} technology={tech} />
						))}
					</div>
				)}

				{/* Title */}
				<h3 className='font-serif text-lg md:text-xl lg:text-2xl font-bold mb-150'>
					{name}
				</h3>

				{/* Summary - Show on larger cards when there's space */}
				<p className='text-muted-foreground text-sm mb-200 line-clamp-2'>
					{summary}
				</p>

				{/* Highlights - Optimized for 2-column layout */}
				<ul className='text-muted-foreground flex flex-col gap-100 mb-300 flex-grow'>
					{projectHighlights?.slice(0, 3).map((highlight) => (
						<HighlightItem key={highlight.sys.id} highlight={highlight} />
					))}
				</ul>

				{/* CTA Button */}
				<div className='mt-auto'>
					<Button asChild size="sm" className='w-full'>
						<Link href={`/portfolio/${slug}`}>
							View Details
							<ArrowUpRight className='ml-100 h-4 w-4' />
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;
