import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BackToProjectsButton } from "@/components/back-to-projects-button";
import { MDX } from "@/components/mdx";
import { ProjectActionButtons } from "@/components/project-action-buttons";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/typography";
import { SITE_INFO } from "@/config/site";
import { PROJECTS } from "@/features/portfolio/data/projects";
import { getProjectContent } from "@/features/portfolio/data/project-content";

export async function generateStaticParams() {
  return PROJECTS.filter((p) => p.isVisible !== false).map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return notFound();
  }

  const { title, description, image, summary } = project;
  const pageUrl = `${SITE_INFO.url}/projects/${project.id}`;
  const ogImage = image || `/og/simple?title=${encodeURIComponent(title)}`;

  return {
    title,
    description: description || summary,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      url: pageUrl,
      type: "article",
      title,
      description: description || summary,
      images: {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description || summary,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const id = (await params).id;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Try to load MDX content for this project
  const projectContent = await getProjectContent(id);

  const { start, end } = project.period;
  const isOngoing = !end;

  // Find previous and next projects (only visible projects)
  const visibleProjects = PROJECTS.filter((p) => p.isVisible !== false);
  const projectIndex = visibleProjects.findIndex((p) => p.id === id);
  const previousProject =
    projectIndex > 0 ? visibleProjects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < visibleProjects.length - 1
      ? visibleProjects[projectIndex + 1]
      : null;

  return (
    <>
      <div className="flex items-center justify-between p-2 pl-4">
        <BackToProjectsButton />

        <div className="flex items-center gap-2">
          {previousProject && (
            <Button variant="secondary" size="icon:sm" asChild>
              <Link href={`/projects/${previousProject.id}`}>
                <ArrowLeftIcon />
                <span className="sr-only">Previous</span>
              </Link>
            </Button>
          )}

          {nextProject && (
            <Button variant="secondary" size="icon:sm" asChild>
              <Link href={`/projects/${nextProject.id}`}>
                <span className="sr-only">Next</span>
              </Link>
            </Button>
          )}
        </div>
      </div>

      <div className="screen-line-before screen-line-after">
        <div className="h-8 before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56" />
      </div>

      <Prose className="px-4">
        <div className="mb-6">
          <div className="mb-3 flex items-start justify-between gap-4">
            <h1 className="screen-line-after flex-1 font-semibold">
              {project.title}
            </h1>

            {/* Action Buttons on the right */}
            <div className="shrink-0">
              <ProjectActionButtons
                project={project}
                variant="modal"
                hideOnDetailPage={true}
              />
            </div>
          </div>

          <div className="flex items-center gap-0.5 text-sm text-muted-foreground">
            <span>{start}</span>
            <span className="font-mono">—</span>
            {isOngoing ? (
              <>
                <span>Present</span>
              </>
            ) : (
              <span>{end}</span>
            )}
          </div>
        </div>

        {/* Conditionally render MDX content or fallback to summary/description */}
        {projectContent ? (
          <MDX code={projectContent.content} />
        ) : (
          <>
            {/* Summary */}
            {project.summary && (
              <p className="lead mt-6 mb-6">{project.summary}</p>
            )}

            {/* Description */}
            {project.description && (
              <div className="my-8 leading-relaxed whitespace-pre-line text-muted-foreground">
                {project.description}
              </div>
            )}

            {/* Technologies Used - Only for projects without MDX */}
            {project.skills.length > 0 && (
              <div className="my-8">
                <h2 className="mb-4 font-semibold">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Tag key={index} className="text-xs">
                      {skill}
                    </Tag>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </Prose>

      <div className="screen-line-before h-4 w-full" />
    </>
  );
}
