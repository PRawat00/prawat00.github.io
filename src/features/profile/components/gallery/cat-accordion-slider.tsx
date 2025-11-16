"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import type { Cat } from "@/features/profile/types/gallery";

interface CatAccordionSliderProps {
  cats: Cat[];
  itemsPerPage?: number;
}

export function CatAccordionSlider({
  cats,
  itemsPerPage = 4,
}: CatAccordionSliderProps) {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  // Helper function to get visible cats with circular wrapping
  const getVisibleCats = useCallback(
    (start: number, count: number) => {
      const visible: Cat[] = [];
      for (let i = 0; i < count; i++) {
        const index = (start + i) % cats.length;
        visible.push(cats[index]);
      }
      return visible;
    },
    [cats]
  );

  const displayCount = Math.min(cats.length, itemsPerPage);
  const currentCats = getVisibleCats(startIndex, displayCount);
  const canNavigate = cats.length > itemsPerPage;

  const handleSlideClick = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const handlePrevious = useCallback(() => {
    setSlideDirection("right");
    setStartIndex((prev) => (prev - 1 + cats.length) % cats.length);
  }, [cats.length]);

  const handleNext = useCallback(() => {
    setSlideDirection("left");
    setStartIndex((prev) => (prev + 1) % cats.length);
  }, [cats.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setActiveIndex(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrevious]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped left - go to next
        handleNext();
      } else {
        // Swiped right - go to previous
        handlePrevious();
      }
    }
  };

  // Keep active index preserved when sliding (don't reset)
  // This allows the expanded state to persist across navigation

  return (
    <div
      className="relative h-[500px] w-full overflow-hidden rounded-lg border border-edge sm:h-[600px] md:h-[700px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Accordion Container */}
      <div className="flex h-full w-full">
        <AnimatePresence mode="popLayout" initial={false}>
          {currentCats.map((cat, index) => (
            <m.div
              key={cat.id}
              className="relative cursor-pointer overflow-hidden"
              initial={{
                x: slideDirection === "left" ? "100%" : "-100%",
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                flex: activeIndex === index ? 2.5 : 1,
              }}
              exit={{
                x: slideDirection === "left" ? "-100%" : "100%",
                opacity: 0,
              }}
              transition={{
                x: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.3 },
                flex: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
              }}
              style={{
                willChange: activeIndex === index ? "transform, flex" : "auto",
              }}
              onClick={() => handleSlideClick(index)}
            >
              {/* Background Image */}
              <m.div
                className="absolute inset-0"
                animate={{
                  filter:
                    activeIndex === index ? "grayscale(0)" : "grayscale(1)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  willChange: activeIndex === index ? "filter" : "auto",
                }}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </m.div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white md:p-6 lg:p-8">
                {/* Number */}
                <m.div
                  className="mb-4 origin-left text-4xl font-light text-white/60 md:text-6xl"
                  animate={{
                    scale: activeIndex === index ? 0.75 : 1,
                    opacity: activeIndex === index ? 0.6 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    willChange:
                      activeIndex === index ? "transform, opacity" : "auto",
                  }}
                >
                  {cat.number}
                </m.div>

                {/* Brand/Nickname - Only show when collapsed */}
                {activeIndex !== index && (
                  <m.div
                    className="absolute bottom-[60px] left-[20px] mb-2 origin-left text-sm font-semibold text-white/90 md:bottom-[100px] md:left-[30px] md:text-base"
                    animate={{
                      rotate: -90,
                      opacity: 0.9,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      willChange: "transform",
                    }}
                  >
                    {cat.nickname}
                  </m.div>
                )}

                {/* Expanded Content */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <m.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                    >
                      {/* Name */}
                      <h2 className="mb-2 line-clamp-2 text-xl font-bold md:text-2xl lg:text-3xl">
                        {cat.name}
                      </h2>

                      {/* Subtitle */}
                      <p className="mb-3 line-clamp-2 text-xs text-white/80 md:mb-4 md:text-sm lg:text-base">
                        {cat.subtitle}
                      </p>

                      {/* Specs - Hidden on mobile, shown on tablet/desktop */}
                      <div className="mb-3 hidden space-y-1 md:mb-4 md:block">
                        {cat.specs.map((spec, i) => (
                          <m.div
                            key={spec.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.25 + i * 0.03,
                            }}
                            className="flex justify-between gap-2 text-xs md:text-sm"
                          >
                            <span className="text-white/70">{spec.label}:</span>
                            <span className="max-w-[60%] truncate font-semibold">
                              {spec.value}
                            </span>
                          </m.div>
                        ))}
                      </div>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-2">
                        {cat.badges.map((badge, i) => (
                          <m.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.25,
                              delay: 0.4 + i * 0.03,
                            }}
                            className="flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium backdrop-blur-sm md:gap-2 md:px-3 md:py-1"
                          >
                            <div className="size-2 rounded-full bg-green-500" />
                            {badge.text}
                          </m.div>
                        ))}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            </m.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      {canNavigate && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 left-4 z-20 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 md:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="size-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 z-20 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 md:flex"
            aria-label="Next"
          >
            <ChevronRight className="size-6" />
          </button>
        </>
      )}
    </div>
  );
}
