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
	technology
}) {
	const casestudy = [
		{
			image: "/boy.png",
			section: "The Challenge",
			bgColor: "bg-white",
			accentColor: "bg-yellow-500",
			richText: richTextProblem,
			technology:[]
		},
		{
			image: "/girl_sitting.png",
			section: "Solution",
			bgColor: "bg-white",
			accentColor: "bg-green-500",
			richText: richTextApproach,
			technology:technology
		},
		{
			image: "/girl.png",
			section: "The impact & Result",
			bgColor: "bg-white",
			accentColor: "bg-indigo-500 ",
			richText: richTextResult,
			technology:[]
		},
	];
	// console.log("$$$ Case Study richTextApproach content", richTextApproach.content[0])
	 console.log("^^^^^Tech", technology)

	return (
		<div className='flex flex-col justify-center mt-'>
			<section className=' '>
				<div className='mt-6'>
					<SectionTitle header={"Project Details"} description={""} />

				<div className=" max-w-[300rem] mx-auto container">
						{casestudy.map((item, index) => (
							<div
								className={`md:py-6  md:px-8  flex flex-col md:flex-row text-center items-center ${item.bgColor}`}>
								{/*<Image
									src='/boy.png'
									blurDataURL='/boy.png'
									placeholder='blur'
									width='170'
									height='296'
									alt='boy running'
									className='w-48  m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20'
								/>*/}
								<div className=' lg:mx-auto lg:container  w-full text-gray-900/70 mb-8 '>
									<div className='pt-2 pb-3  items-baseline flex align-bottom  '>
										<div
											class={` w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 mr-4 md:mr-8 mb-4      font-serif rounded-full flex items-center justify-center ${item.accentColor}`}>
											<span class='text-white text-2xl md:text-3xl lg:text-5xl font-bold p-4'>
												{index + 1}
											</span>
										</div>

										<span className='text-xl md:text-4.5xl  text-center mt-6 capitalize'>
										
											{item.section}
										</span>
										{/*<span className='text-gray-900 text-base title-font font-normal italic mb-3'>
										(What problem was I trying to solve){" "}
	</span>*/}
									</div>

			
									<div className='leading-relaxed text-base text-black text-left max-w-6xl space-y-4'>
										{documentToReactComponents(item.richText, renderOptions)}
									</div>						

{ item.technology.length > 0  ? 

	<>
	<h2 clasName="text-lg font-bold mb-3 text-left">The follow tech was used to create the solution:</h2>
	
	<div class='flex flex-col w-full  justify-center items-center'>
						
							<div className=' flex  justify-between w-full  mx-6 mt-2'>
								{item.technology?.map((item) => (
									<div key={item.sys.id} className='flex flex-col items-center'>
										<Image
											src={`https:${item.fields.file.url}?fm=webp`}
											width='45'
											height='45'
											alt='technology icon'
											className=' size-7 md:size-12 fill-red-900/80'
										/>

										<p className=' text-gray-700  fill-gray-200 uppercase break-words text-nowrap text-sm mt-2 md:text-sm lg:text-base'>
											{item.fields.title}
										</p>
									</div>
								))} 
							</div>
						</div> </> : ""}

									

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
