import type { CatGalleryData } from "@/features/profile/types/gallery";

export const catGalleryData: CatGalleryData = {
  cats: [
    {
      id: "midnight-zoomies",
      number: "01",
      name: "Midnight Zoomies",
      nickname: "Zooms",
      subtitle: "Professional Athlete & 3 AM Sprint Champion",
      image: "/images/gallery/cats/M.jpeg",
      specs: [
        { label: "Profession", value: "Olympic Sprinter" },
        { label: "Temperament", value: "Hyperactive & Playful" },
      ],
      badges: [
        { text: "0-60 in 1.2 seconds" },
        { text: "Peak hours: 3-4 AM" },
        { text: "Parkour certified" },
      ],
    },
    {
      id: "captain-fluffernutter",
      number: "02",
      name: "Captain Fluffernutter",
      nickname: "Captain",
      subtitle: "Adventure Seeker & Treat Negotiator",
      image: "/images/gallery/cats/Peanut.jpeg",
      specs: [
        { label: "Profession", value: "Exploration Officer" },
        { label: "Temperament", value: "Brave & Charming" },
      ],
      badges: [
        { text: "Explored 47 cardboard boxes" },
        { text: "Master of negotiation" },
        { text: "Floof level: Maximum" },
      ],
    },
    {
      id: "sir-biscuit-paws",
      number: "03",
      name: "Sir Biscuit Paws",
      nickname: "Biscuit",
      subtitle: "Master Baker & Kneading Expert",
      image: "/images/gallery/cats/Mango.jpeg",
      specs: [
        { label: "Profession", value: "Professional Baker" },
        { label: "Temperament", value: "Gentle & Artistic" },
      ],
      badges: [
        { text: "Makes 200 biscuits/day" },
        { text: "Softest paws certified" },
        { text: "Purr-fect technique" },
      ],
    },
    {
      id: "professor-whiskerstein",
      number: "04",
      name: "Professor Whiskerstein",
      nickname: "Prof",
      subtitle: "PhD in Quantum Physics & Elder Scholar",
      image: "/images/gallery/cats/Lili.jpeg",
      specs: [
        { label: "Profession", value: "Theoretical Physicist" },
        { label: "Temperament", value: "Wise & Contemplative" },
      ],
      badges: [
        { text: "Published 47 meow papers" },
        { text: "Box dimension expert" },
        { text: "Stares at walls (research)" },
      ],
    },
    {
      id: "galaxy-destroyer",
      number: "05",
      name: "Galaxy Destroyer",
      nickname: "Destroyer",
      subtitle: "Professional Chef & Chaos Coordinator",
      image: "/images/gallery/cats/gd.jpeg",
      specs: [
        { label: "Profession", value: "Executive Chef" },
        { label: "Temperament", value: "Mischievous & Loving" },
      ],
      badges: [
        { text: "Knocks things off tables" },
        { text: "Purrs at 85 dB" },
        { text: "Naps: 16 hrs/day" },
      ],
    },
  ],
};
