import classNames from "classnames";
// import PropTypes from "prop-types";
import React from "react";
import PortfolioCard from "./PortfolioCard";
import { motion, transform } from "framer-motion";
import SectionTitle from "./SectionTitle";

const Cards = ({ items, hideLastItemOnMobile = false }) => {
	return (
		<section className="pb-16 lg:py-24">
		<div className='contatiner'>
			<div className='flex justify-center'>
				<p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-green-500 to-orange-500 text-center  text-transparent bg-clip-text'>
					{" "}
					Real-world Results
				</p>
			</div>
			<h2 className=' font-serif text-3xl md:text-5xl text-center mt-6'>
				Featured Projects
			</h2>

			<p className=' text-center md:text-lg lg:text-xl text-gray-900/80 mt-4 max-w-md mx-auto'>
				{" "}
				See how I transform concepts in to amazing digital experiences.{" "}
			</p>

			<div className=' flex flex-col mt-10 md:mt-20 gap-20 mx-auto container '>
				{items.map((item) => (
					<div
						className="bg-yellow-50 max-w-6xl mx-3 md:mx-9 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0  after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-gray-700/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
						key={item.sys.id}>
						<PortfolioCard portfolio={item} />
					</div>
				))}
			</div>
		</div>
		</section>
	);
};

// Cards.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

// <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols- gap-y-8  place-items-center mt-5

export default Cards;
