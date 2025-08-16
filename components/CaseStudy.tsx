import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { renderOptions } from "../util/rich-text-types";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Target, Lightbulb, BarChart } from "lucide-react"; // Icons for each section

// --- Type Definitions (Updated for clarity) ---
interface CaseStudyProps {
    richTextProblem: Document;
    richTextApproach: Document;
    richTextResult: Document;
}

// --- NEW: A reusable section component for the case study ---
const CaseStudySection = ({ title, description, icon: Icon, richText }) => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Column: Title and Icon */}
        <div className="md:col-span-1">
            <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-green-600" />
                <h3 className="font-serif text-2xl font-bold">{title}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
        {/* Right Column: Rich Text Content */}
        <div className="md:col-span-3 prose prose-lg max-w-none">
            {documentToReactComponents(richText, renderOptions)}
        </div>
    </div>
);


const CaseStudy: React.FC<CaseStudyProps> = ({
    richTextProblem,
    richTextApproach,
    richTextResult,
}) => {
    return (
        // UPDATED: Changed container to be wider on large screens
        <div className='my-20  max-w-8xl'>
            <Card className="bg-white/70 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12 space-y-12">
                    {/* Section 1: The Challenge */}
                    <CaseStudySection 
                        title="The Challenge"
                        description="What problem was I trying to solve?"
                        icon={Target}
                        richText={richTextProblem}
                    />

                    <Separator />

                    {/* Section 2: The Solution */}
                     <CaseStudySection 
                        title="The Solution"
                        description="My approach to solving the problem."
                        icon={Lightbulb}
                        richText={richTextApproach}
                    />

                    <Separator />

                    {/* Section 3: The Result */}
                     <CaseStudySection 
                        title="The Result"
                        description="The impact and outcomes of the project."
                        icon={BarChart}
                        richText={richTextResult}
                    />
                </CardContent>
            </Card>
        </div>
    );
}

export default CaseStudy;
