"use client";

import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function BackToProjectsButton() {
  const router = useRouter();
  const [backUrl, setBackUrl] = useState("/#projects");

  useEffect(() => {
    // Check referrer to determine navigation source
    const referrer = document.referrer;

    if (referrer) {
      // Check if came from /projects gallery page (not another project page)
      if (
        referrer.includes("/projects") &&
        !referrer.match(/\/projects\/[^/]+$/)
      ) {
        setBackUrl("/projects");
      }
      // Otherwise default to /#projects (homepage)
    }
  }, []);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Check if there's navigation history (more than just current page)
    if (window.history.length > 2) {
      router.back();
    } else {
      // Fallback for direct navigation
      router.push(backUrl);
    }
  };

  return (
    <Button
      className="h-7 gap-2 rounded-lg px-0 font-mono text-muted-foreground"
      variant="link"
      onClick={handleBackClick}
    >
      <ArrowLeftIcon />
      Projects
    </Button>
  );
}
