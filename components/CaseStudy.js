import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
//import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { renderOptions } from "../util/rich-text-types";
import SectionTitle from "./SectionTitle";


function CaseStudy({
	problem,
	approach,
	result,
	richTextProblem,
	richTextApproach,
	richTextResult,
}) {

	const casestudy = [
		{
			image: "/boy.png",
			section:"Planning Phase",
			bgColor:"bg-yellow-50",
			accentColor:"bg-yellow-500",
			richText:richTextProblem
		},
		{
			image: "/girl_sitting.png",
			section:"Project Requirement Phase",
			bgColor:"bg-green-50",
			accentColor:"bg-green-500",
			richText:richTextApproach
		},
		{
			image: "/girl.png",
			section:"Software Selection & Result",
			bgColor:"bg-indigo-50",
			accentColor:"bg-indigo-500 ",
			richText:richTextResult
		},
	];
	
	return (
		<div className='flex flex-col justify-center mt-12'>
			<section className='text-gray-600 '>
				<div className=' py-10 mx-auto'>
					<SectionTitle
						header={"Case Study"}
						description={"Learn how I developed this project"}
					/>

					<div className='flex flex-col  justify-center'>
						{casestudy.map((item,index) => (
							<div className={`py-6 container px-8  flex flex-col md:flex-row text-center items-center ${item.bgColor}`}>
								{/*<Image
									src='/boy.png'
									blurDataURL='/boy.png'
									placeholder='blur'
									width='170'
									height='296'
									alt='boy running'
									className='w-48  m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20'
								/>*/}
								<div className=' text-left w-full'>
									<div className='pt-2 pb-6 flex  items-baseline  text-xl font-semibold leading-tight tracking-tight text-gray-700 sm:text-xl '>
										<h2 class={`w-12 h-12 text-4xl px-3  mr-4  rounded-full text-white ${item.accentColor}`}>
											{index + 1}
										</h2>

										<span> {item.section} </span>
										{/*<span className='text-gray-900 text-base title-font font-normal italic mb-3'>
										(What problem was I trying to solve){" "}
	</span>*/}
									</div>

									<p className='leading-relaxed text-base text-gray-900 text-left max-w-6xl'>
										{documentToReactComponents(item.richText, renderOptions)}
									</p>
								</div>
							</div>
						))}

						
						
					</div>
				</div>
			</section>
		</div>
	);
}

export default CaseStudy;
