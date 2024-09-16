import React from 'react'

function SectionTitle({ header, description }) {
  return (
    <div className=" container mx-auto  flex w-full flex-col justify-between px-5    ">
      <h1
        className={`tracking-tight  text-black lg:text-2xl font-extrabold leading-tight text-2xl'   `}
      >
        {header}
      </h1>
      <div className="h-1 mt-2 w-20 rounded bg-orange-500"></div>

      <p
        className={`  my-4 text-base font-light text-left text-gray-700 whitespace-pre-line text-md font-Montserrat `}
      >
        {description}
      </p>
    </div>
  )
}

export default SectionTitle