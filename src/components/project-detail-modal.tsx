"use client";

import {
  ExternalLinkIcon,
  GithubIcon,
  InfinityIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tag } from "@/components/ui/tag";
import { UTM_PARAMS } from "@/config/site";
import type { Project } from "@/features/profile/types/projects";
import { addQueryParams } from "@/utils/url";

export function ProjectDetailModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!project) return null;

  const { start, end } = project.period;
  const isOngoing = !end;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto p-0">
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
          aria-label="Close"
        >
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        {/* Project Image */}
        {project.image && (
          <div className="relative w-full">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={630}
              quality={100}
              className="aspect-[1200/630] w-full rounded-t-2xl object-cover"
              unoptimized
            />
            <div className="pointer-events-none absolute inset-0 rounded-t-2xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
          </div>
        )}

        {/* Content */}
        <div className="space-y-6 p-6">
          {/* Header */}
          <DialogHeader>
            <DialogTitle className="pr-8 text-2xl font-semibold text-balance">
              {project.title}
            </DialogTitle>
            <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
              <dl>
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
          </DialogHeader>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.link && (
              <a
                href={addQueryParams(project.link, UTM_PARAMS)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <GithubIcon className="size-4" />
                View on GitHub
              </a>
            )}
            {project.demoLink && (
              <a
                href={addQueryParams(project.demoLink, UTM_PARAMS)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
              >
                <ExternalLinkIcon className="size-4" />
                View Live Demo
              </a>
            )}
          </div>

          {/* Description */}
          {project.description && (
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <p className="text-sm whitespace-pre-line text-muted-foreground">
                {project.description}
              </p>
            </div>
          )}

          {/* Skills */}
          {project.skills.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Technologies Used</h3>
              <ul className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, index) => (
                  <li key={index} className="flex">
                    <Tag className="text-xs">{skill}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
