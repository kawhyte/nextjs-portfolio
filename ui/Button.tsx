/* eslint-disable @next/next/no-html-link-for-pages */

import Link from 'next/link'
import React from 'react'
// import { ReactNode } from 'react'

// type ButtonProps = {
//   children?: ReactNode
//   link: string
//   text?: string
// }
export default function Button({ text, link, children }) {
  //if (!preview) return null



  return (
    <Link href={link} passHref legacyBehavior>
      <a
        className="
                    
                  
                     
                     
                  
                     
                       relative
                       z-10
                       inline-block
                       w-full
                       scale-95
                       overflow-hidden
                       whitespace-nowrap
                       rounded-xl
                       border-4
                       border-[#1f1f1f]
                       bg-white
                       px-7 py-[18px]
                        text-center
                        text-[0.9375rem]
                        font-medium
                        
                       capitalize
                        leading-6
                        
                        tracking-tight
                    
                        transition-transform

                        duration-300
                        
                        hover:scale-100 hover:bg-orange-200 hover:before:opacity-100 after:hover:[animation-fill-mode:forwards] focus:scale-100 focus:before:opacity-100 motion-reduce:hover:scale-95 motion-reduce:after:hover:animate-none motion-reduce:focus:scale-95 sm:text-xl md:leading-none"
      >
        {text}
        {children}
      </a>
    </Link>
  )
}
