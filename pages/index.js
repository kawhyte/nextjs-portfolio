import { createClient } from 'contentful'
import PortfolioCards from '../components/PortfolioCards'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Link from "next/link";

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "portfolio" })
  console.log("res ",res.items)
  return {
    props: {
      portfolio: res.items,
    }
  }
}

export default function Recipes({portfolio}) {
console.log("HEY ",portfolio)
  return (
    <div className="">
  
<Hero />
<Section />




<div className="container mx-auto flex flex-col justify-between py-2">
         

          <div className="flex flex-row justify-between py-2">
          <h2 className="font-extrabold leading-tight tracking-tight text-gray-900 sm:text-2xl md:text-3xl">
            Featured Projects
          </h2>
            <Link className="flex flex-row cursor-pointer" href={`projects`}> 
            
              <p className="pb-1 mb-6 text-sm text-blue-600 md:text-lg sm:text cursor-pointer">
                View All Projects
              </p>
 </Link>

           
            
          </div>
          <PortfolioCards  items={portfolio}  />
        </div>
  
    
    </div>
  )
}