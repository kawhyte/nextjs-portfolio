import React from 'react'

function Countries({countries}) {
  return (
    <div className="flex flex-wrap gap-0.5 md:gap-2 ml-4">
    {countries?.map((country) => (
      <div
        key={country.code}
        className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 transition hover:shadow-md"
      >
        <img
          src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
          alt={`${country.name} flag`}
          className="h-4 w-6 rounded-sm object-cover"
        />
        <span className=" text-xs md:text-sm text-gray-700">{country.name}</span>
      </div>
    ))}
  </div>
  
  )
}

export default Countries