import React from "react";
import BlogCard from "./BlogCard";

interface BlogCardsProps {
  items: any; // Use the imported type for the items array
  hideLastItemOnMobile?: boolean; // Optional boolean prop
}

// Rename component to PascalCase
const BlogCards: React.FC<BlogCardsProps> = ({
  items,
  hideLastItemOnMobile = false, // Default value is fine
}) => {
  return (
    <section className="pb-500 lg:pb-800">
      {/* Fixed Grid Container - Following Atlassian Design Patterns */}
      <div className="max-w-11xl mx-auto px-200 md:px-300 lg:px-500">
        {/* Responsive CSS Grid - 8-Point System Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-400 mt-300">
          {items.map((item, index) => (
            <div
              className="bg-gray-100/50 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline-solid after:-outline-offset-2 after:rounded-3xl after:outline-gray-700/20 px-400 pt-400 md:pt-200 md:px-200 lg:pt-300 lg:px-400 after:pointer-events-none h-full"
              key={item.sys.id}
            >
              <BlogCard blog={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
