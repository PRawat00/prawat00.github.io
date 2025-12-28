import {
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  GraduationCapIcon,
} from "lucide-react";
import React from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Tag } from "@/components/ui/tag";

import type { Education } from "@/features/portfolio/types/education";

export function EducationItem({ education }: { education: Education }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const startFormatted = formatDate(education.startDate);
  const endFormatted = formatDate(education.endDate);

  return (
    <div className="screen-line-after space-y-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex size-6 shrink-0 items-center justify-center">
          <GraduationCapIcon
            className="size-4 text-muted-foreground"
            aria-hidden
          />
        </div>

        <div className="flex-1">
          <h3 className="text-lg leading-snug font-medium">
            {education.institution}
          </h3>
          <p className="text-sm text-muted-foreground">{education.location}</p>
        </div>
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        <Collapsible defaultOpen={true} asChild>
          <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
            <CollapsibleTrigger className="group/education block w-full text-left select-none">
              <div className="relative z-1 mb-1 flex items-center gap-3 bg-background">
                <div
                  className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground dark:inset-shadow-[1px_1px_1px,0px_0px_1px] dark:inset-shadow-white/15"
                  aria-hidden
                >
                  <GraduationCapIcon className="size-4" />
                </div>

                <h4 className="flex-1 font-medium text-balance">
                  {education.degree} in {education.field}
                </h4>

                <div
                  className="shrink-0 text-muted-foreground [&_svg]:size-4"
                  aria-hidden
                >
                  <ChevronsDownUpIcon className="hidden group-data-[state=open]/education:block" />
                  <ChevronsUpDownIcon className="hidden group-data-[state=closed]/education:block" />
                </div>
              </div>

              <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
                <dl>
                  <dt className="sr-only">Study Period</dt>
                  <dd className="flex items-center gap-0.5">
                    <span>{startFormatted}</span>
                    <span className="font-mono">—</span>
                    <span>{endFormatted}</span>
                  </dd>
                </dl>

                {education.gpa && (
                  <>
                    <Separator
                      className="data-[orientation=vertical]:h-4"
                      orientation="vertical"
                    />
                    <dl>
                      <dt className="sr-only">GPA</dt>
                      <dd>GPA: {education.gpa}</dd>
                    </dl>
                  </>
                )}
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              {education.coursework && education.coursework.length > 0 && (
                <div className="pt-2 pl-9">
                  <h5 className="mb-2 text-sm font-medium text-muted-foreground">
                    Key Coursework
                  </h5>
                  <ul className="flex flex-wrap gap-1.5">
                    {education.coursework.map((course, index) => (
                      <li key={index} className="flex">
                        <Tag>{course}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {education.honors && education.honors.length > 0 && (
                <div className="pt-2 pl-9">
                  <h5 className="mb-2 text-sm font-medium text-muted-foreground">
                    Honors & Awards
                  </h5>
                  <ul className="flex flex-wrap gap-1.5">
                    {education.honors.map((honor, index) => (
                      <li key={index} className="flex">
                        <Tag>{honor}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>
    </div>
  );
}
