import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
//import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { renderOptions } from "../util/rich-text-types";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import CardHeader from "./CardHeader";

function CaseStudy({
	problem,
	approach,
	result,
	richTextProblem,
	richTextApproach,
	richTextResult,
	technology,
}) {
	const casestudy = [
		{
			image: "/boy.png",
			section: "The Challenge",
			bgColor: "",
			accentColor: "bg-yellow-400",
			richText: richTextProblem,
			
		},
		{
			image: "/girl_sitting.png",
			section: "Solution",
			bgColor: "",
			accentColor: "bg-green-400",
			richText: richTextApproach,
			
		},
		{
			image: "/girl.png",
			section: "The impact & Result",
			bgColor: "",
			accentColor: "bg-indigo-400 ",
			richText: richTextResult,
			
		},
	];
	// console.log("$$$ Case Study richTextApproach content", richTextApproach.content[0])
	//  console.log("^^^^^Tech", technology)

	return (
		<div className='my-20 flex flex-col gap-8 md:mx-auto md:container'>
			<div className='grid grid-cols-1  gap-8 '>
				<Card className=' pb-8 bg-gray-100/60   '>
					<CardHeader
						title={"The Challenge"}
						description={"What Problem are am I trying to solve"}
					/>

					<div className='w-full mx-auto px-6 '>
					
						{documentToReactComponents(casestudy[0].richText, renderOptions)}
					</div>
				</Card>

				<Card className=' bg-gray-100/60   '>
					<CardHeader
						title={"Considerations & Challenges"}
						description={
							"In making this website I focused on the following areas (Project Requirements):"
						}
						className=''
					/>
					<div className='w-full mx-auto px-6 mb-6 '>
						{documentToReactComponents(casestudy[1].richText, renderOptions)}
					</div>
				</Card>
		
				<Card className='bg-gray-100/60  '>
					<CardHeader
						title={"Solution & Result"}
						description={
							"Software Selection & Implementation"
						}
						className=''
					/>

					<div className='w-full mx-auto px-6 mb-6 '>
					{documentToReactComponents(casestudy[2].richText, renderOptions)}
				</div>
				</Card>
			</div>

			{/*<section className=' '>
				<div className='mt-6'>
					<SectionTitle header={"Project Details"} description={""} />

					<div className=' max-w-[300rem] mx-auto container'>
						{casestudy.map((item, index) => (
							<div
								className={`md:py-6   md:px-8  flex flex-col  text-center items-center ${item.bgColor}`}>
						
								<div className=' lg:mx-auto w-[22rem] md:w-[42rem] lg:w-[65rem] lg:container flex flex-col justify-center items-center  text-gray-900/70 mb-8 '>
									<div className='pt-2 pb-3  w-[22rem] md:w-[42rem] lg:w-[55rem] justify-start  items-baseline flex flex-row align-bottom  '>
										<div
											class={` w-10 h-10 md:w-16  md:h-16 lg:w-20 lg:h-20 mr-4 md:mr-8 mb-4      font-serif rounded-full flex items-center justify-center ${item.accentColor}`}>
											<span class='text-white text-2xl md:text-3xl lg:text-5xl font-bold p-4'>
												{index + 1}
											</span>
										</div>

										<span className='text-xl md:text-4.5xl  text-center mt-6 capitalize'>
											{item.section}
										</span>
		
									</div>

									<div className='leading-relaxed  w-[22rem] md:w-[42rem] lg:w-[55rem] text-base text-black text-left max-w-6xl space-y-4'>
										{documentToReactComponents(item.richText, renderOptions)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>*/}
		</div>
	);
}

export default CaseStudy;
