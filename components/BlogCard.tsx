import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { BlogCardProps } from "../types/contentful";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";

interface EnhancedBlogCardProps extends BlogCardProps {
  readTime?: string;
  priority?: boolean;
}

export default function BlogCard({ blog, readTime = "3 min read", priority = false }: EnhancedBlogCardProps) {
  const { title, slug, summary, thumbnail, tags } = blog.fields;
  const imageUrl = thumbnail?.fields?.file?.url
    ? `https:${thumbnail.fields.file.url}?fm=webp&w=800&q=80`
    : "/placeholder-image.webp";
  const blurDataURL = thumbnail?.fields?.file?.url
    ? `https:${thumbnail.fields.file.url}?fm=webp&w=20&q=10`
    : "/placeholder-image.webp";
  const imageAltText = title || "Blog post thumbnail";

  return (
    <article className="h-full flex flex-col overflow-hidden relative">
      {/* Image Section - Flush to top and sides */}
      <div className="relative">
        <Link href={`/blog/${slug}`} className="block">
          <div className="aspect-[16/9] overflow-hidden">
            <Image
              src={imageUrl}
              blurDataURL={blurDataURL}
              placeholder="blur"
              height={500}
              width={800}
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105 rounded-xl"
              alt={imageAltText}
              priority={priority}
            />
          </div>
        </Link>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-150">
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-100 mb-200">
            {tags.slice(0, 2).map((tag) => (
              <Badge
                key={tag.sys.id}
                variant="secondary"
                className="bg-[var(--teal-surface)] text-teal-700 border-[var(--teal-border-subtle)] hover:bg-[var(--teal-surface-hover)] transition-colors duration-200 blog-meta-text"
              >
                {tag.fields.name}
              </Badge>
            ))}
          </div>
        )}

        {/* Read Time */}
        <div className="flex items-center gap-100 mb-200 text-gray-500">
          <Clock className="w-4 h-4" />
          <span className="blog-meta-text">{readTime}</span>
        </div>

        {/* Title */}
        <Link href={`/blog/${slug}`} className="group">
          <h3 className="font-serif font-bold mb-150 line-clamp-2 blog-card-title group-hover:text-teal-600 transition-colors duration-300">
            {title}
          </h3>
        </Link>

        {/* Summary */}
        <p className="text-muted-foreground mb-200 line-clamp-3 flex-grow leading-relaxed blog-meta-text">
          {summary}
        </p>

        {/* CTA Button with Magnetic Effect */}
        <div className="mt-auto mb-200">
          <div className="magnetic-button">
            <Button
              asChild
              size="sm"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <Link href={`/blog/${slug}`} className="inline-flex items-center justify-center gap-100">
                Continue Reading
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle hover border glow */}
      <div className="absolute inset-0 rounded-xl border border-transparent hover:border-[var(--teal-border-subtle)] transition-colors duration-300 pointer-events-none"></div>
    </article>
  );
}
