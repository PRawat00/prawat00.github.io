import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "/images/screenshots/screenshot-mobile-dark.webp",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "/images/screenshots/screenshot-mobile-light.webp",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "/images/screenshots/screenshot-desktop-dark.webp",
        type: "image/webp",
        sizes: "1920x1080",
        form_factor: "wide",
      },
      {
        src: "/images/screenshots/screenshot-desktop-light.webp",
        type: "image/webp",
        sizes: "1920x1080",
        form_factor: "wide",
      },
    ],
  };
}
