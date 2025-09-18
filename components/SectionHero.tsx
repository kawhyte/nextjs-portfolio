import React from 'react';
import { Separator } from "@/components/ui/separator";

interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    // UPDATED: Changed padding to push content below the fixed navbar
    <div className="container mx-auto max-w-3xl text-center pt-1600 pb-600 md:pt-1600 md:pb-800">
      <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center mt-400 leading-mega-16">
        {title}
      </h2>
      <p className="mt-200 max-w-2xl mx-auto text-muted-foreground md:text-lg">
        {description}
      </p>
      <Separator className="mt-300 w-24 mx-auto" />
    </div>
  );
}
