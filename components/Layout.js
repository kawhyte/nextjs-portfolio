import Link from 'next/link'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="">
    <Header />



      <div className="container mx-auto">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>
    </div>
  )
}