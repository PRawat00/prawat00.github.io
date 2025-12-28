"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";

import { TESTIMONIALS } from "@/features/portfolio/data/testimonials";
import type { Testimonial } from "@/features/portfolio/types/testimonials";

export function TestimonialsMarquee() {
  const firstRow = TESTIMONIALS.slice(0, Math.ceil(TESTIMONIALS.length / 2));
  const secondRow = TESTIMONIALS.slice(Math.ceil(TESTIMONIALS.length / 2));

  return (
    <div className="relative flex flex-col gap-4">
      <Marquee pauseOnHover speed={20} direction="left">
        {firstRow.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Marquee>

      <Marquee pauseOnHover speed={20} direction="right">
        {secondRow.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Marquee>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const CardContent = (
    <div className="mx-4 w-80 flex-shrink-0 rounded-lg border border-border bg-card p-4 shadow-sm">
      <div className="flex items-start gap-3">
        {testimonial.avatar && (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-10 w-10 flex-shrink-0 rounded-full"
          />
        )}
        <div className="min-w-0 flex-1">
          <p className="text-sm leading-tight font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}
            {testimonial.company && ` at ${testimonial.company}`}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">
        "{testimonial.content}"
      </p>
    </div>
  );

  if (testimonial.url) {
    return (
      <Link href={testimonial.url} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
