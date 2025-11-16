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
    title: "CyberIntel Summarizer",
    description:
      "Real-time threat intelligence system with fine-tuned LLMs analyzing 100+ daily CVE updates",
    image: "/r/CyberIntel__.gif",
    projectId: "cyberintel-summarizer",
    new: true,
  },
];
