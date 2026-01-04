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
  hideOnDetailPage = false,
}: {
  project: Project;
  variant?: "card" | "modal";
  hideOnDetailPage?: boolean;
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
        {showGithub && project.link && (
          <Button
            size="sm"
            variant="default"
            className="hidden gap-1.5 md:inline-flex"
            onClick={(e) => {
              handleButtonClick(e);
              window.open(addQueryParams(project.link, UTM_PARAMS), "_blank");
            }}
          >
            <GithubIcon className="size-3.5" />
            <span className="hidden lg:inline">GitHub</span>
          </Button>
        )}
        {showDemo && project.demoLink && (
          <Button
            size="sm"
            variant="secondary"
            className="hidden gap-1.5 md:inline-flex"
            onClick={(e) => {
              handleButtonClick(e);
              window.open(
                addQueryParams(project.demoLink || "", UTM_PARAMS),
                "_blank"
              );
            }}
          >
            <ExternalLinkIcon className="size-3.5" />
            <span className="hidden lg:inline">Demo</span>
          </Button>
        )}
        {showCaseStudy && (
          <Button
            size="sm"
            variant="outline"
            className="hidden gap-1.5 md:inline-flex"
            onClick={(e) => {
              handleButtonClick(e);
            }}
          >
            <FileTextIcon className="size-3.5" />
            <span className="hidden lg:inline">Case Study</span>
          </Button>
        )}

        {/* Icon-only buttons on mobile */}
        <div className="flex gap-2 md:hidden">
          {showGithub && project.link && (
            <Button
              size="sm"
              variant="default"
              className="p-2"
              title="View on GitHub"
              onClick={(e) => {
                handleButtonClick(e);
                window.open(addQueryParams(project.link, UTM_PARAMS), "_blank");
              }}
            >
              <GithubIcon className="size-4" />
              <span className="sr-only">View on GitHub</span>
            </Button>
          )}
          {showDemo && project.demoLink && (
            <Button
              size="sm"
              variant="secondary"
              className="p-2"
              title="View Live Demo"
              onClick={(e) => {
                handleButtonClick(e);
                window.open(
                  addQueryParams(project.demoLink || "", UTM_PARAMS),
                  "_blank"
                );
              }}
            >
              <ExternalLinkIcon className="size-4" />
              <span className="sr-only">View Live Demo</span>
            </Button>
          )}
          {showCaseStudy && (
            <Button
              size="sm"
              variant="outline"
              className="p-2"
              title="View Case Study"
              onClick={(e) => {
                handleButtonClick(e);
              }}
            >
              <FileTextIcon className="size-4" />
              <span className="sr-only">View Case Study</span>
            </Button>
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
          className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
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
      {showCaseStudy && !hideOnDetailPage && (
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
