// In your /util/rich-text-types.ts file

import React, { useState } from 'react';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

// --- NEW: A dedicated component for rendering images with a blur-in effect ---
const RichTextImage = ({ asset }) => {
    const [isLoading, setIsLoading] = useState(true);

    // Safely access asset data
    const url = asset?.fields?.file?.url;
    const width = asset?.fields?.file?.details?.image?.width;
    const height = asset?.fields?.file?.details?.image?.height;
    const title = asset?.fields?.title;
    const description = asset?.fields?.description;
    const imageAlt = description || title || 'Embedded asset';

    if (!url || !width || !height) {
        return null; // Don't render anything if essential data is missing
    }

    // Generate a tiny, low-quality placeholder for the blur effect
    const blurDataURL = `https:${url}?w=10&q=5&fm=webp`;

    return (
        <figure className='my-8 overflow-hidden rounded-lg shadow-md'>
            <Image
                src={`https:${url}?w=1200&q=80&fm=webp`}
                width={width}
                height={height}
                alt={imageAlt}
                placeholder="blur"
                blurDataURL={blurDataURL}
                className={`
                    w-full h-auto duration-700 ease-in-out
                    ${isLoading ? 'blur-lg scale-105' : 'blur-0 scale-100'}
                `}
                onLoadingComplete={() => setIsLoading(false)}
            />
            {title && (
                <figcaption className="mt-2 text-sm text-center text-muted-foreground">
                    {title}
                </figcaption>
            )}
        </figure>
    );
};


export const renderOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            // Check if the asset is an image before rendering
            if (node.data.target?.fields?.file?.contentType.startsWith('image/')) {
                return <RichTextImage asset={node.data.target} />;
            }
            // You can add handlers for other asset types here (e.g., videos, PDFs)
            return null;
        },
        // --- IMPORTANT: Add your other renderers here ---
        // For example, your renderers for quotes, links, etc., should be included
        // to ensure they continue to function correctly.
        /*
        [BLOCKS.QUOTE]: (node, children) => ( ... ),
        [INLINES.HYPERLINK]: (node) => ( ... ),
        */
    },
};
