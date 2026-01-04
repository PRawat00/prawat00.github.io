"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type {
  ProjectCategory,
  Project,
} from "@/features/portfolio/types/projects";

interface ProjectFilterBarProps {
  activeCategory: ProjectCategory | "All";
  onCategoryChange: (category: ProjectCategory | "All") => void;
  projects: Project[];
}

export function ProjectFilterBar({
  activeCategory,
  onCategoryChange,
  projects,
}: ProjectFilterBarProps) {
  // Calculate category counts
  const categoryCounts = React.useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };

    projects.forEach((project) => {
      counts[project.category] = (counts[project.category] || 0) + 1;
    });

    return counts;
  }, [projects]);

  const categories: (ProjectCategory | "All")[] = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))).sort(),
  ];

  return (
    <Tabs
      value={activeCategory}
      onValueChange={(value) =>
        onCategoryChange(value as ProjectCategory | "All")
      }
    >
      <TabsList className="w-full justify-start overflow-x-auto">
        {categories.map((category) => (
          <TabsTrigger key={category} value={category}>
            {category}
            <sup className="ml-1 font-mono text-xs opacity-60">
              ({categoryCounts[category] || 0})
            </sup>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
