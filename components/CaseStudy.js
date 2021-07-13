import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function CaseStudy({
	problem,
	approach,
	result,
  richTextProblem,
	richTextApproach,
	richTextResult,
}) {

	console.log( richTextProblem);



	return (
		<div className='flex flex-col justify-center '>
			<section class='text-gray-600 '>
				<div class=' py-10 mx-auto'>
					<div class='text-center mb-16'>
						<h4 class='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
							Learn how I developed this project
						</h4>
						<div class='flex mt-6 justify-center'>
							<div class='w-16 h-1 rounded-full bg-indigo-500 inline-flex'></div>
						</div>
					</div>
					<div class='flex flex-col  justify-center'>
						<div class='p-4 px-8  flex flex-col text-center items-center bg-yellow-100 '>
							<div class='w-28 h-28 pt-20  inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-20 flex-shrink-0'>
								<Image
									src='/boy.png'
									alt='me'
									width='170'
									height='296'
									alt='boy running'
									className='w-48 m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20'
								/>
							</div>
							<div class='flex-grow'>
								<h3 class='text-yellow-500 text-lg title-font font-medium mb-3'>
									Step 1 - Planning Phase
								</h3>
								<h2 class='text-yellow-700 text-base title-font font-normal italic mb-3'>
									{" "}
									What problem was I trying to solve
								</h2>
							
								<p class='leading-relaxed text-base text-yellow-800 text-left'>{documentToReactComponents( richTextProblem)}</p>
							</div>
						</div>
						<div class='p-4   flex flex-col text-center items-center bg-green-100'>
							<div class='w-28 pt-16 h-28 inline-flex items-center justify-center rounded-full bg-yellow-100 text-indigo-500 mb-10 flex-shrink-0'>
								<Image
									src='/girl_sitting.png'
									alt='me'
									width='170'
									height='241'
									alt='girl sitting'
									className='w-48 m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20'
								/>
							</div>
							<div class='flex-grow'>
								<h3 class='text-green-500 text-lg title-font font-medium mb-3'>
									Step 2 - Project Requirement Phase
								</h3>
								<h2 class='text-green-700 text-base title-font font-normal italic mb-3'>
									{" "}
									Project Requirements
								</h2>
								
								<p class='leading-relaxed text-base text-green-800  text-left'>{documentToReactComponents(richTextApproach)}</p>
							</div>
						</div>
						<div class='p-4   flex flex-col text-center items-center bg-indigo-100'>
							<div class='w-28 h-28 pt-16 pb-8 inline-flex items-center justify-center rounded-full bg-green-100 text-indigo-500 mb-10 flex-shrink-0'>
								<Image
									src='/girl.png'
									alt='me'
									width='170'
									height='241'
									alt='girl'
									className='w-48 m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20'
								/>
							</div>
							<div class='flex-grow'>
								<h3 class='text-indigo-500 text-lg title-font font-medium mb-3'>
									Step 3 - Software selection & Result
								</h3>
								<h2 class='text-indigo-700 text-base title-font font-normal italic mb-3'>
									{" "}
									What technology was used
								</h2>
							
                <p class='leading-relaxed text-base text-indigo-800  text-left'>{documentToReactComponents(richTextResult)}</p>
								
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default CaseStudy;
