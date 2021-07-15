import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import BlogCard from "./BlogCard"

const Cards = ({ items, hideLastItemOnMobile = false }) => {

   
  return (
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-2">
        {items.map(item => (
          <div
            className={classNames("w-full   p-3 md:p-6", {
              "last:hidden lg:last:block": hideLastItemOnMobile,
            })}
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
