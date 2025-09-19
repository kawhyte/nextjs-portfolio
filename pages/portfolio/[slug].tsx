// /Users/Kenny/Nextjs_Portfolio/nextjs-portfolio/pages/portfolio/[slug].tsx

import React, { useEffect, useState } from 'react';
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
import SeoHead from "../../components/SeoHead";
import CaseStudy from "../../components/CaseStudy";
import Skeleton from "../../components/Skeleton";
import ChallengeSolutionCard, { SampleChallengeSolutionCard } from "../../components/ChallengeSolutionCard";
import MetricsCard, { SampleMetricsCard } from "../../components/MetricsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Clock,
  CheckCircle2,
  Eye
} from "lucide-react";
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
    const [isVisible, setIsVisible] = useState(false);

    if (!portfolio?.fields) return <Skeleton />;

    const {
        slug,
        name,
        summary,
        caseStudyMainImage,
        thumbnail,
        url,
        demoUrl,
        technologies,
        richTextProblem,
        richTextApproach,
        richTextResult,
        // New enhanced fields
        challenges,
        metrics,
        projectDuration,
        teamSize,
        projectStatus,
        clientName,
    } = portfolio.fields;

    const displayImage = caseStudyMainImage || thumbnail;
    const coverImageUrl = displayImage?.fields?.file?.url ? `https:${displayImage.fields.file.url}` : undefined;

    // Scroll animations
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };

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

        const fadeElements = document.querySelectorAll('.portfolio-fade-in');
        fadeElements.forEach((el) => observer.observe(el));

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <SeoHead
                title={name}
                description={summary}
                imageUrl={coverImageUrl}
                url={`/portfolio/${slug}`}
            />

            {/* Floating Back Button */}
            <div className={`fixed top-400 left-400 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-white/90 backdrop-blur-md border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <Link href="/projects" className="inline-flex items-center gap-100">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Back to Projects</span>
                    </Link>
                </Button>
            </div>

            <main className="min-h-screen mt-8">

                {/* Enhanced Hero Section */}
                <section className="portfolio-hero relative pt-800 pb-600 md:pt-1000 md:pb-800">
                    <div className="max-w-5xl mx-auto px-300 md:px-500">

                        {/* Navigation Breadcrumb */}
                        {/* <nav className="mb-600 portfolio-fade-in">
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-100 text-teal-600 hover:text-teal-700 transition-colors duration-200 text-sm"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Projects
                            </Link>
                        </nav> */}

                        {/* Project Header */}
                        <header className="text-center portfolio-fade-in portfolio-stagger-1">
                            {/* Project Status & Type */}
                            <div className="flex justify-center items-center gap-200 mb-400">
                                {projectStatus && (
                                    <Badge variant="secondary" className="bg-teal-50 text-teal-700 border-teal-200">
                                        <CheckCircle2 className="w-3 h-3 mr-100" />
                                        {projectStatus.charAt(0).toUpperCase() + projectStatus.slice(1).replace('_', ' ')}
                                    </Badge>
                                )}
                                {clientName && (
                                    <Badge variant="outline" className="border-gray-300">
                                        Client Project
                                    </Badge>
                                )}
                            </div>

                            {/* Title */}
                            <h1 className="font-serif font-bold text-gray-900 mb-600 portfolio-hero-title">
                                {name}
                            </h1>

                            {/* Summary */}
                            <p className="text-gray-600 mb-600 max-w-3xl mx-auto leading-relaxed portfolio-content">
                                {summary}
                            </p>

                            {/* Project Metadata */}
                            <div className="flex flex-wrap items-center justify-center gap-400 text-gray-600 mb-600">
                                {projectDuration && (
                                    <div className="flex items-center gap-100">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm">{projectDuration}</span>
                                    </div>
                                )}
                                {teamSize && (
                                    <div className="flex items-center gap-100">
                                        <Users className="w-4 h-4" />
                                        <span className="text-sm">{teamSize}</span>
                                    </div>
                                )}
                                {clientName && (
                                    <div className="flex items-center gap-100">
                                        <Eye className="w-4 h-4" />
                                        <span className="text-sm">{clientName}</span>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap justify-center items-center gap-300">
                                {demoUrl && (
                                    <Button asChild size="lg" className="magnetic-button bg-teal-500 hover:bg-teal-600 shadow-lg">
                                        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-100 h-4 w-4" />
                                            Live Demo
                                        </a>
                                    </Button>
                                )}
                                {url && (
                                    <Button asChild size="lg" variant="outline" className="magnetic-button">
                                        <a href={url} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-100 h-4 w-4" />
                                            View Code
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </header>
                    </div>
                </section>

                {/* Hero Image */}
                {displayImage && (
                    <section className="mb-800 portfolio-fade-in portfolio-stagger-2">
                        <div className="max-w-3xl mx-auto px-300 md:px-500">
                            <div className="portfolio-image-container">
                                <Image
                                    src={`https:${displayImage.fields.file.url}?fm=webp&w=1400&q=85`}
                                    width={displayImage.fields.file.details.image.width}
                                    height={displayImage.fields.file.details.image.height}
                                    alt={displayImage.fields.title || name}
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>

                            <div className='mt-12'>
                                <h2 className='font-serif mb-4 font-bold text-gray-900 text-2xl'>Technology Stack</h2>
                                 
                                    <p className="text-gray-600 mb-4  text-base ">
                                        The core technologies and tools used to bring this project to life.
                                    </p>
                                {technologies && technologies.length > 0 && ( <div className="flex flex-wrap gap-200">
                                        {technologies.map((tech) => (
                                            <div key={tech.sys.id} className=" rounded-lg p-200">
                                                <TechnologyBadge technology={tech} />
                                            </div>
                                        ))}
                                    </div>)}
                            </div>
                        </div>
                    </section>
                )}

                {/* Technology Stack */}
                {/* {technologies && technologies.length > 0 && (
                    <section className="mb-800 portfolio-fade-in portfolio-stagger-3">
                        <div className="max-w-5xl mx-auto px-300 md:px-500">
                            <Card className="overflow-hidden border-0 shadow-lg">
                                <CardContent className="p-600">
                                    <h2 className="font-serif font-bold text-gray-900 portfolio-section-title mb-400">
                                        Technology Stack
                                    </h2>
                                    <p className="text-gray-600 mb-600 portfolio-content">
                                        The core technologies and tools used to bring this project to life.
                                    </p>
                                    <div className="flex flex-wrap gap-200">
                                        {technologies.map((tech) => (
                                            <div key={tech.sys.id} className="tech-badge-enhanced rounded-lg p-200">
                                                <TechnologyBadge technology={tech} />
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                )} */}

                {/* Project Metrics */}
                {/* <section className="mb-800">
                    <div className="max-w-5xl mx-auto px-300 md:px-500">
                        <SampleMetricsCard />
                    </div>
                </section> */}

                {/* Challenge-Solution Cards */}
                {/* <section className="mb-800">
                    <div className="max-w-5xl mx-auto px-300 md:px-500">
                        <div className="mb-600 text-center portfolio-fade-in">
                            <h2 className="font-serif font-bold text-gray-900 portfolio-section-title mb-300">
                                Challenges & Solutions
                            </h2>
                            <p className="text-gray-600 portfolio-content max-w-2xl mx-auto">
                                Key challenges encountered during development and the innovative solutions implemented.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-600">
                            <SampleChallengeSolutionCard />
                        </div>
                    </div>
                </section> */}

                {/* Case Study */}
                <section className="mb-800">
                    <div className="max-w-6xl mx-auto px-300 md:px-500">
                        <Separator className="mb-800" />
                        <div className="">
                            <CaseStudy
                                richTextProblem={richTextProblem as RichTextDocument | undefined}
                                richTextApproach={richTextApproach as RichTextDocument | undefined}
                                richTextResult={richTextResult as RichTextDocument | undefined}
                            />
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                {/* <section className="mb-1200">
                    <div className="max-w-3xl mx-auto px-300 md:px-500 text-center portfolio-fade-in">
                        <Card className="bg-gradient-to-br from-teal-50 to-green-50 border-teal-200">
                            <CardContent className="p-800">
                                <h3 className="font-serif font-bold text-gray-900 portfolio-section-title mb-400">
                                    Interested in similar work?
                                </h3>
                                <p className="text-gray-600 mb-600 portfolio-content">
                                    Let's discuss how I can help bring your project ideas to life with the same attention to detail and technical excellence.
                                </p>
                                <div className="flex flex-wrap justify-center gap-300">
                                    <Button asChild size="lg" className="magnetic-button bg-teal-500 hover:bg-teal-600">
                                        <Link href="/projects">
                                            View More Projects
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="magnetic-button">
                                        <a href="mailto:hello@kennywhyte.com">
                                            Get In Touch
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section> */}
            </main>
        </>
    );
}

export default PortfolioDetailPage;
