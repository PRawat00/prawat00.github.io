import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { PostItem } from "@/components/post-item";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/features/portfolio/data/blog";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Blog() {
  const allPosts = getAllPosts();

  return (
    <Panel id="blog">
      <PanelHeader>
        <PanelTitle>Blog</PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        {allPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {allPosts.slice(0, 4).map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="text-muted-foreground">
              <p className="text-sm">No blog posts yet.</p>
              <p className="mt-1 text-xs">Check back soon for updates!</p>
            </div>
          </div>
        )}
      </div>

      {allPosts.length > 0 && (
        <div className="screen-line-before flex justify-center py-2">
          <Button variant="default" asChild>
            <Link href="/blog">
              All Posts
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      )}
    </Panel>
  );
}
