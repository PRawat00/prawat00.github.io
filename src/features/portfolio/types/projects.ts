export type ProjectCategory =
  | "Dashboard"
  | "App"
  | "Website"
  | "ML/AI"
  | "Data Engineering"
  | "Other";

export type ProjectStatus = "Shipped" | "In Progress" | "Concept";

export type Project = {
  id: string;
  title: string;
  period: {
    start: string;
    end?: string;
  };
  link: string;
  demoLink?: string;
  skills: string[];
  description?: string;
  summary?: string;
  logo?: string;
  image?: string;
  isExpanded?: boolean;
  showGithubLink?: boolean;
  showDemoLink?: boolean;
  isVisible?: boolean;
  category: ProjectCategory;
  status: ProjectStatus;
  updatedAt: string;
};
