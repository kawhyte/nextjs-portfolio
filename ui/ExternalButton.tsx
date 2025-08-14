/* eslint-disable @next/next/no-html-link-for-pages */

import Link from 'next/link'
import React from 'react'
// import { ReactNode } from 'react'

// type ButtonProps = {
//   children?: ReactNode
//   link: string
//   text?: string
// }
export default function ExternalButton({ text, link, children }) {
  //if (!preview) return null

  return (
    <Link href={link} passHref legacyBehavior>
      <a
        className="
                       text-shade-90
                       after:bg-shine
                       after:hover:animate-shine
                       before:bg-gradient-btn
                       text-t4
                     
                       relative
                       z-10
                       inline-block
                       w-full
                       scale-95
                       overflow-hidden
                       whitespace-nowrap
                       rounded-[36px]
                       border-4
                       border-[#1f1f1f]
                       bg-white
                       px-7 py-[18px]
                        text-center
                        text-[0.9375rem]
                        font-medium
                        uppercase
                        leading-6
                        
                        tracking-tight
                        shadow-[4px_4px_#1f1f1f]
                        transition-transform

                        duration-300
                        before:absolute
                        before:inset-0
                        before:-z-10
                        before:rounded-[36px]
                        before:opacity-0
                        before:transition-opacity
                        before:duration-500
                        after:absolute
                        after:inset-0 after:rounded-[36px]
                        after:bg-position-[-3em]
                        after:bg-no-repeat
                        after:bg-size-[auto_100%]
                        hover:scale-100 hover:bg-orange-200 hover:before:opacity-100 hover:after:[animation-fill-mode:forwards] focus:scale-100 focus:before:opacity-100 motion-reduce:hover:scale-95 motion-reduce:hover:after:animate-none motion-reduce:focus:scale-95 sm:text-xl md:leading-none"
      >
        {text}
        {children}
      </a>
    </Link>
  )
}
