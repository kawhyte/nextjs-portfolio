import classNames from "classnames"; // Keep if needed for future conditional classes
import React from "react";
import PortfolioCard from "./PortfolioCard";
// Import the type for a single portfolio item
// import { PortfolioEntry } from "./PortfolioCard"; // Adjust path if type is defined elsewhere
import { motion, transform } from "framer-motion"; // Keep if framer-motion is used
import SectionTitle from "./SectionTitle"; // Keep if SectionTitle is used

// Define the props interface for the component
interface PortfolioCardsProps {
	items: any; // Use the imported type for the items array
	hideLastItemOnMobile?: boolean; // Optional boolean prop
}

// Rename component to PascalCase
const PortfolioCards: React.FC<PortfolioCardsProps> = ({
	items,
	hideLastItemOnMobile = false, // Default value is fine
}) => {
	// The 'hideLastItemOnMobile' prop isn't currently used in the rendering logic,
	// but it's typed and available if needed.
	// The 'classNames' import is also available if you add conditional styling.

	return (
		<section className='pb-10 lg:p md:container md:mx-auto  '>
			<div className=''>
			

				<div className=' flex flex-col mt-10 gap-20  '>
					{items.map((item, index) => (
						<div
							className="bg-gray-100/50 max-w-6xl mx-3 md:mx-9 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0  after:outline-2 after:outline-solid after:-outline-offset-2 after:rounded-3xl after:outline-gray-700/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sm:sticky  after:pointer-events-none "
							key={item.sys.id}
							// The commented out style prop remains unchanged
							// style={{
							// 	top: `calc(84px + ${index * 40}px`,
							// 	position: "sticky",
							// }}
						>
							{/* Pass the correctly typed item to PortfolioCard */}
							<PortfolioCard portfolio={item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};


export default PortfolioCards;

