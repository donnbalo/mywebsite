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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              My <span className="text-gradient">Projects</span>
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100}>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of work across semiconductor engineering, AI systems,
              and data-driven solutions. These are placeholder projects — real
              ones coming soon.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <FadeInOnScroll>
            <SectionHeading
              title="Featured"
              subtitle="Highlight projects showcasing core competencies"
            />
          </FadeInOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <FadeInOnScroll key={project.id} delay={i * 100}>
                <ProjectCard project={project} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {other.length > 0 && (
        <section className="px-6 py-12">
          <div className="mx-auto max-w-6xl">
            <FadeInOnScroll>
              <SectionHeading
                title="Other Work"
                subtitle="Additional projects and experiments"
              />
            </FadeInOnScroll>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {other.map((project, i) => (
                <FadeInOnScroll key={project.id} delay={i * 100}>
                  <ProjectCard project={project} />
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
