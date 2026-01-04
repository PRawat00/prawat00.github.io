"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import type { Project } from "@/features/portfolio/types/projects";
import { ProjectCard } from "@/components/project-card";

interface ProjectGalleryGridProps {
  projects: Project[];
}

export function ProjectGalleryGrid({ projects }: ProjectGalleryGridProps) {
  if (projects.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center p-8">
        <p className="text-center text-muted-foreground">
          No projects found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-2">
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <m.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              layout: { duration: 0.3 },
            }}
          >
            <Link href={`/projects/${project.id}`}>
              <ProjectCard project={project} variant="gallery" />
            </Link>
          </m.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
