import React from 'react'

function SectionTitle({ header, description }) {
  return (
    <div className=" container mx-auto  flex w-full flex-col justify-between px-5 pb-4   ">
      <h1
        className={`font-extrabold leading-tight tracking-tight text-gray-900 sm:text-2xl md:text-4xl  title-font mb-3 font-heading text-3xl    `}
      >
        {header}
      </h1>
      <div className="h-1 w-20 rounded bg-orange-500"></div>

      <p
        className={`  my-4 text-base font-light text-left text-gray-700 whitespace-pre-line text-md font-Montserrat `}
      >
        {description}
      </p>
    </div>
  )
}

export default SectionTitle