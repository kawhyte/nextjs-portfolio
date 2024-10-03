import classNames from "classnames";
// import PropTypes from "prop-types";
import React from "react";
import PortfolioCard from "./PortfolioCard";
import { motion, transform } from "framer-motion";
import SectionTitle from "./SectionTitle";

const Cards = ({ items, hideLastItemOnMobile = false }) => {
	return (
		<div className='contatiner'>
			<div className='flex justify-center'>
				<p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center  text-transparent bg-clip-text'>
					{" "}
					Real-world Results
				</p>
			</div>
			<h2 className=" font-serif text-3xl text-center mt-6">Featured Projects</h2>

			<p className=" text-center text-gray-900/80 mt-4"> See how I transform concepts in to amazing digital experiences. </p>

			<div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols- gap-y-8  place-items-center mt-5  '>
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
		</div>
	);
};

// Cards.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

export default Cards;
