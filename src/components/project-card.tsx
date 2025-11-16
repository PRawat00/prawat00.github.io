import { InfinityIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Icons } from "@/components/icons";
import { Tag } from "@/components/ui/tag";
import type { Project } from "@/features/profile/types/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick?: () => void;
}) {
  const { start, end } = project.period;
  const isOngoing = !end;

  return (
    <button
      onClick={onClick}
      className={cn(
        "group/project flex flex-col gap-0 overflow-hidden rounded-lg border border-edge text-left",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "lg:nth-[2n+1]:screen-line-before lg:nth-[2n+1]:screen-line-after",
        "cursor-pointer transition-colors hover:border-foreground/20"
      )}
    >
      {/* Project Image */}
      {project.image && (
        <div className="relative select-none [&_img]:rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={630}
            quality={100}
            className="aspect-[1200/630] w-full object-cover"
            unoptimized
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
        </div>
      )}

      {/* Card Content */}
      <div className="flex flex-col gap-3 p-4">
        {/* Header: Logo + Title + Period */}
        <div className="flex items-start gap-3">
          {project.logo ? (
            project.logo.startsWith("/") || project.logo.startsWith("http") ? (
              <Image
                src={project.logo}
                alt=""
                width={32}
                height={32}
                quality={100}
                className="size-8 shrink-0 rounded-lg object-cover"
                unoptimized
                aria-hidden="true"
              />
            ) : (
              <div
                className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary"
                aria-hidden="true"
              >
                {project.logo}
              </div>
            )
          ) : (
            <div
              className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground"
              aria-hidden="true"
            >
              <Icons.project className="size-5" />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h3 className="mb-1 text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/project:underline">
              {project.title}
            </h3>

            <dl className="text-sm text-muted-foreground">
              <dt className="sr-only">Period</dt>
              <dd className="flex items-center gap-0.5">
                <span>{start}</span>
                <span className="font-mono">—</span>
                {isOngoing ? (
                  <>
                    <InfinityIcon
                      className="size-4.5 translate-y-[0.5px]"
                      aria-hidden
                    />
                    <span className="sr-only">Present</span>
                  </>
                ) : (
                  <span>{end}</span>
                )}
              </dd>
            </dl>
          </div>
        </div>

        {/* Summary */}
        {project.summary && (
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {project.summary}
          </p>
        )}

        {/* Skills Tags (limited) */}
        {project.skills.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {project.skills.slice(0, 6).map((skill, index) => (
              <li key={index} className="flex">
                <Tag className="text-xs">{skill}</Tag>
              </li>
            ))}
            {project.skills.length > 6 && (
              <li className="flex items-center text-xs text-muted-foreground">
                +{project.skills.length - 6} more
              </li>
            )}
          </ul>
        )}

        {/* Read More Indicator */}
        <div className="pt-1 text-sm font-medium text-primary">Read more →</div>
      </div>
    </button>
  );
}
