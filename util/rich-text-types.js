// /util/rich-text-types.js (or wherever this file is)

import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import hljs from 'highlight.js';
import { useEffect, useRef } from 'react';

// --- NEW: A helper component for syntax highlighting ---
const CodeBlock = ({ code }) => {
    const codeRef = useRef(null);

    useEffect(() => {
        if (codeRef.current) {
            hljs.highlightElement(codeRef.current);
        }
    }, [code]);

    return (
        <pre className="my-6 rounded-md">
            <code ref={codeRef} className="rounded-md">
                {code}
            </code>
        </pre>
    );
};

// Your existing website URL constant
const website_url = "https://www.kennywhyte.com";

export const renderOptions = {
    // NOTE: We've removed PARAGRAPH, LISTS, and HEADINGS.
    // The `prose` class on the parent element will style them automatically.

    renderNode: {
        // --- UPDATED: Optimized Images with next/image ---
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { url, details } = node.data.target.fields.file;
            const { width, height } = details.image;
            const { title, description } = node.data.target.fields;

            return (
                <figure className='my-8 flex flex-col items-center'>
                    <Image
                        src={`https:${url}`}
                        width={width}
                        height={height}
                        alt={description || title || 'Blog post image'}
                        className='rounded-lg shadow-lg'
                    />
                    {title && (
                        <figcaption className="mt-2 text-sm text-center text-gray-600">
                            {title}
                        </figcaption>
                    )}
                </figure>
            );
        },

        // --- UPDATED: Professional Code Blocks ---
        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
            const contentType = node.data.target.sys.contentType.sys.id;
            const fields = node.data.target.fields;

            if (contentType === "codeBlock") {
                return <CodeBlock code={fields.code} />;
            }

            // --- UPDATED: Responsive Video Embeds ---
            if (contentType === "videoEmbed") {
                return (
                    <div className="my-8 aspect-w-16 aspect-h-9">
                        <iframe
                            src={fields.embedUrl}
                            title={fields.title}
                            className="w-full h-full"
                            allowFullScreen
                        />
                    </div>
                );
            }
        },

        // This is great, handles internal/external links perfectly.
        // prose will style this, but a custom color override is fine if you want it.
        [INLINES.HYPERLINK]: (node) => {
            const uri = node.data.uri;
            const isInternal = uri.startsWith(website_url) || uri.startsWith('/');
            return (
                <a
                    href={uri}
                    target={isInternal ? "_self" : "_blank"}
                    rel={isInternal ? "" : "noopener noreferrer"}
                    // Using prose's link styling is often best, but you can override:
                    // className='text-blue-600 hover:underline'
                >
                    {node.content[0].value}
                </a>
            );
        },

        // Your custom blockquote is well-designed. Let's keep it!
        [BLOCKS.QUOTE]: (node, children) => (
            <blockquote className='my-6 border-l-4 border-gray-300 pl-4 italic text-gray-700'>
                {children}
            </blockquote>
        ),

        // A simple HR is fine. prose will style this as well.
        [BLOCKS.HR]: () => <hr className='my-8' />,
    },
};