"use client";

import { Github } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface GitHubStarsProps {
  owner: string;
  repo: string;
}

export function GitHubStars({ owner, repo }: GitHubStarsProps) {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
          {
            headers: process.env.GITHUB_API_TOKEN
              ? {
                  Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
                }
              : undefined,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub stars");
        }

        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
  }, [owner, repo]);

  const formatStars = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const displayStars = stars !== null ? formatStars(stars) : "—";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a
              href={`https://github.com/${owner}/${repo}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span>{loading ? "..." : displayStars}</span>
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {stars !== null && !loading ? (
            <>
              <div>{stars.toLocaleString()} stars</div>
              <div className="text-xs text-muted-foreground">
                {owner}/{repo}
              </div>
            </>
          ) : error ? (
            <div>Failed to load stars</div>
          ) : (
            <div>Loading...</div>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
