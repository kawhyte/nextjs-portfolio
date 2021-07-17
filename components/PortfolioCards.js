import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import PortfolioCard from "./PortfolioCard"
import { motion, transform } from "framer-motion"

const Cards = ({ items, hideLastItemOnMobile = false }) => {

   
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-wrap  mx-3 lg:-mx-6">
        {items.map(item => (
          <motion.div
          whileHover={{
zIndex:1,
            scale:[1, 1.3, 1.2],
            transition:{
              duration:.2
            }
          }}
            className={classNames("w-full sm:w-1/2 lg:w-1/3 p-3 md:p-6 cursor-pointer", {
              "last:hidden lg:last:block": hideLastItemOnMobile,
            })}
            key={item.sys.id}
          >
            <PortfolioCard portfolio={item} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Cards.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

export default Cards
