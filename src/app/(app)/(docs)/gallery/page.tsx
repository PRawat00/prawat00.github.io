import type { Metadata } from "next";

import { CatAccordionSlider } from "@/features/profile/components/gallery/cat-accordion-slider";
import { catGalleryData } from "@/features/profile/data/cats";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A collection of cats that live in my heart - each with their own unique personality and quirks.",
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Cats in my Heart
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Meet the wonderful cats that have touched my life - from professional
          chefs to theoretical physicists, each one brings their own special
          chaos and joy.
        </p>
      </div>

      <div className="w-full">
        <CatAccordionSlider cats={catGalleryData.cats} itemsPerPage={4} />
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>Click on any cat to learn more about them</p>
        <p className="mt-1">Use arrow keys or navigation buttons to explore</p>
      </div>
    </div>
  );
}
