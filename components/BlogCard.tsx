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
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      <div className="w-full h-44 overflow-hidden">
        <AnimatedImage
          src={imageUrl}
          alt={title || "Blog post thumbnail"}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-amber-50 p-5 space-y-3 flex flex-col flex-1">
        {/* --- UPDATED: Tags Section --- */}
        <div className="flex flex-wrap gap-1.5">
          {tags?.map((tag) => (
            // 2. Use the Badge component and a proper key
            <Badge key={tag.sys.id} variant="secondary">
              {tag.fields.name}
            </Badge>
          ))}
        </div>

        <CardTitle className="text-lg font-semibold leading-tight line-clamp-2">
          {title}
        </CardTitle>

        <CardDescription className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {summary}
        </CardDescription>

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
