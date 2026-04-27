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
      className="group relative flex flex-col rounded-xl glass overflow-hidden transition-all duration-300 hover:border-primary/15"
      id={`project-${project.id}`}
    >
      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary/60 group-hover:text-primary group-hover:bg-primary/12 transition-all duration-300">
              <Icon className="h-4.5 w-4.5" />
            </div>
            <h3 className="text-base font-semibold text-foreground/90 group-hover:text-foreground transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code`}
                className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground/60 transition-all hover:text-primary hover:bg-primary/8"
              >
                <GithubIcon className="h-3.5 w-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground/60 transition-all hover:text-primary hover:bg-primary/8"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground/80 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-medium bg-secondary/50 text-muted-foreground border-border/30 hover:text-foreground transition-colors duration-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
