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
};
