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
			<p className=' text-sm lg:text-base max-w-base text-gray-500/90 my-4 '>
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
			// console.log("TEST ", node.data.target.fields.title);
			// render the EMBEDDED_ASSET as you need
			return (
				<div className='inline-flex justify-between flex-row '>
					<div className=' flex flex-col items-center'>
						<img
							src={`https://${node.data.target.fields.file.url}`}
							className={
								" my-8 mb-5 mr-4 max-w-lg border  inline-flex object-cover h-40 w-96  md:h-24 md:w-full  p-8  "
							}
							height={node.data.target.fields.file.details.image.height}
							width={node.data.target.fields.file.details.image.width}
							alt={node.data.target.fields.description}
						/>

						<p>{node.data.target.fields.title}</p>
					</div>
				</div>
			);
		},
	},
};
