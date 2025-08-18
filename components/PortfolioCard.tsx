import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

// --- Type Definitions ---
// It's best practice to define these in a separate types file (e.g., /types/contentful.ts)
interface Highlight {
    sys: { id: string };
    fields: {
        name: string;
        isMetric?: boolean;
        iconName?: string;
        link?: {
            sys: { contentType: { sys: { id: string } } };
            fields: { slug: string };
        };
    };
}

interface Technology {
    sys: { id: string };
    fields: { title: string };
}

interface PortfolioItem {
    fields: {
        name: string;
        slug: string;
        summary: string;
        thumbnail: any; // Replace 'any' with a proper ContentfulImage type
        highlights?: Highlight[];
        technology?: Technology[];
        projectHighlights?:Highlight[]
    };
}

interface PortfolioCardProps {
    portfolio: PortfolioItem;
}

// ---A dedicated component to render each highlight with advanced logic ---
const HighlightItem = ({ highlight }: { highlight: Highlight }) => {
    const { name, isMetric, iconName, link } = highlight.fields;
 console.log("HIGH", highlight.fields)
    // Determine which icon to use
    const IconComponent = iconName && LucideIcons[iconName] ? LucideIcons[iconName] : BiCheckCircle;
    
    // The main content of the highlight (icon and text)
    const content = (
        <div className={twMerge(
            "flex gap-3 items-start text-sm",
            isMetric && "font-bold text-green-700"
        )}>
            <IconComponent className={twMerge(
                "w-5 h-5 shrink-0 mt-0.5",
                isMetric ? "text-green-600" : "text-green-500"
            )} />
            <span>{name}</span>
        </div>
    );

    // If there's a link, wrap the content in a Next.js Link component
    if (link?.fields?.slug) {
        const contentType = link.sys.contentType.sys.id;
        const href = `/${contentType === 'portfolio' ? 'portfolio' : 'blog'}/${link.fields.slug}`;

        return (
            <li key={highlight.sys.id}>
                <Link href={href} className="hover:opacity-70 transition-opacity">
                    {content}
                </Link>
            </li>
        );
    }

    // Otherwise, just render the content in a list item
    return (
        <li key={highlight.sys.id}>
            {content}
        </li>
    );
};


// --- Main Portfolio Card Component ---
const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio }) => {
    // Destructure the new 'highlights' field
    const { name, slug, summary, thumbnail, projectHighlights, technology } = portfolio.fields;
    const imageAltText = thumbnail.fields.title || name || 'Portfolio project thumbnail';

    return (
        <div className="bg-gray-100/50 rounded-2xl p-8 h-full flex flex-col">
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12'>
                <div className="flex flex-col">
                    <div>
                        {technology && technology.length > 0 && (
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {technology.slice(0, 4).map((item) => (
                                    <Badge key={item.sys.id} variant="outline" className="bg-background">
                                        {item.fields.title}
                                    </Badge>
                                ))}
                            </div>
                        )}
                       <h3 className='font-serif text-2xl md:text-3xl font-bold'>{name}</h3>
                        
                        <p className='text-muted-foreground mt-2 text-sm md:text-base hidden md:block'>{summary}</p>

                        <hr className='my-5' />

                        {/* --- UPDATED: Use the new highlights logic --- */}
                        <ul className='text-muted-foreground flex flex-col gap-3'>
                            {projectHighlights?.slice(0, 3).map((highlight) => (
                                <HighlightItem key={highlight.sys.id} highlight={highlight} />
                            ))}
                        </ul>
                    </div>

                    <div className="flex-grow" />

                    <div className="mt-8">
                        <Button asChild>
                            <Link href={`/portfolio/${slug}`}>
                                View Project Details
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="lg:mt-0">
                    <Link href={`/portfolio/${slug}`}>
                        <div className="aspect-[16/10] overflow-hidden rounded-lg border shadow-lg hover:shadow-2xl transition-shadow duration-300">
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
            </div>
        </div>
    );
};

export default PortfolioCard;
