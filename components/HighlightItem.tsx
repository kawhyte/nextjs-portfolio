import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { BiCheckCircle } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import { Highlight } from "../types/contentful";



const HighlightItem = ({ highlight }: { highlight: Highlight }) => {
    const { name, isMetric, iconName, link } = highlight.fields;
    // Determine which icon to use
    const IconComponent = iconName && LucideIcons[iconName] ? LucideIcons[iconName] : BiCheckCircle;
    
    // The main content of the highlight (icon and text)
    const content = (
        <div className={twMerge(
            "flex gap-3 items-start text-sm",
            isMetric && "font-bold text-green-700"
        )}>
            <IconComponent className={twMerge(
                "w-5 h-5 shrink-0 mt-0.5",
                isMetric ? "text-green-600" : "text-green-500"
            )} />
            <span>{name}</span>
        </div>
    );

    // If there's a link, wrap the content in a Next.js Link component
    if (link?.fields?.slug) {
        const contentType = link.sys.contentType.sys.id;
        const href = `/${contentType === 'portfolio' ? 'portfolio' : 'blog'}/${link.fields.slug}`;

        return (
            <li key={highlight.sys.id}>
                <Link href={href} className="hover:opacity-70 transition-opacity">
                    {content}
                </Link>
            </li>
        );
    }

    // Otherwise, just render the content in a list item
    return (
        <li key={highlight.sys.id}>
            {content}
        </li>
    );
};

export default HighlightItem;