import React from 'react'

function Quote() {
  return (
    <div className=" container mx-auto border border-white rounded-2xl  flex w-full flex-col justify-between px-5 pb-4 bg-yellow-50 my-32  ">
    <h1
      className={`font-extrabold leading-tight p-9 tracking-tight text-gray-900 sm:text-2xl md:text-4xl  title-font mb-3 font-heading text-3xl    `}
    >
    "The heights by great men reached and kept were not attained by sudden flight, but they while their companions slept, were toiling upward in the night."
     <span
      className={` pl-5 font-secondary mt-2 text-sm text-gray-500 leading-relaxed md:text-base  lg:text-base max-w-3xl `}
    >
     ~ Henry Wadsworth Longfellow
    </span></h1>
   

   
  </div>
  )
}

export default Quote