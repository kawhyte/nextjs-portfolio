import classNames from "classnames";
// import PropTypes from "prop-types";
import React from "react";
import PortfolioCard from "./PortfolioCard";
import { motion, transform } from "framer-motion";

const Cards = ({ items, hideLastItemOnMobile = false }) => {
	return (
		<div className='container flex justify-center mx-auto max-w-7xl'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 '>
				{items.map((item) => (
					<motion.div
						whileHover={{
							zIndex: 1,
							scale: [1, 1.07, 1],
							transition: {
								duration: 0.15,
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
