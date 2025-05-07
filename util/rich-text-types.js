import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";

const website_url = "https://www.kennywhyte.com";
export const renderOptions = {
	renderNode: {
		[INLINES.EMBEDDED_ENTRY]: (node, children) => {
			// target the contentType of the EMBEDDED_ENTRY to display as you need
			if (node.data.target.sys.contentType.sys.id === "blogPost") {
				return (
					<a href={`/blog/${node.data.target.fields.slug}`}>
						{" "}
						{node.data.target.fields.title}
					</a>
				);
			}
		},

		[BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
			// target the contentType of the EMBEDDED_ENTRY to display as you need

			if (node.data.target.sys.contentType.sys.id === "codeBlock") {
				return (
					<pre>
						<code>{node.data.target.fields.code}</code>
					</pre>
				);
			}

			if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
				return (
					<iframe
						src={node.data.target.fields.embedUrl}
						height='100%'
						width='100%'
						frameBorder='0'
						scrolling='no'
						title={node.data.target.fields.title}
						allowFullScreen={true}
					/>
				);
			}
		},
		[BLOCKS.PARAGRAPH]: (node, children) => (
			<p className=' text-sm lg:text-base max-w-base text-gray-800/90 my-4 '>
				{children}
			</p>
		),
		// [BLOCKS.LIST_ITEM]: (node, children) => <li className='max-w-md space-y-1 text-gray-500 list-disc border border-red-300 dark:text-gray-400 inline-flex'>{children}</li>,
		// [BLOCKS.UL_LIST]: (node, children) => <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 '>{children} </ul>,
		// [BLOCKS.OL_LIST]: (node, children) => <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'> {children}</ul>,
		// [BLOCKS.HEADING_6]: (node, children) => <h6 className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'> {children}</h6>,
		// [BLOCKS.OL_LIST]: (node, children) => <p className='list list-decimal list-item'>{children}</p>,
		// [BLOCKS.HEADING_2]: (node, children) => <p className='  text-sm lg:text-base max-w-base text-gray-500/90'>{children}</p>,
		[INLINES.HYPERLINK]: (node) => {
			return (
				<a
					className='text-blue-500'
					href={node.data.uri}
					target={`${
						node.data.uri.startsWith(website_url) ? "_self" : "_blank"
					}`}
					rel={`${
						node.data.uri.startsWith(website_url) ? "" : "noopener noreferrer"
					}`}>
					{node.content[0].value}
				</a>
			);
		},
		[BLOCKS.QUOTE]: (node, children) => {
			// console.log("Ken", node.data);
			//console.log("Ken children",children)
			return (
				<blockquote className='text-xl italic font-semibold text-gray-900 dark:text-white'>
					<svg
						className='w-8 h-8 text-gray-400 dark:text-gray-600 mb-4'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 18 14'>
						<path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
					</svg>
					{children}
				</blockquote>
			);
		},
		[BLOCKS.HR]: (node, children) => <hr className='  my-8 ' />,

		[BLOCKS.EMBEDDED_ASSET]: (node, children) => {
			// Safely access the image URL, description, and title
			const file = node.data?.target?.fields?.file;
			const imageUrl = file?.url;
			const imageDetails = file?.details?.image;
			const description = node.data?.target?.fields?.description;
			const title = node.data?.target?.fields?.title;
		
			// If there's no image URL, don't render anything or render a placeholder
			if (!imageUrl) {
				// console.warn("Embedded asset missing URL:", node.data.target);
				return null; // Or return a placeholder component/message
			}
		
			// Construct the full image URL if it doesn't include the protocol
			const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `https:${imageUrl}`;
		
			const imageAlt = description || title || 'Embedded asset image';
		
			return (
				// This outer div provides vertical spacing for the block.
				// Adjust 'my-8' (margin top and bottom) as needed for your page flow.
				<div className='my-8'>
					{/* This div centers the image and its caption and restricts maximum width */}
					<div className='flex flex-col items-center max-w-md mx-auto'> {/* You can adjust max-w-xl (e.g., max-w-lg, max-w-2xl) */}
						<img
							src={fullImageUrl}
							alt={imageAlt}
							// HTML width/height attributes help prevent layout shift if dimensions are known
							// These values are for the intrinsic size; CSS will control the display size.
							width={imageDetails?.width}
							height={imageDetails?.height}
							// Tailwind CSS classes for styling:
							// - w-full: image takes the full width of its parent (up to max-w-xl)
							// - h-auto: height adjusts automatically to maintain the aspect ratio
							// - border: adds a default border
							// - rounded-md: adds slightly rounded corners
							// - shadow-sm: adds a subtle shadow for depth
							// - bg-gray-50: a light background color, useful if images might have transparency or to give a slight frame
							className="w-full h-auto rounded-md bg-gray-50"
						/>
						{/* Display the title as a caption if it exists */}
						{title && (
							<p className="mt-3 text-sm text-gray-700 text-center"> {/* Adjusted margin-top, text color, and alignment */}
								{title}
							</p>
						)}
					</div>
				</div>
			);
		},
	},
};
