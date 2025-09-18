import { Card, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // --- 1. Import the Badge component ---
import type { BlogCardProps } from "../types/contentful";
import Link from "next/link";
import AnimatedImage from "./ui/AnimatedImage";

export default function BlogCard({ blog }: BlogCardProps) {
  const { title, slug, summary, thumbnail, tags } = blog.fields;
  const imageUrl = thumbnail?.fields?.file?.url
    ? `https:${thumbnail.fields.file.url}?fm=webp`
    : "/placeholder-image.webp";

  return (
    <div className="w-full max-w-sm mx-auto rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      <div className="w-full h-44 overflow-hidden">
        <AnimatedImage
          src={imageUrl}
          alt={title || "Blog post thumbnail"}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-gray-100/50 p-300 space-y-200 flex flex-col flex-1">
        {/* --- UPDATED: Tags Section with 8-point spacing --- */}
        <div className="flex flex-wrap gap-100">
          {tags?.map((tag) => (
            // Use the Badge component with proper spacing
            <Badge key={tag.sys.id} variant="secondary">
              {tag.fields.name}
            </Badge>
          ))}
        </div>

        <CardTitle className="text-lg font-semibold leading-relaxed-8 line-clamp-2">
          {title}
        </CardTitle>

        <CardDescription className="text-sm text-muted-foreground leading-normal-8 line-clamp-3">
          {summary}
        </CardDescription>

        <CardFooter className="p-0 pt-200 mt-auto">
          <Button
            asChild
            className="bg-teal-500 hover:bg-teal-600/90 text-white text-sm px-200 py-150 rounded-lg"
          >
            <Link href={`/blog/${slug}`}>Continue Reading →</Link>
          </Button>
        </CardFooter>
      </div>
    </div>
  );
}
