import { createClient } from "contentful";
import Image from "next/image";
import Button from "../../components/Button";
import CaseStudy from "../../components/CaseStudy";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
//import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { renderOptions } from '../../util/rich-text-types'

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

	return {
		props: { blog: items[0] },
	};
};




export default function PortfolioDetails({ blog }) {
	

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



        <main class="mt-20">

        <div class="mb-4 md:mb-0 w-full max-w-screen-lg mx-auto relative" style={{height: '384px'}}>
        <div class="absolute left-0 bottom-0 w-full h-full z-10 bg-black opacity-40"
        ></div>
<div className="   ">
          <Image
          blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
          placeholder='blur'
          src={`https:${thumbnail.fields.file.url}`}
          width={1024}
          height={384}
          class="absolute left-0 top-0 w-full h-full z-0 object-cover  "
		  alt={title}
      />
</div>
          <div class="p-4 absolute bottom-0 left-0 z-20">
          <h2 class="text-4xl max-w-screen-md p-3 bg-black font-semibold text-gray-100 leading-tight">
          {title}
          </h2>
          <a href="#"
            class="px-4 py-1 bg-black text-gray-200 text-xs inline-flex items-center justify-center mb-2">Photo credit: {photoCredit}</a>
       
          </div>
        </div>
  
        <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-lg mx-auto text-lg leading-relaxed">
          
        
        <p class="pb-6">{documentToReactComponents(richText,renderOptions)} </p>
        
        
  
        </div>
      </main>









		
	);
}



	{/*<CaseStudy
					richTextProblem={richTextProblem}
					richTextApproach={richTextApproach}
					richTextResult={richTextResult}
					problem={problem}
					approach={approach}
					result={result}
                />*/}


                {/*<div>
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

			
			
                            </div>*/}