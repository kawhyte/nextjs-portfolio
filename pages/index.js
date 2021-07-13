import { createClient } from 'contentful'
import PortfolioCards from '../components/PortfolioCards'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "portfolio" })

  return {
    props: {
      portfolio: res.items,
    }
  }
}

export default function Recipes({portfolio}) {

  console.log(portfolio)
  return (
    <div className="recipe-list">
  

  
        <PortfolioCards  items={portfolio}  />
    
    </div>
  )
}