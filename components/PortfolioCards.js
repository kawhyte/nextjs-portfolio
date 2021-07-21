import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import PortfolioCard from "./PortfolioCard";
import { motion, transform } from "framer-motion";

const Cards = ({ items, hideLastItemOnMobile = false }) => {
	return (
		<div className='container mx-auto max-w-7xl bg-red-200'>
			<div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 '>
				{items.map((item) => (
					<motion.div
						whileHover={{
							zIndex: 1,
							scale: [1, 1.2, 1.1],
							transition: {
								duration: 0.2,
							},
						}}
						className={classNames("w-full  p-3 md:p-6 cursor-pointer", {
							"last:hidden lg:last:block": hideLastItemOnMobile,
						})}
						key={item.sys.id}>
						<PortfolioCard portfolio={item} />
					</motion.div>
				))}
			</div>
		</div>
	);
};

// Cards.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

export default Cards;
