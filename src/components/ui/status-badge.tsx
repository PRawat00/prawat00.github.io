import React from "react";
import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/features/portfolio/types/projects";

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  Shipped: {
    label: "Shipped",
    className:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  },
  "In Progress": {
    label: "In Progress",
    className:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  },
  Concept: {
    label: "Concept",
    className: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400",
  },
};

export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
