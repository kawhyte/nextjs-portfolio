import { createClient } from 'contentful'
import Image from "next/image";
import Head from "next/head";
import Button from "../../components/Button"
import CaseStudy from '../../components/CaseStudy';
import Skeleton from '../../components/Skeleton';


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "portfolio" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'portfolio',
    'fields.slug': params.slug
  })

  if(!items.length){

    return{
      redirect:{
        destination: '/',
        permanent: false

      }
    }
  }
  
  return {
    props: { portfolio: items[0] },
    revalidate: 1
  }

}


export default function PortfolioDetails({portfolio}) {
  if (!portfolio) return <Skeleton /> 

  const {
    description,
    gallery,
    name,
    related,
    summary,
    thumbnail,
    url,
    demoUrl,
    technology,
    approach,
    problem,
    result,
    richTextProblem,
    richTextApproach,
    richTextResult,
  } = portfolio.fields

  return (
    <div>
  	<Head>
		<title>{name} | Kenny Portfolio</title>
		<meta></meta>
		<link rel="icon" href="/favicon.ico"></link>
		</Head>
      <div className="pt-12 lg:pt-16 container mx-auto">
        <div className="container">
          <div className="flex flex-wrap sm:flex-nowrap justify-center">
            <div className="w-full pb-8 md:w-3/6 md:pr-4 ">
              {gallery && gallery.length === 1 && (
                <a href={demoUrl}  target="_blank" rel="noopener noreferrer">
                  <Image
                  blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
									placeholder="blur" 
                  src={`https:${gallery[0].fields.file.url}?fm=webp`}
                  width={gallery[0].fields.file.details.image.width}
                  height={gallery[0].fields.file.details.image.height}
                  />
                </a>
              )}
              {gallery && gallery.length > 1 && <Carousel images={gallery} />}
            </div>
            <div className="w-full mb-12 md:w-1/3 lg:pl-8 xl:pl-12 mx-6">
              <h1 className="mb-1 text-2xl font-medium leading-tight tracking-tight text-left text-gray-900 md:text-3xl sm:text-4xl       ">
                {name}
              </h1>
              {description && (
                <div className="my-4 text-base font-light text-left text-gray-700 whitespace-pre-line text-md font-Montserrat">
                  {description}
                </div>
              )}
              <div className="pt-2 mt-4 text-xl font-semibold leading-tight tracking-tight text-gray-700 sm:text-xl">
                <h4 className="text-left">Technology used: </h4>
                <div className="flex justify-start leading-none md:px-1 ">
                  <div className="flex flex-wrap justify-between my-4 ">
                    {technology.map((tech, i) => {
                      return (
                        <div
                        key={tech.sys.id}
                          className={
                            "flex flex-col my-2 mx-2 text-center items-center  justify-center"
                          }
                        >
                    
                          <Image
                          src={`https:${tech.fields.file.url}?fm=webp`}
                          width="45"
                          height="45"
                          alt="technology icon"
                          className="w-10 h-10 mb-1"
                          />

                          <span
                            target="_blank"
                            rel="noopener noreferrer"
                            className={
                              "font-Montserrat font-light text-xs inline-block uppercase last: m-1 mr-1 "
                            }
                          >
                            {tech.title}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="flex flex-row lg:py-2">
                {url && (
                  <div className=" ">
                    <Button
                      href={url}
                      buttonColor={" bg-indigo-700 text-white"}
                    >
                      Github
                    </Button>
                  </div>
                )}
                {demoUrl && (
                  <div className="">
                    <Button
                      href={demoUrl}
                      buttonColor={" bg-white text-indigo-700"}
                    >
                      Demo
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
    
 <CaseStudy
 richTextProblem={richTextProblem}
            richTextApproach={richTextApproach}
            richTextResult={richTextResult}
           problem={problem}
           approach={approach}
           result={result}
         />

      </div>
    </div>
  )
}   

