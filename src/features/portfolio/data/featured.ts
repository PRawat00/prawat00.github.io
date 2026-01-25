import type { FeaturedItem } from "@/types/featured";

export const featuredItems: FeaturedItem[] = [
  {
    id: "cats",
    title: "Cats in my Heart",
    description: "Meet the wonderful cats that have touched my life",
    image: "/images/gallery/cats/Template.png",
    href: "/cats",
  },
  {
    id: "cyberintel",
    title: "CyberIntel Agent",
    description:
      "Automated CVE analysis for NPM/Python libraries with AI-powered fix recommendations on AWS infrastructure",
    image: "/r/CyberIntel__.gif",
    projectId: "cyberintel-summarizer",
    new: true,
  },
];
