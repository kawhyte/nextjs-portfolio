// In your /util/rich-text-types.js file

import React, { useState } from 'react';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

// --- Reusable Image Component (Unchanged) ---
const RichTextImage = ({ asset }) => {
    // ... (your existing RichTextImage component code)
    const [isLoading, setIsLoading] = useState(true);
    const url = asset?.fields?.file?.url;
    const width = asset?.fields?.file?.details?.image?.width;
    const height = asset?.fields?.file?.details?.image?.height;
    const title = asset?.fields?.title;
    const description = asset?.fields?.description;
    const imageAlt = description || title || 'Embedded asset';

    if (!url || !width || !height) return null;
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
                className={`w-full h-auto duration-700 ease-in-out ${isLoading ? 'blur-lg scale-105' : 'blur-0 scale-100'}`}
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

// --- 1. Default Render Options (for pages WITHOUT .prose) ---
// This version includes basic Tailwind classes for lists to ensure they are styled.
export const defaultRenderOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            if (node.data.target?.fields?.file?.contentType.startsWith('image/')) {
                return <RichTextImage asset={node.data.target} />;
            }
            return null;
        },
        [BLOCKS.UL_LIST]: (node, children) => (
            <ul className="list-disc list-inside space-y-2 my-4">{children}</ul>
        ),
        [BLOCKS.OL_LIST]: (node, children) => (
            <ol className="list-decimal list-inside space-y-2 my-4">{children}</ol>
        ),
        [BLOCKS.LIST_ITEM]: (node, children) => (
            <li>{children}</li>
        ),
        // Add any other default renderers here
    },
};


// --- 2. Prose Render Options (for pages WITH .prose) ---
// This version has NO classes on lists, allowing the prose styles to take over.
export const proseRenderOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            if (node.data.target?.fields?.file?.contentType.startsWith('image/')) {
                return <RichTextImage asset={node.data.target} />;
            }
            return null;
        },
        [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
        [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
        [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
        // Add any other prose-specific renderers here
    },
};

// --- DEPRECATED: You can rename or remove your old 'renderOptions' export ---
// export const renderOptions = defaultRenderOptions; 
