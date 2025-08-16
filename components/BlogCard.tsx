import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { BlogCardProps } from "../types/contentful";
import Link from "next/link";
import AnimatedImage from "./ui/AnimatedImage"; // --- 1. Import the new component ---


export default function BlogCard({ blog }: BlogCardProps) {
  const { title, slug, summary, thumbnail } = blog.fields;
  const imageUrl = thumbnail?.fields?.file?.url
    ? `https:${thumbnail.fields.file.url}?fm=webp`
    : "/placeholder-image.webp";

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      {/* --- 2. Replace the <img> tag with the AnimatedImage component --- */}
      <div className="w-full h-44 overflow-hidden">
        <AnimatedImage
          src={imageUrl}
          alt={title || "Blog post thumbnail"}
          width={600}
          height={400}
          className="w-full h-full object-cover" // Pass the necessary styling
        />
      </div>

      {/* Content */}
      <div className="bg-amber-50 p-5 space-y-3 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          <span className="bg-blue-100 text-blue-800 text-[11px] px-2 py-[2px] rounded-full">
            Career Growth
          </span>
          <span className="bg-green-100 text-green-800 text-[11px] px-2 py-[2px] rounded-full">
            Productivity
          </span>
        </div>

        {/* Title */}
        <CardTitle className="text-lg font-semibold leading-tight line-clamp-2">
          {title}
        </CardTitle>

        {/* Description */}
        <CardDescription className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {summary}
        </CardDescription>

        {/* Footer */}
        <CardFooter className="p-0 pt-3 mt-auto">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg"
          >
            <Link href={`/blog/${slug}`}>Continue Reading →</Link>
          </Button>
        </CardFooter>
      </div>
    </div>
  );
}
