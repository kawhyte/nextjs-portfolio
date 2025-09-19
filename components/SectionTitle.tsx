import React from "react";

function SectionTitle({ header, description, sectionHeadtext }) {
	return (
		<div className=' container mx-auto  flex w-full flex-col justify-between px-300    '>
			<div className='flex justify-center'>
				<p className='uppercase font-semibold tracking-widest bg-linear-to-r from-green-500 to-orange-500 text-center  text-transparent bg-clip-text'>
					{sectionHeadtext}
				</p>
			</div>
			<h2 className=' font-header text-3xl md:text-5xl text-center mt-300'>
				{header}
			</h2>

			<p className=' text-center md:text-lg lg:text-xl text-foreground/80 mt-200 max-w-md mx-auto'>
				{description}
			</p>
		</div>
	);
}

export default SectionTitle;
