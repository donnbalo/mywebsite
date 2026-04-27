import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/custom/icons";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group relative flex flex-col rounded-xl glass hover-glow overflow-hidden"
      id={`project-${project.id}`}
    >
      {/* Top gradient accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
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
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-medium bg-primary/8 text-primary/80 border-primary/10 hover:bg-primary/15 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
