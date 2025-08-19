// /Users/Kenny/Nextjs_Portfolio/nextjs-portfolio/pages/portfolio/[slug].tsx

import React from 'react';
import { createClient } from "contentful";
import Image from "next/image";
import SeoHead from "../../components/SeoHead";
import CaseStudy from "../../components/CaseStudy";
import Skeleton from "../../components/Skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FiHome, FiCode } from "react-icons/fi";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { Document as RichTextDocument } from "@contentful/rich-text-types";
import type { PortfolioItem, PortfolioDetailPageProps } from "../../types/contentful";
import TechnologyBadge from '../../components/TechnologyBadge';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
});

// --- Data Fetching (getStaticPaths is fine, but getStaticProps needs an update) ---

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "portfolio",
        select: ['fields.slug']
    });
    const validItems = res.items.filter(item => typeof item?.fields?.slug === 'string');
    const paths = validItems.map((item) => ({
        params: { slug: item.fields.slug as string },
    }));
    return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<PortfolioDetailPageProps, { slug: string }> = async (context) => {
    const { slug } = context.params || {};
    if (!slug) return { notFound: true };

    // --- UPDATED: Fetch linked entries for the tech stack ---
    const { items } = await client.getEntries({
        content_type: "portfolio",
        "fields.slug": slug,
        limit: 1,
        include: 2 // Include linked entries 2 levels deep
    });

    if (!items || items.length === 0) return { notFound: true };
    const portfolioItem = items[0] as unknown as PortfolioItem;

    return {
        props: { portfolio: portfolioItem },
        revalidate: 60,
    };
};

// const reactIconsMap: { [key: string]: React.ElementType } = {
//     react: FaReact,
//     javascript: SiJavascript,
//     css: SiCss3,
//     html: SiHtml5,
// };

// --- NEW: Helper component to render the correct icon ---
// const TechnologyBadge = ({ technology }: { technology: Technology }) => {
//     const { name, lucideIconName, customIcon } = technology.fields;
    
//     const IconComponent = lucideIconName ? reactIconsMap[lucideIconName.toLowerCase()] : undefined;

//     return (
//         <Badge variant="secondary" className="flex items-center gap-2">
//             {customIcon?.fields?.file?.url ? (
//                 <Image 
//                     src={`https:${customIcon.fields.file.url}`}
//                     width={16}
//                     height={16}
//                     alt={`${name} icon`}
//                 />
//             ) : IconComponent ? (
//                 <IconComponent className="h-4 w-4" />
//             ) : null}
//             <span>{name}</span>
//         </Badge>
//     );
// };


// --- Main Page Component ---
const PortfolioDetailPage: React.FC<PortfolioDetailPageProps> = ({ portfolio }) => {
    if (!portfolio?.fields) return <Skeleton />;
//  console.log("Portfoliot",portfolio.fields)
    const {
        slug,
        name,
        summary,
        caseStudyMainImage,
        thumbnail,
        url,
        demoUrl,
        // --- UPDATED: Use the new 'technologies' field ---
        technologies, 
        richTextProblem,
        richTextApproach,
        richTextResult,
    } = portfolio.fields;


    const displayImage = caseStudyMainImage || thumbnail;
    const coverImageUrl = displayImage?.fields?.file?.url ? `https:${displayImage.fields.file.url}` : undefined;

    return (
        <main className='pt-24'>
            <SeoHead 
                title={name}
                description={summary}
                imageUrl={coverImageUrl}
                url={`/portfolio/${slug}`}
            />

            <section className="container mx-auto max-w-4xl text-center mb-16 md:mb-24">
                <h1 className='font-serif text-4xl md:text-6xl font-bold'>{name}</h1>
                <p className='mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto'>
                    {summary}
                </p>
                <div className='mt-8 flex justify-center items-center gap-4'>
                    {demoUrl && (
                        <Button asChild size="lg">
                            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                                <FiHome className="mr-2 h-4 w-4" /> Live Demo
                            </a>
                        </Button>
                    )}
                    {url && (
                        <Button asChild size="lg" variant="outline">
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                <FiCode className="mr-2 h-4 w-4" /> View Code
                            </a>
                        </Button>
                    )}
                </div>
            </section>

            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {displayImage && (
                        <div className="overflow-hidden rounded-lg border shadow-lg">
                            <Image
                                src={`https:${displayImage.fields.file.url}?fm=webp&w=1200&q=80`}
                                width={displayImage.fields.file.details.image.width}
                                height={displayImage.fields.file.details.image.height}
                                alt={displayImage.fields.title || name}
                                className="w-full h-auto"
                            />
                        </div>
                    )}

                    {/* --- UPDATED: Tech Stack Card now uses the new 'technologies' field --- */}
                    {technologies && technologies.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Technology Stack</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    The core technologies used to build this project.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech) => (
                                        <TechnologyBadge key={tech.sys.id} technology={tech} />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
                
                <Separator className="my-16 md:my-24" />
            </div>

            <div className="container mx-auto max-w-6xl">
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
