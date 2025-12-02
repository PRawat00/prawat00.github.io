export type TechStack = {
  key: string; // Unique identifier used to fetch the corresponding icon
  title: string; // Display name of the technology
  href: string; // Official website URL of the technology
  categories: string[];
  theme?: boolean; // If `true`, the icon changes based on dark and light mode
  useSimpleIcon?: boolean; // If `true`, use Simple Icons CDN instead of DevIcon
  useLocalIcon?: boolean; // If `true`, use local SVG file from public directory
  localIconPath?: string; // Path to local icon file (when useLocalIcon is true)
  invertInDarkMode?: boolean; // If `true`, apply CSS invert filter in dark mode
  // Icon paths:
  // - DevIcon: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/[key]/[key]-original.svg
  // - Simple Icons: https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/[key].svg
  // - Local: /[localIconPath]
};
