"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import * as motion from "motion/react-m";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { PrwtMark } from "./prwt-mark";

export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === "/" ? <PrwtMarkMotion /> : <PrwtMark />;
}

function PrwtMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 128"
      initial={{
        opacity: 0,
        transform: "translateY(8px)",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(8px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <path
        d="M40.75 123H17V4.25H88.25V28H40.75V51.75H88.25V75.5H40.75V123ZM88.25 51.75V28H112V51.75H88.25ZM161.5 123H137.75V4.25H209V28H161.5V51.75H209V75.5H161.5V123ZM232.75 51.75H209V28H232.75V51.75ZM232.75 123H209V75.5H232.75V123Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
