"use client";

import { PhoneIcon } from "lucide-react";

import { useIsClient } from "@/hooks/use-is-client";
import { decodePhoneNumber, formatPhoneNumber } from "@/utils/string";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";

export function PhoneItem({ phoneNumber }: { phoneNumber: string }) {
  const isClient = useIsClient();
  const phoneNumberDecoded = decodePhoneNumber(phoneNumber);

  return (
    <IntroItem>
      <IntroItemIcon>
        <PhoneIcon />
      </IntroItemIcon>
      <IntroItemContent>
        <IntroItemLink
          href={isClient ? `tel:${phoneNumberDecoded}` : "#"}
          aria-label={`Phone: ${isClient ? phoneNumberDecoded : "[Phone protected]"}`}
        >
          {isClient
            ? formatPhoneNumber(phoneNumberDecoded)
            : "[Phone protected]"}
        </IntroItemLink>
      </IntroItemContent>
    </IntroItem>
  );
}
