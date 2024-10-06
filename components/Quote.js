import React from 'react'

function Quote() {
  return (
    <div className=" container mx-auto border border-white rounded-2xl  flex w-full flex-col justify-between px-2 bg-yellow-50 my-32  ">
    <h1
      className={`font-serif text-3xl md:text-4xl lg:text-5xl text-center mt-6`}
    >
    "The heights by great men reached and kept were not attained by sudden flight, but they while their companions slept, were toiling upward in the night."
     <span
      className={`text-center text-lg md:text-xl lg:text-3xl text-gray-900/80 mt-4 max-w-md mx-auto`}
    >
     ~ Henry Wadsworth Longfellow
    </span></h1>
   

   
  </div>
  )
}

export default Quote