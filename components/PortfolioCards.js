import classNames from "classnames";
// import PropTypes from "prop-types";
import React from "react";
import PortfolioCard from "./PortfolioCard";
import { motion, transform } from "framer-motion";

const Cards = ({ items, hideLastItemOnMobile = false }) => {
	return (

			<div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols- gap-y-8  place-items-center   '>
				{items.map((item) => (
					<div
					
						className={classNames("  cursor-pointer", {
							"last:hidden lg:last:block": hideLastItemOnMobile,
						})}
						key={item.sys.id}>
						<PortfolioCard portfolio={item} />
					</div>
				))}
			</div>
	);
};

// Cards.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

export default Cards;
