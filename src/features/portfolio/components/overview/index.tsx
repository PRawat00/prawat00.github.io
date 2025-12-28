"use client";

import {
  Download,
  GlobeIcon,
  Mail,
  MapPinIcon,
  MarsIcon,
  VenusIcon,
} from "lucide-react";
import { useState } from "react";

import { USER } from "@/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { EmailItem } from "./email-item";
import { IntroItem } from "./intro-item";
import { JobItem } from "./job-item";
import { ResumePreviewModal } from "./resume-preview-modal";

export function Overview() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        <IntroItem icon={MapPinIcon} content={USER.address} />

        <EmailItem email={USER.email} />

        <IntroItem
          icon={GlobeIcon}
          content={urlToName(USER.website)}
          href={USER.website}
        />

        <IntroItem
          icon={USER.gender === "male" ? MarsIcon : VenusIcon}
          content={USER.pronouns}
        />

        {/* Action Items */}
        <div className="mt-4 flex flex-wrap gap-2 border-t border-edge pt-4">
          <button
            onClick={() => setResumeModalOpen(true)}
            className="flex items-center gap-2 rounded-lg border border-edge bg-muted px-3 py-1.5 font-mono text-sm transition-colors hover:bg-muted/80"
          >
            <Download className="size-4 text-muted-foreground" />
            <span>Resume</span>
          </button>
          <a
            href={`mailto:${atob(USER.email)}`}
            className="flex items-center gap-2 rounded-lg border border-edge bg-muted px-3 py-1.5 font-mono text-sm transition-colors hover:bg-muted/80"
          >
            <Mail className="size-4 text-muted-foreground" />
            <span>Get In Touch</span>
          </a>
        </div>
      </PanelContent>

      <ResumePreviewModal
        open={resumeModalOpen}
        onOpenChange={setResumeModalOpen}
      />
    </Panel>
  );
}
