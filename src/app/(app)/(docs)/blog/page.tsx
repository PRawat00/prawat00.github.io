import dayjs from "dayjs";
import type { Metadata } from "next";

import { PostItem } from "@/components/post-item";
import { getAllPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of articles on development, design, and ideas.",
};

export default function Page() {
  const allPosts = getAllPosts();

  return (
    <>
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Blog</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="relative pt-4">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        {allPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {allPosts
              .slice()
              .sort((a, b) =>
                dayjs(b.metadata.createdAt).diff(dayjs(a.metadata.createdAt))
              )
              .map((post, index) => (
                <PostItem
                  key={post.slug}
                  post={post}
                  shouldPreloadImage={index <= 4}
                />
              ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="max-w-md">
              <h2 className="mb-2 text-xl font-semibold">No Posts Yet</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Blog posts will appear here when they&apos;re published. Check
                back soon for insights on data science, AI systems, and
                technical tutorials.
              </p>
              <div className="font-mono text-xs text-muted-foreground">
                Coming soon: RAG Systems, Financial AI, ML in Production
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-4" />
    </>
  );
}
