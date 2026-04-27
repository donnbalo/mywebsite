import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeInOnScroll } from "@/components/custom/animated-background";
import { SectionHeading } from "@/components/custom/section-heading";
import { ProjectCard } from "@/components/custom/project-card";
import { SkillCategory } from "@/components/custom/skill-badge";
import { Typewriter } from "@/components/custom/typewriter";
import { siteConfig, projects, skills } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const skillCategories = [...new Set(skills.map((s) => s.category))];

  return (
    <div className="flex flex-col">
      {/* ===================== HERO SECTION ===================== */}
      <section
        id="hero"
        className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-6"
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Avatar with circuit ring */}
          <FadeInOnScroll>
            <div className="mb-8 flex justify-center">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 via-primary/5 to-primary/20 blur-lg animate-glow-pulse" />
                {/* Spinning ring decoration */}
                <div
                  className="absolute -inset-2 rounded-full animate-spin-slow"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 0%, oklch(0.72 0.19 150 / 20%) 25%, transparent 50%, oklch(0.72 0.19 150 / 15%) 75%, transparent 100%)",
                  }}
                />
                <Image
                  src="/images/avatar.png"
                  alt="Donn Baloloy"
                  width={140}
                  height={140}
                  priority
                  className="relative rounded-full border-2 border-primary/20 object-cover"
                />
              </div>
            </div>
          </FadeInOnScroll>

          {/* Status Badge */}
          <FadeInOnScroll delay={100}>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_6px_oklch(0.72_0.19_150/50%)]" />
              Available for collaboration
            </div>
          </FadeInOnScroll>

          {/* Name & Role */}
          <FadeInOnScroll delay={200}>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="text-gradient-animated">{siteConfig.name}</span>
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll delay={300}>
            <p className="mt-4 text-xl text-muted-foreground sm:text-2xl font-light h-[1.5em]">
              <Typewriter />
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={400}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground/80">
              Bridging hardware precision with AI innovation — ensuring quality
              in semiconductor products while optimizing workflows through
              intelligent automation.
            </p>
          </FadeInOnScroll>

          {/* CTA Buttons */}
          <FadeInOnScroll delay={500}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "gap-2 rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 glow-green shimmer-btn"
                )}
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2 rounded-full px-8 border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                )}
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </Link>
            </div>
          </FadeInOnScroll>

          {/* Scroll indicator */}
          <FadeInOnScroll delay={700}>
            <div className="mt-16 flex justify-center">
              <a
                href="#about"
                aria-label="Scroll to about section"
                className="animate-bounce-slow text-muted-foreground/40 hover:text-primary transition-colors"
              >
                <ArrowDown className="h-5 w-5" />
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===================== ABOUT SECTION ===================== */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <FadeInOnScroll>
            <SectionHeading
              title="About Me"
              subtitle="Engineer by training, innovator by practice"
            />
          </FadeInOnScroll>

          <FadeInOnScroll delay={100}>
            <div className="glass rounded-2xl p-8 sm:p-10 hover-glow">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                <div className="shrink-0 self-center sm:self-start">
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent blur-md" />
                    <Image
                      src="/images/avatar.png"
                      alt="Donn Baloloy"
                      width={120}
                      height={120}
                      className="relative rounded-2xl border border-primary/15 object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-base leading-relaxed text-foreground/90">
                    {siteConfig.shortBio}
                  </p>
                  <div className="flex flex-wrap gap-8 pt-3">
                    {[
                      { label: "Validation", value: "IC" },
                      { label: "Engineering", value: "AI" },
                      { label: "Optimization", value: "QA" },
                    ].map((stat) => (
                      <div key={stat.label} className="group/stat cursor-default">
                        <p className="text-2xl font-bold text-gradient group-hover/stat:text-gradient-animated transition-all">
                          {stat.value}
                        </p>
                        <p className="text-xs text-muted-foreground group-hover/stat:text-primary/60 transition-colors">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===================== FEATURED PROJECTS ===================== */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <FadeInOnScroll>
            <SectionHeading
              title="Featured Projects"
              subtitle="A selection of recent work across hardware and software"
            />
          </FadeInOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <FadeInOnScroll key={project.id} delay={i * 100}>
                <ProjectCard project={project} index={i} />
              </FadeInOnScroll>
            ))}
          </div>

          <FadeInOnScroll delay={400}>
            <div className="mt-12 flex justify-center">
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "gap-2 rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 shimmer-btn"
                )}
              >
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===================== SKILLS SECTION ===================== */}
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <FadeInOnScroll>
            <SectionHeading
              title="Skills & Expertise"
              subtitle="Technologies and domains I work with"
            />
          </FadeInOnScroll>

          <div className="grid gap-6 sm:grid-cols-2">
            {skillCategories.map((category, i) => (
              <FadeInOnScroll key={category} delay={i * 100}>
                <SkillCategory
                  category={category}
                  skills={skills.filter((s) => s.category === category)}
                />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONTACT CTA ===================== */}
      <section id="contact-cta" className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <FadeInOnScroll>
            <div className="glass rounded-2xl p-10 glow-green hover-glow">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="text-gradient-animated">Let&apos;s Connect</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Whether you have a project idea, collaboration opportunity, or
                just want to say hi — I&apos;d love to hear from you.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "gap-2 rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shimmer-btn"
                  )}
                >
                  <Mail className="h-4 w-4" />
                  Send an Email
                </a>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "gap-2 rounded-full px-8 border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                  )}
                >
                  All Contact Options
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
