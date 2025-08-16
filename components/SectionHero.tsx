import React from 'react';
import { Separator } from "@/components/ui/separator";

interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    // UPDATED: Changed padding to push content below the fixed navbar
    <div className="container mx-auto max-w-3xl text-center pt-28 pb-12 md:pt-32 md:pb-16">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
        {description}
      </p>
      <Separator className="mt-6 w-24 mx-auto" />
    </div>
  );
}
