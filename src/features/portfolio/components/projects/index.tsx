"use client";

import { useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { ProjectDetailModal } from "@/components/project-detail-modal";

import { PROJECTS } from "../../data/projects";
import type { Project } from "@/features/portfolio/types/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const visibleProjects = PROJECTS.filter((p) => p.isVisible !== false);

  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({visibleProjects.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectDetailModal
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </Panel>
  );
}
