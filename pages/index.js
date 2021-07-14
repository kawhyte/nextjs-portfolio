import { createClient } from 'contentful'
import PortfolioCards from '../components/PortfolioCards'
import Hero from '../components/Hero'
import Section from '../components/Section'

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
  
        <PortfolioCards  items={portfolio}  />
    
    </div>
  )
}