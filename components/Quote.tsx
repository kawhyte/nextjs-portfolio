import React from "react";

function Quote() {
	return (
		<div className='my-16 md:my-24 lg:my-32'>
			<figure className='max-w-5xl mx-auto bg-yellow-50 shadow-xs rounded-2xl p-6 sm:p-8 md:p-10'>
				<blockquote className='text-center'>
					<svg
						className='w-8 h-8 text-gray-300 mx-auto mb-3'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 18 14'>
						<path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
					</svg>

					<p className='text-xl sm:text-2xl md:text-3xl font-sans text-gray-700 leading-relaxed md:leading-loose'>
						The heights by great men reached and kept were not attained by
						sudden flight, but they while their companions slept, were toiling
						upward in the night.
					</p>
				</blockquote>
				<figcaption className='mt-6 text-center text-base sm:text-lg text-gray-500'>
					Henry Wadsworth Longfellow
				</figcaption>
			</figure>
		</div>
	);
}

export default Quote;
