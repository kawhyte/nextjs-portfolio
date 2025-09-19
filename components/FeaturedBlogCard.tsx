import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { BlogCardProps } from "../types/contentful";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

interface FeaturedBlogCardProps extends BlogCardProps {
  readTime?: string;
  publishDate?: string;
}

export default function FeaturedBlogCard({ blog, readTime = "5 min read", publishDate }: FeaturedBlogCardProps) {
  const { title, slug, summary, thumbnail, tags } = blog.fields;
  const imageUrl = thumbnail?.fields?.file?.url
    ? `https:${thumbnail.fields.file.url}?fm=webp&w=1200&q=85`
    : "/placeholder-image.webp";
  const blurDataURL = thumbnail?.fields?.file?.url
    ? `https:${thumbnail.fields.file.url}?fm=webp&w=20&q=10`
    : "/placeholder-image.webp";
  const imageAltText = title || "Featured blog post";

  return (
    <article className="blog-featured-hover relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm border border-gray-200/50 shadow-lg">
      {/* Featured Badge */}
      <div className="absolute top-400 left-400 z-20">
        <Badge
          variant="default"
          className="bg-teal-500 text-white border-0 shadow-lg backdrop-blur-sm font-medium px-200 py-100"
        >
          Featured
        </Badge>
      </div>

      <div className="grid lg:grid-cols-2 gap-0 min-h-[400px] lg:min-h-[500px]">
        {/* Image Section */}
        <div className="relative order-2 lg:order-1">
          <Link href={`/blog/${slug}`} className="block h-full">
            <div className="aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden">
              <Image
                src={imageUrl}
                blurDataURL={blurDataURL}
                placeholder="blur"
                height={600}
                width={1200}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                alt={imageAltText}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Content Section */}
        <div className="order-1 lg:order-2 flex flex-col justify-center p-600 lg:p-800">
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-100 mb-300">
              {tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag.sys.id}
                  variant="secondary"
                  className="bg-[var(--teal-surface)] text-teal-700 border-[var(--teal-border-subtle)] hover:bg-[var(--teal-surface-hover)] blog-meta-text"
                >
                  {tag.fields.name}
                </Badge>
              ))}
            </div>
          )}

          {/* Metadata */}
          <div className="flex items-center gap-300 mb-400 text-gray-500">
            {publishDate && (
              <div className="flex items-center gap-100 blog-meta-text">
                <Calendar className="w-4 h-4" />
                <span>{publishDate}</span>
              </div>
            )}
            <div className="flex items-center gap-100 blog-meta-text">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Title */}
          <Link href={`/blog/${slug}`} className="group">
            <h2 className="font-serif font-bold text-gray-900 mb-300 blog-featured-title group-hover:text-teal-600 transition-colors duration-300 line-clamp-3">
              {title}
            </h2>
          </Link>

          {/* Summary */}
          <p className="text-gray-600 mb-500 line-clamp-3 leading-relaxed blog-meta-text">
            {summary}
          </p>

          {/* CTA Button with Magnetic Effect */}
          <div className="magnetic-button inline-block">
            <Button
              asChild
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Link href={`/blog/${slug}`} className="inline-flex items-center gap-200">
                Read Full Article
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle teal glow border on hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent hover:border-[var(--teal-border-subtle)] transition-colors duration-300 pointer-events-none"></div>
    </article>
  );
}