import React from "react";

import { FeaturedCard } from "@/components/featured-card";
import { featuredItems } from "@/data/featured";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Featured() {
  return (
    <Panel id="featured">
      <PanelHeader>
        <PanelTitle>Featured</PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2 lg:grid-cols-3">
          <div className="border-r border-edge"></div>
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item, index) => (
            <FeaturedCard
              key={item.id}
              item={item}
              shouldPreloadImage={index < 2}
            />
          ))}
        </div>
      </div>
    </Panel>
  );
}
