import Link from "next/link";
import Image from "next/image";
import { BiArrowFromLeft, BiCheckCircle } from "react-icons/bi";
import { ImArrowUpRight2 } from "react-icons/im";
import Button from "../ui/Button";
import React from "react"; // Import React for FC type

// --- Type Definitions ---

// Define the structure for the Thumbnail's File field
interface ThumbnailFile {
	url: string;
	details?: { // Optional details
		image?: {
			width: number;
			height: number;
		};
	};
	fileName?: string; // Optional
	contentType?: string; // Optional
}

// Define the structure for the Thumbnail's Fields
interface ThumbnailFields {
	title?: string; // Optional title for the image itself
	description?: string; // Optional description
	file: ThumbnailFile;
}

// Define a simplified structure for the Thumbnail Asset
interface Thumbnail {
	sys: { id: string; type: 'Asset'; /* other sys props */ };
	fields: ThumbnailFields;
	metadata?: any; // Simplified for brevity
}

// Define the structure for a linked Technology Item Entry's Fields
interface TechnologyItemFields {
	title: string;
	// Add other fields if they exist on your Technology content type
}

// Define the structure for a linked Technology Item Entry
interface TechnologyItem {
	sys: { id: string; type: 'Entry'; contentType: { sys: { type: 'Link'; linkType: 'ContentType'; id: string; } }; /* other sys props */ };
	fields: TechnologyItemFields;
	metadata?: any; // Simplified for brevity
}

// Define the structure for the Portfolio Entry's Fields
interface PortfolioFields {
	name: string;
	slug: string;
	summary: string;
	thumbnail: Thumbnail;
	portfolioHighlights: string[]; // Array of strings
	technology?: TechnologyItem[]; // Optional array of linked Technology items
}

// Define a simplified structure for the Portfolio Entry
interface PortfolioEntry {
	sys: { id: string; type: 'Entry'; contentType: { sys: { type: 'Link'; linkType: 'ContentType'; id: string; } }; /* other sys props */ };
	fields: PortfolioFields;
	metadata?: any; // Simplified for brevity
}

// Define the props for the PortfolioCard component
interface PortfolioCardProps {
	portfolio: PortfolioEntry;
}

// --- Component Implementation ---

const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio }) => {
	// Destructure with type safety
	const { name, slug, summary, thumbnail, portfolioHighlights, technology } =
		portfolio.fields;

	// Fallback alt text for the image
	const imageAltText = thumbnail.fields.title || name || 'Portfolio project thumbnail';

	return (
		<div className=''>
			<div className='lg:grid lg:grid-cols-2 lg:gap-16 '>
				<div className='lg:pb-16'>
					{/* Render technology tags if they exist */}
					{technology && technology.length > 0 && (
						<div className=' flex flex-wrap justify-start gap-2 w-full mt-2'> {/* Adjusted justify-content and added gap */}
							{technology.slice(0, 4).map((item) => (
								<div key={item.sys.id} className='flex flex-col items-center'>
									<div className='bg-gradient-to-r rounded-xl md:flex-nowrap border px-2 py-1 from-green-500 to-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm text-transparent bg-clip-text'>
										{item.fields.title}
									</div>
								</div>
							))}
						</div>
					)}

					<h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl'>
						{name}
					</h3>
					<p className='text-gray-700/60 text-sm md:text-base'>{summary}</p>
					<hr className='border-t-2 border-gray-900/5 mt-4 md:mt-5' />
					<ul className=' text-gray-700/60 flex flex-col gap-4 mt-4 md:mt-5'>
						{/* Ensure portfolioHighlights exists before mapping */}
						{portfolioHighlights?.slice(0, 3).map((item) => (
							<li key={item} className='flex gap-2 text-sm md:text-base border-gray-900/5'>
								<BiCheckCircle className='w-5 h-6 md:w-6 md:h-7 flex-shrink-0' /> {/* Added flex-shrink-0 */}
								<span>{item}</span>
							</li>
						))}
					</ul>

					{/* Assuming Button component props are typed correctly */}
					<Button
						className={"mt-8"} // Added margin-top for spacing
						icon={<ImArrowUpRight2 />}
						text={"View Project Details"}
						link={`/portfolio/${slug}`}
					/>
					{/* Original Link/button commented out */}
					{/*<Link href={`/portfolio/${slug}`}>
						<button className='bg-black text-gray-200 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
							<span>View Project Details </span>
							<ImArrowUpRight2 className='w-4 h-4' />
						</button>
					</Link>*/}
				</div>

				<div>
					<Image
						src={`https:${thumbnail.fields.file.url}?fm=webp`}
						blurDataURL={`https:${thumbnail.fields.file.url}?fm=webp`}
						placeholder='blur'
						// Use dimensions from Contentful if available, otherwise provide reasonable defaults
						height={thumbnail.fields.file.details?.image?.height || 1000}
						width={thumbnail.fields.file.details?.image?.width || 1000}
						quality={100}
						className='md:w-full rounded-t-2xl border-2 mt-8 -mb-7 md:-mb-0 lg:mt-0 lg:absolute lg:w-[45rem] overflow-hidden object-cover' // Added object-cover
						alt={imageAltText} // Use defined alt text
					/>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;

// Original comments removed for clarity in the final TS version
