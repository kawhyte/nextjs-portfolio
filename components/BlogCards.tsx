// import PropTypes from "prop-types"
// import classNames from "classnames"
import React from "react"
import BlogCard from "./BlogCard"

const Cards = ({ items, hideLastItemOnMobile = false }) => {

   
  return (
    <div className=" pt-6 ">
    
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {items.map(item => (
          <div
            className=""
            key={item.sys.id}
          >
            <BlogCard blog={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Cards.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

export default Cards
