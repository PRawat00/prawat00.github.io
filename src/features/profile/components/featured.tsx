"use client";

import React, { useState } from "react";

import { FeaturedCard } from "@/components/featured-card";
import { ProjectDetailModal } from "@/components/project-detail-modal";
import { featuredItems } from "@/data/featured";
import { PROJECTS } from "@/features/profile/data/projects";
import type { Project } from "@/features/profile/types/projects";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Featured() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Panel id="featured">
      <PanelHeader>
        <PanelTitle>Featured</PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2 lg:grid-cols-3">
          <div className="border-r border-edge"></div>
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item, index) => (
            <FeaturedCard
              key={item.id}
              item={item}
              shouldPreloadImage={index < 2}
              onClick={
                item.projectId
                  ? () => {
                      const project = PROJECTS.find(
                        (p) => p.id === item.projectId
                      );
                      if (project) {
                        setSelectedProject(project);
                      }
                    }
                  : undefined
              }
            />
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </Panel>
  );
}
