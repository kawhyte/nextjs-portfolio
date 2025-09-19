import React, { useState } from "react";
import { BLOCKS, INLINES, Block, Inline } from "@contentful/rich-text-types";
import Image from "next/image";
import { Options } from "@contentful/rich-text-react-renderer";

interface ContentfulAsset {
	fields: {
		file: {
			url: string;
			details: {
				image: {
					width: number;
					height: number;
				};
			};
		};
		title?: string;
		description?: string;
	};
}

interface RichTextImageProps {
	asset: ContentfulAsset;
}

const RichTextImage: React.FC<RichTextImageProps> = ({ asset }) => {
	const [isLoading, setIsLoading] = useState(true);
	const url = asset?.fields?.file?.url;
	const width = asset?.fields?.file?.details?.image?.width;
	const height = asset?.fields?.file?.details?.image?.height;
	const title = asset?.fields?.title;
	const description = asset?.fields?.description;
	const imageAlt = description || title || "Embedded asset";

	if (!url || !width || !height) return null;
	const blurDataURL = `https:${url}?w=10&q=5&fm=webp`;

	return (
		<figure className='my-8 mx-auto max-w-lg overflow-hidden rounded-lg'>
			<Image
				src={`https:${url}?w=1200&q=80&fm=webp`}
				width={width}
				height={height}
				alt={imageAlt}
				placeholder='blur'
				blurDataURL={blurDataURL}
				className={`w-full h-auto duration-700 ease-in-out ${
					isLoading ? "blur-lg scale-105" : "blur-0 scale-100"
				}`}
				onLoad={() => setIsLoading(false)}
			/>
			{title && (
				<figcaption className='mt-2 text-sm text-center text-muted-foreground'>
					{title}
				</figcaption>
			)}
		</figure>
	);
};

export const defaultRenderOptions: Options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
			if (node.data.target?.fields?.file?.contentType.startsWith("image/")) {
				return (
					<RichTextImage
						asset={node.data.target as unknown as ContentfulAsset}
					/>
				);
			}
			return null;
		},
		[BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
			<ul className='list-disc list-outside space-y-2 my-4 ml-6'>{children}</ul>
		),
		[BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
			<ol className='list-decimal list-outside space-y-2 my-4 ml-6'>{children}</ol>
		),
		[BLOCKS.LIST_ITEM]: (node: Block | Inline, children: React.ReactNode) => (
			<li className='pl-2'>{children}</li>
		),
		[INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => (
			<a
				href={node.data.uri}
				target="_blank"
				rel="noopener noreferrer"
				className="text-teal-600 hover:text-teal-700 underline decoration-teal-600/30 hover:decoration-teal-600 underline-offset-2 transition-colors duration-200"
			>
				{children}
			</a>
		),
	},
};

export const proseRenderOptions: Options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
			if (node.data.target?.fields?.file?.contentType.startsWith("image/")) {
				return (
					<RichTextImage
						asset={node.data.target as unknown as ContentfulAsset}
					/>
				);
			}
			return null;
		},
		[BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => (
			<p>{children}</p>
		),
		[BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
			<ul className='my-4'>{children}</ul>
		),
		[BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
			<ol className='my-4'>{children}</ol>
		),
		[BLOCKS.LIST_ITEM]: (node: Block | Inline, children: React.ReactNode) => (
			<li>{children}</li>
		),
		[INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => (
			<a
				href={node.data.uri}
				target="_blank"
				rel="noopener noreferrer"
				className="text-teal-600 hover:text-teal-700 underline decoration-teal-600/30 hover:decoration-teal-600 underline-offset-2 transition-colors duration-200"
			>
				{children}
			</a>
		),
	},
};
