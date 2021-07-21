import { createClient } from "contentful";
import Image from "next/image";
import Button from "../../components/Button";
import CaseStudy from "../../components/CaseStudy";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
//import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { renderOptions } from "../../util/rich-text-types";
import Skeleton from '../../components/Skeleton';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: "blogPost",
	});

	const paths = res.items.map((item) => {
		return {
			params: { slug: item.fields.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const { items } = await client.getEntries({
		content_type: "blogPost",
		"fields.slug": params.slug,
	});
	
	if(!items.length){

		return{
		  redirect:{
			destination: '/',
			permanent: false
	
		  }
		}
	  }
	  

	return {
		props: { blog: items[0] },
		revalidate: 1
	};
};

export default function PortfolioDetails({ blog }) {
	if (!blog) return <Skeleton /> 
	const {
		description,
		gallery,
		name,
		title,
		related,
		summary,
		thumbnail,
		photoCredit,
		url,
		demoUrl,
		technology,
		approach,
		problem,
		result,
		richText,
		richTextProblem,
		richTextApproach,
		richTextResult,
	} = blog.fields;
	return (
		<main className='mt-20'>
			<div
				className='mb-8  w-full max-w-screen-lg mx-auto '
				>
				<div className='   '>
					<Image
						blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
						placeholder='blur'
						src={`https:${thumbnail.fields.file.url}`}
						width={1024}
						height={384}
						className=' w-full h-full  object-cover  '
						alt={title}
					/>
				</div>
				<div className=' '>
					<h2 className='text-4xl max-w-screen-md p-3 bg-black font-semibold text-gray-100 leading-tight'>
						{title}
					</h2>
					<a
						href='#'
						className='px-4 py-1 bg-black text-gray-200 text-xs inline-flex items-center justify-center'>
						Photo credit: {photoCredit}
					</a>
				</div>
			</div>

			<div className='px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-lg mx-auto text-lg leading-relaxed'>
				<p className='pb-6'>
					{documentToReactComponents(richText, renderOptions)}{" "}
				</p>
			</div>
		</main>
	);
}

{
	/*<CaseStudy
					richTextProblem={richTextProblem}
					richTextApproach={richTextApproach}
					richTextResult={richTextResult}
					problem={problem}
					approach={approach}
					result={result}
                />*/
}

{
	/*<div>
			<div className='pt-12 lg:pt-16 container mx-auto'>
				<div className='container'>
					<div className=' bg-red-200'>
						<div className='w-full pb-8   '>
							
								
									<Image
										blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
										placeholder='blur'
										src={`https:${thumbnail.fields.file.url}`}
										width={thumbnail.fields.file.details.image.width}
										height={thumbnail.fields.file.details.image.height}
									/>
								
							
						</div>

              
                        <article class='py-12 px-4'>
                        <h1 class='text-4xl text-center mb-4 font-heading font-semibold'>
                            {title}
                        </h1>
                        <p class='text-center'>
                            <span>{"article.published_at"}</span>
                        </p>

                        <div class='max-w-3xl mx-auto'>
                           

                            <p>{documentToReactComponents(richText)} </p>
                        </div>
                    </article>


						<div className='w-full mb-12 lg:pl-8 xl:pl-12 mx-6'>
							<h1 className='mb-1 text-2xl font-medium leading-tight tracking-tight text-left text-gray-900 md:text-3xl sm:text-4xl       '>
								{name}
							</h1>
							{description && (
								<div className='my-4 text-base font-light text-left text-gray-700 whitespace-pre-line text-md font-Montserrat'>
									{description}
								</div>
							)}
							<div className='pt-2 mt-4 text-xl font-semibold leading-tight tracking-tight text-gray-700 sm:text-xl'>
							
								<div className='flex justify-start leading-none md:px-1 '>
									

						
								</div>
							</div>
						</div>
					</div>
				</div>

			
			
                            </div>*/
}
