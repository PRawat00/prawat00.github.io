import { notFound, redirect } from "next/navigation";

import { PROJECTS } from "@/features/profile/data/projects";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const slug = (await params).slug;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  // Redirect to the project's GitHub repository
  redirect(project.link);
}
