import PropTypes from "prop-types"
import React from "react"

const Button = ({ children, href, buttonColor, ...params }) => {
  const className =
    "mr-12 text-white hover:bg-gray-500 text-white font-semibold font-Montserrat hover:text-white py-3 px-5 border border-gray-500  hover:border-transparent rounded transition duration-150 ease-in-out " + buttonColor

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button className={className} {...params}>
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
}

Button.defaultProps = {
  href: null,
}

export default Button
