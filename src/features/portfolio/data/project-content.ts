import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectMetadata {
  projectId: string;
  lastUpdated?: string;
}

export interface ProjectContent {
  metadata: ProjectMetadata;
  content: string;
  projectId: string;
}

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

function parseFrontmatter(fileContent: string) {
  const file = matter(fileContent);
  return {
    metadata: file.data as ProjectMetadata,
    content: file.content,
  };
}

export function getProjectContent(projectId: string): ProjectContent | null {
  try {
    const filePath = path.join(projectsDirectory, `${projectId}.mdx`);

    if (!fs.existsSync(filePath)) {
      return null; // No MDX content for this project
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { metadata, content } = parseFrontmatter(fileContents);

    return {
      metadata: metadata || { projectId },
      content,
      projectId,
    };
  } catch (error) {
    console.error(`Error loading MDX for project ${projectId}:`, error);
    return null;
  }
}

export function hasProjectContent(projectId: string): boolean {
  const filePath = path.join(projectsDirectory, `${projectId}.mdx`);
  return fs.existsSync(filePath);
}
