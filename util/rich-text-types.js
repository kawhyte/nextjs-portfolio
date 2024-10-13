import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";


const website_url = 'https://www.kennywhyte.com'
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
		[BLOCKS.PARAGRAPH]: (node, children) => <p className=' text-base md:text-lg lg:text-xl text-black max-w-5xl'>{children}</p>,
		// [BLOCKS.LIST_ITEM]: (node, children) => <p className='list-disc list-inside my-4 text-lg'>{children}</p>,
		// [BLOCKS.UL_LIST]: (node, children) => <ul className='list-disc w-1 h-2 list-inside my-4 text-lg'>{children}</ul>,
		// [BLOCKS.OL_LIST]: (node, children) => <p className='list list-decimal list-item'>{children}</p>,
		[BLOCKS.HEADING_2]: (node, children) => <p className=' text-base  mb-3'>{children}</p>,
    [INLINES.HYPERLINK]: (node) => {
      return <a className="text-blue-500" href={node.data.uri} target={`${node.data.uri.startsWith(website_url) ? '_self' : '_blank'}`} rel={`${node.data.uri.startsWith(website_url) ? '' : 'noopener noreferrer'}`}>{node.content[0].value}</a>;
    },
    [BLOCKS.QUOTE]: (node, children) => <p className=' pb-6 text-red-600 tracking-wider leading-relaxed '>{children}</p>,
    




		[BLOCKS.EMBEDDED_ASSET]: (node, children) => {
			// render the EMBEDDED_ASSET as you need
		
			return (
        <div className=" mt-8 mb-10">

				<img
					src={`https://${node.data.target.fields.file.url}`}
					className={" w-full mt-8 mb-5 max-w-2xl "}
					height={node.data.target.fields.file.details.image.height}
					width={node.data.target.fields.file.details.image.width}
					alt={node.data.target.fields.description}
         
				/></div>

        
			);
		},
	},
};
