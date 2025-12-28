"use client";

import { Download } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ResumePreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ResumePreviewModal({
  open,
  onOpenChange,
}: ResumePreviewModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex h-[90vh] w-[70vw] max-w-none flex-col gap-0 p-0 sm:max-w-none">
        <DialogHeader className="flex flex-row items-center justify-between border-b border-edge px-4 py-3">
          <DialogTitle className="font-mono text-base">Resume</DialogTitle>
          <a
            href="/resume.pdf"
            download
            className="mr-8 flex items-center gap-2 rounded-lg border border-edge bg-muted px-3 py-1.5 font-mono text-sm transition-colors hover:bg-muted/80"
          >
            <Download className="size-4" />
            <span>Download</span>
          </a>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <iframe
            src="/resume.pdf#navpanes=0&view=FitH"
            className="h-full w-full border-0"
            title="Resume Preview"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
