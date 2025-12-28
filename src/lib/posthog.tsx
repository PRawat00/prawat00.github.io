"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && posthog.__loaded) {
      let url = window.origin + pathname;
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize PostHog
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
        ui_host:
          process.env.NEXT_PUBLIC_POSTHOG_UI_HOST || "https://us.posthog.com",
        loaded: (posthog) => {
          if (process.env.NODE_ENV === "development") {
            if (process.env.NEXT_PUBLIC_POSTHOG_ENABLE_DEBUG === "true") {
              posthog.debug();
            }
          }
        },
        capture_pageview: false,
        capture_pageleave: true,
        disable_session_recording:
          process.env.NEXT_PUBLIC_POSTHOG_DISABLE_SESSION_RECORDING === "true",
        respect_dnt: true,
        persistence: "localStorage+cookie",
      });
    }
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </>
  );
}

export function isPostHogEnabled() {
  return typeof window !== "undefined" && posthog.__loaded;
}

export const analytics = {
  track: (event: string, properties?: Record<string, any>) => {
    if (isPostHogEnabled()) {
      posthog.capture(event, properties);
    }
  },

  identify: (userId: string, traits?: Record<string, any>) => {
    if (isPostHogEnabled()) {
      posthog.identify(userId, traits);
    }
  },

  reset: () => {
    if (isPostHogEnabled()) {
      posthog.reset();
    }
  },
};
