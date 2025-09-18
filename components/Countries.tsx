import React from 'react'

function Countries({countries}) {
  return (
    <div className="flex flex-wrap gap-100 md:gap-100 ml-200">
    {countries?.map((country) => (
      <div
        key={country.code}
        className="flex items-center gap-100 rounded-xl border border-gray-200 bg-gray-50 px-200 py-100 transition hover:shadow-md"
      >
        <img
          src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
          alt={`${country.name} flag`}
          className="h-4 w-6 rounded-xs object-cover"
        />
        <span className=" text-xs md:text-sm text-gray-700">{country.name}</span>
      </div>
    ))}
  </div>
  
  )
}

export default Countries