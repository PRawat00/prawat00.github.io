import { xai } from "@ai-sdk/xai";
import { streamText } from "ai";
import { PROJECTS } from "@/features/portfolio/data/projects";
import { EXPERIENCES } from "@/features/portfolio/data/experiences";
import { USER } from "@/features/portfolio/data/user";

// Dynamically generate system prompt from data files
function generateSystemPrompt(): string {
  // Extract current experience
  const currentJob = EXPERIENCES.find((exp) => exp.isCurrentEmployer);
  const currentPosition = currentJob?.positions[0];

  // Format projects (visible projects only)
  const visibleProjects = PROJECTS.filter((p) => p.isVisible !== false);
  const projectSummaries = visibleProjects
    .map((p) => `${p.title}: ${p.summary}`)
    .join("\n");

  // Format experience
  const experienceSummaries = EXPERIENCES.map((exp) => {
    const pos = exp.positions[0];
    const period = pos.employmentPeriod.end
      ? `${pos.employmentPeriod.start} to ${pos.employmentPeriod.end}`
      : `${pos.employmentPeriod.start} to Present`;
    return `${pos.title} at ${exp.companyName} (${period})`;
  }).join(". ");

  // Extract all unique skills from projects and experiences
  const allSkills = new Set<string>();
  visibleProjects.forEach((p) => p.skills.forEach((s) => allSkills.add(s)));
  EXPERIENCES.forEach((exp) =>
    exp.positions.forEach((pos) => {
      if (pos.skills) {
        pos.skills.forEach((s) => allSkills.add(s));
      }
    })
  );
  const skillsList = Array.from(allSkills).sort().join(", ");

  return `You are a helpful assistant on ${USER.displayName}'s portfolio website. Answer questions about his background, skills, and projects.

CRITICAL FORMATTING RULES:
- Write in plain text only. Never use markdown formatting like ##, **, -, or numbered lists.
- Never use emojis.
- Keep responses conversational and natural, like talking to someone.
- Be concise: 2-4 sentences per response unless more detail is specifically asked for.
- Answer the specific question asked. Don't dump all information at once.

ABOUT ${USER.firstName.toUpperCase()}:
${USER.bio}

CURRENT ROLE:
${currentPosition?.title} at ${currentJob?.companyName} since ${currentPosition?.employmentPeriod.start}. ${currentPosition?.description?.split("\n")[0] || ""}

EXPERIENCE HISTORY:
${experienceSummaries}

KEY PROJECTS (${visibleProjects.length} total):
${projectSummaries}

TECHNICAL SKILLS:
${skillsList}

CONTACT:
Email: ${USER.email} (base64 encoded - decode if needed)
LinkedIn: ${USER.otherWebsites.find((url) => url.includes("linkedin"))}
GitHub: ${USER.otherWebsites.find((url) => url.includes("github"))}
Website: ${USER.website}

RESPONSE GUIDELINES:
If someone asks who ${USER.firstName} is, give a brief 2-3 sentence intro. If they want more details, they'll ask. If asked about something not covered here, politely say you don't have that specific information and suggest visiting the website or emailing ${USER.firstName} directly. Never make up information.`;
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return Response.json(
        { error: "invalid_request", message: "Messages array is required" },
        { status: 400 }
      );
    }

    const result = streamText({
      model: xai("grok-4-1-fast-reasoning"),
      system: generateSystemPrompt(),
      messages,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);

    return Response.json(
      { error: "internal_error", message: "Something went wrong" },
      { status: 500 }
    );
  }
}
