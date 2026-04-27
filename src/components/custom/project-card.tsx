import { ExternalLink, Cpu, Brain, BarChart3, Activity, Database, Wrench } from "lucide-react";
import { GithubIcon } from "@/components/custom/icons";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/data";

const projectIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "semiconductor-test-automation": Cpu,
  "ai-workflow-optimizer": Brain,
  "failure-analysis-dashboard": BarChart3,
  "ic-quality-monitor": Activity,
  "test-data-pipeline": Database,
  "prompt-engineering-toolkit": Wrench,
};

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const Icon = projectIcons[project.id] || Cpu;

  return (
    <div
      className="group relative flex flex-col rounded-xl glass hover-glow overflow-hidden gradient-border"
      id={`project-${project.id}`}
    >
      {/* Top gradient accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex flex-1 flex-col p-6">
        {/* Project number watermark */}
        <span className="absolute top-4 right-5 text-5xl font-black text-foreground/[0.03] group-hover:text-primary/[0.06] transition-colors duration-500 select-none font-mono pointer-events-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            {/* Category icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary/70 group-hover:text-primary group-hover:bg-primary/15 transition-all duration-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code`}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-all hover:text-primary hover:bg-primary/10"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-all hover:text-primary hover:bg-primary/10"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-medium bg-primary/8 text-primary/80 border-primary/10 hover:bg-primary/15 hover:text-primary transition-all duration-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
