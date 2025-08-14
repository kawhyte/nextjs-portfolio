// BlogCard.tsx

// import Link from "next/link";
import Image from "next/image";
import Card from "./Card"; // Assuming Card component exists and accepts className
// import CardHeader from "./CardHeader"; // This import was present but not used in the original code
import { ImArrowUpRight2 } from "react-icons/im";
import Button from "../ui/Button"; // Assuming Button component exists and accepts className, icon, text, link props
import React from 'react'; // React import might be needed depending on your setup, especially for JSX.Element return type

// --- Define Interfaces for Type Safety ---

import type {
	BlogCardProps,
} from "../types/contentful";



// --- Component Definition ---

const BlogCard = ({ blog }: BlogCardProps) => {
    // Destructure with confidence thanks to TypeScript interfaces
    const { title, slug, summary, thumbnail } = blog.fields;

    // Construct the image URL safely, providing a fallback if needed
    const imageUrl = thumbnail?.fields?.file?.url ? `https:${thumbnail.fields.file.url}?fm=webp` : '/placeholder-image.webp'; // Optional: Provide a real placeholder path

    return (
        <div className='flex flex-col max-w-6xl lg:mx-auto mt-10'>
            {/* Ensure the Card component accepts a className prop */}
            <Card className='flex flex-col lg:h-[310px] lg:flex-row'>
                <Image
                    // Use the safely constructed URL for both blurDataURL and src
                    blurDataURL={imageUrl}
                    placeholder='blur'
                    src={imageUrl}
                    width={460}
                    height={400}
                    className='object-cover h-44 lg:h-full lg:w-[350px] w-full'
                    alt={title || 'Blog post thumbnail'} // Provide a fallback alt text
                />

                <div className="">
                    <div className='p-6'>
                        <h2 className='font-serif text-2xl md:text-3xl clamp-2'>{title}</h2>
                        <p className='clamp-3 text-base md:text-lg lg:text-base max-w-xs md:max-w-2xl text-gray-500/90 mt-2'>
                            {summary}
                        </p>
                    </div>

                    <div className='flex lg:justify-center flex-col md:flex-row item-start align-top pb-10 ml-6 gap-4 w-44 md:w-52'>
                        {/* Ensure the Button component accepts these props */}
                        <Button className={"mt-2"} icon={<ImArrowUpRight2 />} text={"Read More"} link={`/blog/${slug}`} />

                        {/* Original commented-out Link button */}
                        {/*
                        <Link href={`/blog/${slug}`}>
                            <button className='inline-flex items-center gap-2 border border-white text-white bg-gray-900 px-6 h-12 rounded-xl'>
                                <span>Read More</span>
                                <ImArrowUpRight2 className='w-4 h-4' />
                            </button>
                        </Link>
                        */}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default BlogCard;

// Note: The large commented-out JSX block from the original code is omitted here for clarity,
// but you could convert that section similarly if needed.