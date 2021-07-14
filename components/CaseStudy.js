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
			<section className='text-gray-600 '>
				<div className=' py-10 mx-auto'>
					<div className='text-center mb-16'>
						<h4 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
							Learn how I developed this project
						</h4>
						<div className='flex mt-6 justify-center'>
							<div className='w-16 h-1 rounded-full bg-indigo-500 inline-flex'></div>
						</div>
					</div>
					<div className='flex flex-col  justify-center'>
						<div className='p-12 px-8  flex flex-col md:flex-row text-center items-center bg-yellow-50 '>
							<div className='w-40 h-40 pt-20  mr-20 ml-8 mb-28  md:mb-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500  flex-shrink-0'>
								<Image
									src='/boy.png'
									blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
									placeholder="blur" 
									width='170'
									height='296'
									alt='boy running'
									className='w-48  m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20'
								/>
							</div>
							<div className='flex-grow'>
								<h3 className='text-yellow-500 text-lg title-font font-medium mb-3'>
									Step 1 - Planning Phase
								</h3>
								<h2 className='text-gray-900 text-base title-font font-normal italic mb-3'>
									{" "}
									What problem was I trying to solve
								</h2>
							
								<p className='leading-relaxed text-base text-gray-900 text-left'>{documentToReactComponents( richTextProblem)}</p>
							</div>
						</div>
						<div className='p-12 flex flex-col md:flex-row text-center items-center bg-green-50'>
							<div className='w-40 h-40 pt-20 mr-20 ml-8 mb-20  md:mb-20  inline-flex items-center justify-center rounded-full bg-yellow-100 text-indigo-500  flex-shrink-0'>
								<Image
									src='/girl_sitting.png'
									placeholder="blur" 
									width='170'
									height='241'
									alt='girl sitting'
									className='w-48 m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20'
								/>
							</div>
							<div className='flex-grow'>
								<h3 className='text-green-500 text-lg title-font font-medium mb-3'>
									Step 2 - Project Requirement Phase
								</h3>
								<h2 className='text-gray-900 text-base title-font font-normal italic mb-3'>
									{" "}
									Project Requirements
								</h2>
								
								<p className='leading-relaxed text-base text-gray-900  text-left'>{documentToReactComponents(richTextApproach)}</p>
							</div>
						</div>
						<div className='p-12   flex flex-col md:flex-row  text-center items-center bg-indigo-50'>
							<div className='w-40 h-40 pt-20 mr-20 ml-8 mb-24  md:mb-20  inline-flex items-center justify-center rounded-full bg-green-100 text-indigo-500 flex-shrink-0'>
								<Image
									src='/girl.png'
                  blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
									placeholder="blur" 
								
									width='170'
									height='241'
									alt='girl'
									className='w-48 m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20'
								/>
							</div>
							<div className='flex-grow'>
								<h3 className='text-indigo-500 text-lg title-font font-medium mb-3'>
									Step 3 - Software Selection & Result
								</h3>
								<h2 className='text-gray-900 text-base title-font font-normal italic mb-3'>
									{" "}
									What technology was used
								</h2>
							
                <p className='leading-relaxed text-base text-gray-900 text-left'>{documentToReactComponents(richTextResult)}</p>
								
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default CaseStudy;
