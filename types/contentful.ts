// /Users/Kenny/Nextjs_Portfolio/nextjs-portfolio/types/contentful.ts

// You might want to import types from the contentful package if you have it installed
// import type { Asset, Entry, EntryFields } from 'contentful';
import type { Document as RichTextDocument } from "@contentful/rich-text-types";
// Basic Sys type (replace with import if using contentful types)
interface ContentfulSys {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
  contentType?: {
    sys: {
      id: string;
      type: string;
      linkType: string;
    };
  };
  // Add other sys properties if needed
}

// Basic Asset File type (replace with import if using contentful types)
interface ContentfulAssetFile {
  url: string;
  details: {
    size: number;
    image?: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
}

// Interface for Contentful Image Asset (replace with import { Asset } from 'contentful')
export interface ContentfulImage {
  sys: ContentfulSys;
  fields: {
    title: string;
    description?: string;
    file: ContentfulAssetFile;
  };
}


export interface Technology {
    sys: { id: string };
    fields: {
        name: string;
        lucideIconName?: string;
        customIcon?: ContentfulImage;
    };
}



// Add/Update PortfolioItemFields to include all fields used
export interface PortfolioItemFields {
  title: string; // Assuming 'name' in JS corresponds to 'title' in Contentful model
  slug: string;
  thumbnail?: ContentfulImage; // Optional
  caseStudyMainImage?: ContentfulImage; // Optional
  description?: string; // Optional
  gallery?: ContentfulImage[]; // Optional array of images
  related?: PortfolioItem[]; // Optional array of related portfolio items
  summary?: string; // Optional
  url?: string; // Optional (View Code link)
  demoUrl?: string; // Optional (Live Demo link)
  // technology?: ContentfulImage[]; // Optional array of technology logo images
  // tech?: string[]; // Optional array of tech name strings (used by TechStack)
  approach?: string; // Optional
  problem?: string; // Optional
  result?: string; // Optional
  richTextProblem?: RichTextDocument; // Optional
  richTextApproach?: RichTextDocument; // Optional
  richTextResult?: RichTextDocument; // Optional
  featured?: boolean; // Added from index.tsx usage
  sortByNumber?: number; // Added from index.tsx usage
  technologies?: Technology[];
}


// Describes the structure within thumbnail.fields
interface ThumbnailFile {
  url: string;
}

// Describes the structure within thumbnail
interface ThumbnailFields {
  file: ThumbnailFile;
  // Add other potential fields from thumbnail.fields if needed, e.g., title, description
}

// Describes the thumbnail object itself
interface Thumbnail {
  fields: ThumbnailFields;
  // Add other potential top-level fields from thumbnail if needed, e.g., sys.id
}

// Describes the structure within blog.fields
interface BlogFields {
  title: string;
  slug: string;
  summary: string;
  thumbnail: Thumbnail; // Use the nested Thumbnail interface
}

// Describes the main blog object prop
interface Blog {
  fields: BlogFields;
  // Add other potential top-level fields from blog if needed, e.g., sys.id, metadata
}

// Describes the props expected by the BlogCard component
export interface BlogCardProps {
  blog: Blog;
}


// Interface for a Portfolio Item entry
// export interface PortfolioItem {
//   sys: ContentfulSys; // Or your imported Sys type
//   fields: PortfolioItemFields;
// }


// Interface for the props passed specifically to the Portfolio Detail page component
export interface PortfolioDetailPageProps {
  portfolio: PortfolioItem;
}





// Interface for the fields within a Portfolio Item entry
// export interface PortfolioItemFields {
//   title: string;
//   slug: string;
//   thumbnail: ContentfulImage; // Or use: Asset;
//   featured: boolean;
//   sortByNumber: number;
//   // Add other fields from your 'portfolio' content type
// }

// Interface for a Portfolio Item entry (replace with import { Entry } from 'contentful')
export interface PortfolioItem {
  sys: ContentfulSys;
  fields: PortfolioItemFields;
}

// Interface for the fields within a Blog Post entry
export interface BlogPostFields {
  title: string;
  slug: string;
  thumbnail?: ContentfulImage
  photoCredit?: string;
 
  richText?: RichTextDocument; 
 
  // Add other fields from your 'blogPost' content type
}

// Interface for a Blog Post entry (replace with import { Entry } from 'contentful')
export interface BlogPost {
  sys: ContentfulSys;
  fields: BlogPostFields;
}

// Interface for the props passed specifically to the Index page component
export interface IndexPageProps {
  portfolio?: PortfolioItem[];
  blog?: BlogPost[];
}

export interface BlogsPageProps {
	blogs: BlogPost[]; // This page only needs blogs
  
}

// Define Props interface for the page
export interface BlogPageProps {
  blog: BlogPost;
  
}


export interface PortfolioPageProps {
	portfolio: PortfolioItem[]; // This page only needs portfolio items
}

export interface Country {
  code: string;
  name: string;
}