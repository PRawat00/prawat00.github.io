import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://prwt.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Cats",
    href: "/cats",
  },
];

export const SOURCE_CODE_GITHUB_REPO = "PRawat00/portfolio";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/PRawat00";

export const UTM_PARAMS = {
  utm_source: "prwt.dev",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
