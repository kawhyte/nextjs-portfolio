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
			section: "The Challenge",
			bgColor: "bg-yellow-50",
			accentColor: "bg-yellow-500",
			richText: richTextProblem,
		},
		{
			image: "/girl_sitting.png",
			section: "Project Requirement & Solution",
			bgColor: "bg-green-50",
			accentColor: "bg-green-500",
			richText: richTextApproach,
		},
		{
			image: "/girl.png",
			section: "The impact & Result",
			bgColor: "bg-white",
			accentColor: "bg-indigo-500 ",
			richText: richTextResult,
		},
	];

	return (
		<div className='flex flex-col justify-center mt-'>
			<section className='text-gray-600 '>
				<div className='mt-8'>
					<SectionTitle header={"Case Study"} description={""} />

					<div className='flex flex-col  '>
						{casestudy.map((item, index) => (
							<div
								className={`py-6  px-8  flex flex-col md:flex-row text-center items-center ${item.bgColor}`}>
								{/*<Image
									src='/boy.png'
									blurDataURL='/boy.png'
									placeholder='blur'
									width='170'
									height='296'
									alt='boy running'
									className='w-48  m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20'
								/>*/}
								<div className='  w-full'>
									<div className='pt-2 pb-6  items-baseline flex align-bottom  '>
										<div
											class={` w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 mr-4 md:mr-8 mb-4      font-serif rounded-full flex items-center justify-center ${item.accentColor}`}>
											<span class='text-white text-2xl md:text-3xl lg:text-5xl font-bold p-4'>
												{index + 1}
											</span>
										</div>

										<span className='font-serif text-2xl md:text-4.5xl  text-center mt-6 capitalize'>
											{" "}
											{item.section}{" "}
										</span>
										{/*<span className='text-gray-900 text-base title-font font-normal italic mb-3'>
										(What problem was I trying to solve){" "}
	</span>*/}
									</div>

									<div className='leading-relaxed text-base text-gray-900 text-left max-w-6xl'>
										{documentToReactComponents(item.richText, renderOptions)}
									</div>
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
