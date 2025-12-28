"use client";

import {
  Download,
  GlobeIcon,
  Mail,
  MapPinIcon,
  MarsIcon,
  NonBinaryIcon,
  VenusIcon,
} from "lucide-react";
import { useState } from "react";

import { USER } from "@/features/portfolio/data/user";
import type { User } from "@/features/portfolio/types/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { CurrentLocalTimeItem } from "./current-local-time-item";
import { EmailItem } from "./email-item";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";
import { JobItem } from "./job-item";
import { ResumePreviewModal } from "./resume-preview-modal";

export function Overview() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2.5">
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

        <div className="grid gap-x-12 gap-y-2.5 sm:grid-cols-2">
          <IntroItem>
            <IntroItemIcon>
              <MapPinIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
                aria-label={`Location: ${USER.address}`}
              >
                {USER.address}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <CurrentLocalTimeItem timeZone={USER.timeZone} />

          <EmailItem email={USER.email} />

          <IntroItem>
            <IntroItemIcon>
              <GlobeIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={USER.website}
                aria-label={`Personal website: ${urlToName(USER.website)}`}
              >
                {urlToName(USER.website)}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon>{getGenderIcon(USER.gender)}</IntroItemIcon>
            <IntroItemContent aria-label={`Pronouns: ${USER.pronouns}`}>
              {USER.pronouns}
            </IntroItemContent>
          </IntroItem>
        </div>

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

function getGenderIcon(gender: User["gender"]) {
  switch (gender) {
    case "male":
      return <MarsIcon />;
    case "female":
      return <VenusIcon />;
    case "non-binary":
      return <NonBinaryIcon />;
  }
}
