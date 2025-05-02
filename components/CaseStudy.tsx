import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types"; // Import Document type
import { renderOptions } from "../util/rich-text-types";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import CardHeader from "./CardHeader";
import React from "react"; // Import React for FC type

// Define the structure for each item in the casestudy array
interface CaseStudyItem {
	image: string;
	section: string;
	bgColor: string;
	accentColor: string;
	richText: Document; // Use Contentful's Document type
}

// Define the props for the CaseStudy component
interface CaseStudyProps {
	// These seem unused in the current active code, but let's type them as Document or string
	// If they were meant for the commented section, Document might be more appropriate
	problem?: Document | string; // Optional or provide a default/ensure it's passed
	approach?: Document | string; // Optional or provide a default/ensure it's passed
	result?: Document | string; // Optional or provide a default/ensure it's passed

	// These are actively used
	richTextProblem: Document;
	richTextApproach: Document;
	richTextResult: Document;

	// Type for technology - assuming it's an array of strings based on potential usage context
	// Adjust if the actual type is different (e.g., object[], etc.)
	technology?: string[]; // Optional or provide a default/ensure it's passed
}

const CaseStudy: React.FC<CaseStudyProps> = ({
	problem, // Included but unused in active code
	approach, // Included but unused in active code
	result, // Included but unused in active code
	richTextProblem,
	richTextApproach,
	richTextResult,
	technology, // Included but unused in active code
}) => {
	// Explicitly type the casestudy array
	const casestudy: CaseStudyItem[] = [
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
	// console.log("^^^^^Tech", technology) // Log is fine, prop is typed

	return (
		<div className='my-20 flex flex-col gap-8 md:mx-auto md:container'>
			<div className='grid grid-cols-1  gap-8 '>
				{/* Assuming Card and CardHeader components accept these props and are typed */}
				<Card className=' pb-8 bg-gray-100/60   '>
					<CardHeader
						title={"The Challenge"}
						description={"What Problem are am I trying to solve"} 
						className={undefined}					/>
					{/* Render rich text */}
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
						className='' // className is valid for CardHeader if it accepts it
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

			{/* Commented out section remains unchanged */}
			{/*<section className=' '>
				...
			</section>*/}
		</div>
	);
}

export default CaseStudy;

