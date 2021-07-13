import { createClient } from 'contentful'
import Image from "next/image";
import Button from "../../components/Button"
import CaseStudy from '../../components/CaseStudy';


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
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'portfolio',
    'fields.slug': params.slug
  })
  
  return {
    props: { portfolio: items[0] }
  }

}


export default function PortfolioDetails({portfolio}) {
  console.log("SLUG ",portfolio)

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
  
      <div className="pt-12 lg:pt-16 container mx-auto">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full pb-8 md:w-2/3 md:pr-4 ">
              {gallery && gallery.length === 1 && (
                <a href={demoUrl}  target="_blank" rel="noopener noreferrer">
                  <Image
                  src={`https:${thumbnail.fields.file.url}`}
                  width={thumbnail.fields.file.details.image.width}
                  height={thumbnail.fields.file.details.image.height}
                  />
                </a>
              )}
              {gallery && gallery.length > 1 && <Carousel images={gallery} />}
            </div>
            <div className="w-full mb-12 md:w-1/3 lg:pl-8 xl:pl-12">
              <h1 className="mb-1 text-2xl font-medium leading-tight tracking-tight text-left text-gray-900 md:text-3xl sm:text-4xl       ">
                {name}
              </h1>
              {description && (
                <div className="my-4 text-base font-light text-left text-gray-700 whitespace-pre-line text-md font-Montserrat">
                  {description.description}
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
                          src={`https:${tech.fields.file.url}`}
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

