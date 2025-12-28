"use client";

import { motion } from "motion/react";
import { ReactNode, useState } from "react";

interface SlideToUnlockProps {
  onUnlock?: () => void;
  children?: ReactNode;
  text?: string;
}

export function SlideToUnlock({
  onUnlock,
  children,
  text = "Slide to Unlock",
}: SlideToUnlockProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [dragX, setDragX] = useState(0);

  const handleDragEnd = (_: any, info: any) => {
    const threshold = 200;

    if (info.offset.x > threshold) {
      setIsUnlocked(true);
      onUnlock?.();
    } else {
      setDragX(0);
    }
  };

  return (
    <SlideToUnlockContainer>
      <SlideToUnlockTrack>
        <SlideToUnlockHandle
          onDragEnd={handleDragEnd}
          isUnlocked={isUnlocked}
        />
        <SlideToUnlockLabel text={text} isUnlocked={isUnlocked} />
      </SlideToUnlockTrack>

      {isUnlocked && children && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          {children}
        </motion.div>
      )}
    </SlideToUnlockContainer>
  );
}

function SlideToUnlockContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-md">{children}</div>;
}

function SlideToUnlockTrack({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-16 w-full items-center rounded-full border border-primary/30 bg-gradient-to-r from-primary/20 to-primary/10 px-2">
      {children}
    </div>
  );
}

interface SlideToUnlockHandleProps {
  onDragEnd: (event: any, info: any) => void;
  isUnlocked: boolean;
}

function SlideToUnlockHandle({
  onDragEnd,
  isUnlocked,
}: SlideToUnlockHandleProps) {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 200 }}
      onDragEnd={onDragEnd}
      animate={isUnlocked ? { x: 200, opacity: 0 } : { x: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      }}
      className="absolute flex h-14 w-14 cursor-grab items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg active:cursor-grabbing"
    >
      <SlideToUnlockIcon />
    </motion.div>
  );
}

interface SlideToUnlockLabelProps {
  text: string;
  isUnlocked: boolean;
}

function SlideToUnlockLabel({ text, isUnlocked }: SlideToUnlockLabelProps) {
  return (
    <motion.div
      animate={isUnlocked ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <span className="text-sm font-medium text-foreground/70">{text}</span>
    </motion.div>
  );
}

function SlideToUnlockIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-white"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}
