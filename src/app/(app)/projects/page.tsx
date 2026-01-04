"use client";

import React, { useState, useMemo } from "react";
import { PROJECTS } from "@/features/portfolio/data/projects";
import type { ProjectCategory } from "@/features/portfolio/types/projects";
import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel";
import { ProjectFilterBar } from "@/features/portfolio/components/projects-gallery/project-filter-bar";
import {
  ViewToggle,
  type ViewMode,
} from "@/features/portfolio/components/projects-gallery/view-toggle";
import { ProjectGalleryGrid } from "@/features/portfolio/components/projects-gallery/project-gallery-grid";
import { ProjectGalleryList } from "@/features/portfolio/components/projects-gallery/project-gallery-list";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">(
    "All"
  );
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    // Load from localStorage on client
    if (typeof window !== "undefined") {
      return (localStorage.getItem("projects-view-mode") as ViewMode) || "grid";
    }
    return "grid";
  });

  // Filter visible projects
  const visibleProjects = useMemo(
    () => PROJECTS.filter((p) => p.isVisible !== false),
    []
  );

  // Filter by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return visibleProjects;
    }
    return visibleProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory, visibleProjects]);

  // Persist view mode to localStorage
  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    if (typeof window !== "undefined") {
      localStorage.setItem("projects-view-mode", mode);
    }
  };

  return (
    <>
      <div className="mx-auto md:max-w-5xl lg:max-w-6xl">
        {/* Page Header */}
        <div className="screen-line-before screen-line-after border-x border-edge px-4 py-8">
          <div className="mb-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Projects
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              A collection of my work across AI/ML, full-stack development, and
              data engineering.
            </p>
          </div>
        </div>

        <div className="screen-line-after h-8 w-full border-x border-edge before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56" />

        {/* Filters and View Toggle */}
        <Panel>
          <PanelHeader>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <ProjectFilterBar
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  projects={visibleProjects}
                />
              </div>
              <ViewToggle
                viewMode={viewMode}
                onViewModeChange={handleViewModeChange}
              />
            </div>
          </PanelHeader>

          {/* Project Display */}
          {viewMode === "grid" ? (
            <ProjectGalleryGrid projects={filteredProjects} />
          ) : (
            <ProjectGalleryList projects={filteredProjects} />
          )}
        </Panel>

        <div className="screen-line-before h-4 w-full border-x border-edge" />
      </div>
    </>
  );
}
