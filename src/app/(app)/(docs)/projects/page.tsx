import type { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { Tag } from "@/components/ui/tag";
import { PROJECTS } from "@/features/profile/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my data science and AI projects.",
};

export default function Page() {
  return (
    <div className="min-h-svh [--color-project:#10B981] dark:[--color-project:#34D399]">
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Projects</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      {PROJECTS.map((project) => (
        <Link
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/project flex items-start border-b border-edge pr-4 transition-colors hover:bg-muted/50"
        >
          <Icons.github
            className="mx-4 mt-4 size-5 shrink-0 text-(--color-project)"
            aria-hidden
          />

          <div className="flex-1 border-l border-dashed border-edge p-4">
            <div className="mb-2 flex items-start justify-between">
              <h2 className="leading-snug font-medium text-balance underline-offset-4 group-hover/project:underline">
                {project.title}
              </h2>

              {project.period && (
                <span className="ml-2 shrink-0 font-mono text-xs text-muted-foreground">
                  {project.period.start} - {project.period.end || "Present"}
                </span>
              )}
            </div>

            <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
              {project.description}
            </p>

            {project.skills && project.skills.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {project.skills.slice(0, 6).map((skill, index) => (
                  <Tag key={index} className="text-xs">
                    {skill}
                  </Tag>
                ))}
                {project.skills.length > 6 && (
                  <span className="text-xs text-muted-foreground">
                    +{project.skills.length - 6} more
                  </span>
                )}
              </div>
            )}
          </div>
        </Link>
      ))}

      <div className="h-4" />
    </div>
  );
}
