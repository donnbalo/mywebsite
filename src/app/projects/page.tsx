import type { Metadata } from "next";
import { FadeInOnScroll } from "@/components/custom/animated-background";
import { SectionHeading } from "@/components/custom/section-heading";
import { ProjectCard } from "@/components/custom/project-card";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the portfolio of Donn Baloloy — projects spanning semiconductor test automation, AI workflow optimization, and data engineering.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-6 pt-20 pb-8">
        <div className="mx-auto max-w-6xl text-center">
          <FadeInOnScroll>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              My Projects
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100}>
            <p className="mt-3 text-base text-muted-foreground/70 max-w-lg mx-auto">
              A showcase of work across semiconductor engineering, AI systems,
              and data-driven solutions.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <FadeInOnScroll>
            <SectionHeading title="Featured" />
          </FadeInOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <FadeInOnScroll key={project.id} delay={i * 100}>
                <ProjectCard project={project} index={i} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {other.length > 0 && (
        <section className="px-6 py-10">
          <div className="mx-auto max-w-6xl">
            <FadeInOnScroll>
              <SectionHeading title="Other Work" />
            </FadeInOnScroll>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {other.map((project, i) => (
                <FadeInOnScroll key={project.id} delay={i * 100}>
                  <ProjectCard project={project} index={featured.length + i} />
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
