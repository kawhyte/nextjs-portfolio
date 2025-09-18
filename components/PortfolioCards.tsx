import React from "react";
import PortfolioCard from "./PortfolioCard";


interface PortfolioCardsProps {
	items: any; // Use the imported type for the items array
	hideLastItemOnMobile?: boolean; // Optional boolean prop
}

// Rename component to PascalCase
const PortfolioCards: React.FC<PortfolioCardsProps> = ({
	items,
	hideLastItemOnMobile = false, // Default value is fine
}) => {
	return (
		<section className='pb-500 lg:p md:container md:mx-auto  '>
			<div className=''>
				<div className=' flex flex-col mt-300 gap-500  '>
					{items.map((item, index) => (
						<div
							className="bg-gray-100/50  max-w-6xl mx-200 md:mx-300 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0  after:outline-2 after:outline-solid after:-outline-offset-2 after:rounded-3xl after:outline-gray-700/20 px-400 pt-400 md:pt-300 md:px-300 lg:pt-400 lg:px-500 sm:sticky  after:pointer-events-none "
							key={item.sys.id}>
							<PortfolioCard portfolio={item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PortfolioCards;
