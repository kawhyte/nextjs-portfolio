import Image from "next/image";
import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HighlightItem from "./HighlightItem";
import { Highlight, PortfolioItem, Technology } from "../types/contentful";
import TechnologyBadge from "./TechnologyBadge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

interface PortfolioCardProps {
    portfolio: PortfolioItem;
}

// --- Main Portfolio Card Component ---
const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio }) => {
    // Destructure the new 'highlights' field
    const { name, slug, summary, thumbnail, projectHighlights, technologies } = portfolio.fields;
    const imageAltText = thumbnail.fields.title || name || 'Portfolio project thumbnail';

    return (
        <div className="bg-gray-100/50 rounded-2xl p-8 h-full flex flex-col">
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12'>
                <div className="flex flex-col">
                    <div>
                       
 {technologies && technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech) => (
                                        <TechnologyBadge key={tech.sys.id} technology={tech} />
                                    ))}

                                    
                                </div>)}
                        {/* {technologies && technologies.length > 0 && (
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {technologies.slice(0, 4).map((item) => (
                                    <Badge key={item.sys.id} variant="outline" className="bg-background">
                                        {item.fields.name}
                                    </Badge>
                                ))}
                            </div>
                        )} */}
                       <h3 className='font-serif text-2xl md:text-3xl font-bold'>{name}</h3>
                        
                        <p className='text-muted-foreground mt-2 text-sm md:text-base hidden md:block'>{summary}</p>

                        <hr className='my-5' />

                        {/* --- UPDATED: Use the new highlights logic --- */}
                        <ul className='text-muted-foreground flex flex-col gap-3'>
                            {projectHighlights?.slice(0, 4).map((highlight) => (
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
