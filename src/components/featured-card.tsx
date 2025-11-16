import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import type { FeaturedItem } from "@/types/featured";

export function FeaturedCard({
  item,
  shouldPreloadImage,
}: {
  item: FeaturedItem;
  shouldPreloadImage?: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={cn(
        "group/featured flex flex-col gap-2 p-2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after",
        "lg:nth-[3n+1]:screen-line-before lg:nth-[3n+1]:screen-line-after"
      )}
    >
      <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl [&_img]:object-cover">
        <Image
          src={item.image}
          alt={item.title}
          width={1200}
          height={630}
          quality={100}
          priority={shouldPreloadImage}
          unoptimized
        />

        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />

        {item.new && (
          <span className="absolute top-1.5 right-1.5 rounded-md bg-info px-1.5 font-mono text-sm font-medium text-white text-shadow-xs">
            New
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1 p-2">
        <h3 className="text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/featured:underline">
          {item.title}
        </h3>

        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
    </Link>
  );
}
