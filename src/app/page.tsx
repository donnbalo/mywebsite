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
          {/* Avatar */}
          <FadeInOnScroll>
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-lg animate-glow-pulse" />
                <div
                  className="absolute -inset-2 rounded-full animate-spin-slow"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 0%, oklch(0.72 0.19 150 / 15%) 25%, transparent 50%, oklch(0.72 0.19 150 / 10%) 75%, transparent 100%)",
                  }}
                />
                <Image
                  src="/images/avatar.png"
                  alt="Donn Baloloy"
                  width={130}
                  height={130}
                  priority
                  className="relative rounded-full border-2 border-primary/15 object-cover"
                />
              </div>
            </div>
          </FadeInOnScroll>

          {/* Name */}
          <FadeInOnScroll delay={150}>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient-animated">{siteConfig.name}</span>
            </h1>
          </FadeInOnScroll>

          {/* Role — typewriter */}
          <FadeInOnScroll delay={250}>
            <p className="mt-3 text-lg text-muted-foreground sm:text-xl font-light h-[1.5em]">
              <Typewriter />
            </p>
          </FadeInOnScroll>

          {/* Description */}
          <FadeInOnScroll delay={350}>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground/70">
              Bridging hardware precision with AI innovation — ensuring quality
              in semiconductor products while optimizing workflows through
              intelligent automation.
            </p>
          </FadeInOnScroll>

          {/* CTA Buttons */}
          <FadeInOnScroll delay={450}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "gap-2 rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shimmer-btn"
                )}
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2 rounded-full px-8 border-border/50 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all duration-300"
                )}
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </Link>
            </div>
          </FadeInOnScroll>

          {/* Scroll indicator */}
          <FadeInOnScroll delay={600}>
            <div className="mt-14 flex justify-center">
              <a
                href="#about"
                aria-label="Scroll to about section"
                className="animate-bounce-slow text-muted-foreground/30 hover:text-primary/60 transition-colors"
              >
                <ArrowDown className="h-5 w-5" />
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===================== ABOUT SECTION ===================== */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <FadeInOnScroll>
            <SectionHeading title="About Me" />
          </FadeInOnScroll>

          <FadeInOnScroll delay={100}>
            <div className="glass rounded-2xl p-8 sm:p-10">
              <p className="text-base leading-relaxed text-foreground/85">
                {siteConfig.shortBio}
              </p>
              <div className="flex flex-wrap gap-10 mt-6 pt-6 border-t border-border/30">
                {[
                  { label: "Validation", value: "IC" },
                  { label: "Engineering", value: "AI" },
                  { label: "Optimization", value: "QA" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===================== FEATURED PROJECTS ===================== */}
      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <FadeInOnScroll>
            <SectionHeading
              title="Featured Projects"
              subtitle="Recent work across hardware and software"
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
            <div className="mt-10 flex justify-center">
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "gap-2 rounded-full border-border/50 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all duration-300"
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
      <section id="skills" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeInOnScroll>
            <SectionHeading
              title="Skills & Expertise"
              subtitle="Technologies and domains I work with"
            />
          </FadeInOnScroll>

          <div className="grid gap-5 sm:grid-cols-2">
            {skillCategories.map((category, i) => (
              <FadeInOnScroll key={category} delay={i * 80}>
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
      <section id="contact-cta" className="px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <FadeInOnScroll>
            <div className="glass rounded-2xl p-10">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                Let&apos;s Connect
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Whether you have a project idea, collaboration opportunity, or
                just want to say hi — I&apos;d love to hear from you.
              </p>
              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
                    "gap-2 rounded-full px-8 border-border/50 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all duration-300"
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
