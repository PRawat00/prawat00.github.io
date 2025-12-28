"use client";

import { format } from "date-fns";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

import { useIsClient } from "@/hooks/use-is-client";

export function Confetti({
  datesWithoutYear = [],
  datesWithYear = [],
}: {
  datesWithoutYear?: string[];
  datesWithYear?: string[];
}) {
  const isClient = useIsClient();

  const { width, height } = useWindowSize();

  const todayWithoutYear = format(new Date(), "MM-dd");
  const todayWithYear = format(new Date(), "yyyy-MM-dd");
  const shouldShow =
    datesWithoutYear.some(
      (date) => format(new Date(date), "MM-dd") === todayWithoutYear
    ) ||
    datesWithYear.some(
      (date) => format(new Date(date), "yyyy-MM-dd") === todayWithYear
    );

  if (!isClient) {
    return null;
  }

  if (!shouldShow) {
    return null;
  }

  return (
    <ReactConfetti
      className="fixed inset-0 z-50"
      width={width}
      height={height}
      numberOfPieces={300}
      gravity={0.3}
      recycle={false}
    />
  );
}
