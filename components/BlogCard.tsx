import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { BlogCardProps } from "../types/contentful";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function BlogCard({ blog }: BlogCardProps) {
  const { title, slug, summary, thumbnail, tags } = blog.fields;
  const imageUrl = thumbnail?.fields?.file?.url
    ? `https:${thumbnail.fields.file.url}?fm=webp&w=800&q=80`
    : "/placeholder-image.webp";
  const blurDataURL = thumbnail?.fields?.file?.url
    ? `https:${thumbnail.fields.file.url}?fm=webp&w=20&q=10`
    : "/placeholder-image.webp";
  const imageAltText = title || "Blog post thumbnail";

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Image Section - Flush to top and sides */}
      <div className="relative">
        <Link href={`/blog/${slug}`}>
          <div className="aspect-[16/9] overflow-hidden">
            <Image
              src={imageUrl}
              blurDataURL={blurDataURL}
              placeholder="blur"
              height={500}
              width={800}
              className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105 rounded-xl"
              alt={imageAltText}
            />
          </div>
        </Link>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-150">
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-100 mb-200">
            {tags.map((tag) => (
              <Badge
                key={tag.sys.id}
                variant="secondary"
                className="bg-teal-500/10 text-teal-700 border-teal-200 hover:bg-teal-500/20"
              >
                {tag.fields.name}
              </Badge>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold mb-150 line-clamp-2">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-muted-foreground text-sm mb-200 line-clamp-3 flex-grow">
          {summary}
        </p>

        {/* CTA Button */}
        <div className="mt-auto mb-200">
          <Button
            asChild
            size="sm"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white"
          >
            <Link href={`/blog/${slug}`}>
              Continue Reading
              <ArrowUpRight className="ml-100 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
