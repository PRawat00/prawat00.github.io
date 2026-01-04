"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLinkIcon } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/status-badge";
import { Tag } from "@/components/ui/tag";
import type { Project } from "@/features/portfolio/types/projects";
import { Icons } from "@/components/icons";

interface ProjectGalleryListProps {
  projects: Project[];
}

export function ProjectGalleryList({ projects }: ProjectGalleryListProps) {
  if (projects.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center p-8">
        <p className="text-center text-muted-foreground">
          No projects found in this category.
        </p>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40%]">Project</TableHead>
            <TableHead className="w-[20%]">Status</TableHead>
            <TableHead className="w-[20%]">Category</TableHead>
            <TableHead className="w-[20%]">Last Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <m.tr
                key={project.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.03,
                  layout: { duration: 0.3 },
                }}
                className="group border-b border-edge transition-colors hover:bg-muted/50"
              >
                <TableCell>
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-start gap-3 py-2"
                  >
                    {project.logo ? (
                      project.logo.startsWith("/") ||
                      project.logo.startsWith("http") ? (
                        <Image
                          src={project.logo}
                          alt=""
                          width={40}
                          height={40}
                          className="size-10 shrink-0 rounded-lg object-cover"
                          unoptimized
                        />
                      ) : (
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                          {project.logo}
                        </div>
                      )
                    ) : (
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                        <Icons.project className="size-5" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground group-hover:underline">
                        {project.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {project.skills.slice(0, 4).map((skill, i) => (
                          <Tag key={i} className="text-xs">
                            {skill}
                          </Tag>
                        ))}
                        {project.skills.length > 4 && (
                          <span className="text-xs text-muted-foreground">
                            +{project.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    <ExternalLinkIcon className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </TableCell>
                <TableCell>
                  <StatusBadge status={project.status} />
                </TableCell>
                <TableCell>
                  <Tag className="text-xs">{project.category}</Tag>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {formatDate(project.updatedAt)}
                </TableCell>
              </m.tr>
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
    </div>
  );
}
