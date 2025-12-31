"use client";

import { ExternalLinkIcon, FileTextIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import type { Project } from "@/features/portfolio/types/projects";
import { addQueryParams } from "@/utils/url";
import { UTM_PARAMS } from "@/config/site";

export function ProjectActionButtons({
  project,
  variant = "modal",
}: {
  project: Project;
  variant?: "card" | "modal";
}) {
  const showGithub = project.link && project.showGithubLink !== false;
  const showDemo = project.demoLink && project.showDemoLink !== false;
  const showCaseStudy = true;

  const handleButtonClick = (e: React.MouseEvent) => {
    // Prevent click from propagating to parent card click handler
    e.stopPropagation();
  };

  if (variant === "card") {
    return (
      <div className="flex flex-wrap gap-2">
        {showGithub && (
          <a
            href={addQueryParams(project.link, UTM_PARAMS)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleButtonClick}
            className="hidden md:inline-flex"
          >
            <Button size="sm" variant="default" className="gap-1.5">
              <GithubIcon className="size-3.5" />
              <span className="hidden lg:inline">GitHub</span>
            </Button>
          </a>
        )}
        {showDemo && project.demoLink && (
          <a
            href={addQueryParams(project.demoLink, UTM_PARAMS)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleButtonClick}
            className="hidden md:inline-flex"
          >
            <Button size="sm" variant="secondary" className="gap-1.5">
              <ExternalLinkIcon className="size-3.5" />
              <span className="hidden lg:inline">Demo</span>
            </Button>
          </a>
        )}
        {showCaseStudy && (
          <Link href={`/projects/${project.id}`} onClick={handleButtonClick}>
            <Button size="sm" variant="outline" className="gap-1.5">
              <FileTextIcon className="size-3.5" />
              <span className="hidden lg:inline">Case Study</span>
            </Button>
          </Link>
        )}

        {/* Icon-only buttons on mobile */}
        <div className="flex gap-2 md:hidden">
          {showGithub && (
            <a
              href={addQueryParams(project.link, UTM_PARAMS)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleButtonClick}
            >
              <Button
                size="sm"
                variant="default"
                className="p-2"
                title="View on GitHub"
              >
                <GithubIcon className="size-4" />
                <span className="sr-only">View on GitHub</span>
              </Button>
            </a>
          )}
          {showDemo && project.demoLink && (
            <a
              href={addQueryParams(project.demoLink, UTM_PARAMS)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleButtonClick}
            >
              <Button
                size="sm"
                variant="secondary"
                className="p-2"
                title="View Live Demo"
              >
                <ExternalLinkIcon className="size-4" />
                <span className="sr-only">View Live Demo</span>
              </Button>
            </a>
          )}
          {showCaseStudy && (
            <Link href={`/projects/${project.id}`} onClick={handleButtonClick}>
              <Button
                size="sm"
                variant="outline"
                className="p-2"
                title="View Case Study"
              >
                <FileTextIcon className="size-4" />
                <span className="sr-only">View Case Study</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    );
  }

  // Modal variant - always show full buttons with text
  return (
    <div className="flex flex-wrap gap-3">
      {showGithub && project.link && (
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
      {showDemo && project.demoLink && (
        <a
          href={addQueryParams(project.demoLink, UTM_PARAMS)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
        >
          <ExternalLinkIcon className="size-4" />
          View Live Demo
        </a>
      )}
      {showCaseStudy && (
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
        >
          <FileTextIcon className="size-4" />
          View Case Study
        </Link>
      )}
    </div>
  );
}
