"use client";

import { MailIcon } from "lucide-react";

import { useIsClient } from "@/hooks/use-is-client";
import { decodeEmail } from "@/utils/string";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";

export function EmailItem({ email }: { email: string }) {
  const isClient = useIsClient();
  const emailDecoded = decodeEmail(email);

  return (
    <IntroItem>
      <IntroItemIcon>
        <MailIcon />
      </IntroItemIcon>
      <IntroItemContent>
        <IntroItemLink
          href={isClient ? `mailto:${emailDecoded}` : "#"}
          aria-label={`Email: ${isClient ? emailDecoded : "[Email protected]"}`}
        >
          {isClient ? emailDecoded : "[Email protected]"}
        </IntroItemLink>
      </IntroItemContent>
    </IntroItem>
  );
}
