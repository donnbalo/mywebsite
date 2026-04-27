import type { Metadata } from "next";
import Image from "next/image";
import { Cpu, Brain } from "lucide-react";
import { FadeInOnScroll } from "@/components/custom/animated-background";
import { SectionHeading } from "@/components/custom/section-heading";
import { SkillCategory } from "@/components/custom/skill-badge";
import { siteConfig, skills, experiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Donn Baloloy — Electronics Engineer and AI Engineer specializing in semiconductor test engineering, IC validation, and prompt engineering.",
};

export default function AboutPage() {
  const skillCategories = [...new Set(skills.map((s) => s.category))];

  return (
    <div className="flex flex-col">
      {/* ===================== HERO ===================== */}
      <section className="px-6 pt-20 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInOnScroll>
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/15 to-transparent blur-lg" />
                <Image
                  src="/images/avatar.png"
                  alt="Donn Baloloy"
                  width={140}
                  height={140}
                  priority
                  className="relative rounded-3xl border border-primary/10 object-cover"
                />
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={100}>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              About Me
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll delay={200}>
            <p className="mt-2 text-base text-muted-foreground">{siteConfig.role}</p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===================== BIO ===================== */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <FadeInOnScroll>
            <div className="glass rounded-2xl p-8 sm:p-10">
              <p className="text-base leading-relaxed text-foreground/85">
                {siteConfig.shortBio}
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===================== WHAT I DO ===================== */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <FadeInOnScroll>
            <SectionHeading title="What I Do" />
          </FadeInOnScroll>

          <div className="grid gap-5 sm:grid-cols-2">
            <FadeInOnScroll delay={100}>
              <div className="glass rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/15">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 text-primary/60">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Electronics Engineering
                </h3>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  Developing and executing test strategies for integrated circuits
                  in the semiconductor industry. My work spans hardware validation,
                  failure analysis, and process optimization.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="glass rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/15">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 text-primary/60">
                  <Brain className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  AI & Prompt Engineering
                </h3>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  Leveraging AI and prompt engineering to enhance engineering
                  workflows, automate repetitive tasks, and accelerate technical
                  problem-solving.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ===================== EXPERIENCE ===================== */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <FadeInOnScroll>
            <SectionHeading title="Experience" />
          </FadeInOnScroll>

          <div className="relative space-y-6">
            {/* Timeline line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />

            {experiences.map((exp, i) => (
              <FadeInOnScroll key={i} delay={i * 120}>
                <div className="relative flex gap-5 pl-10">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center">
                    <div className="h-2.5 w-2.5 rounded-full border-2 border-primary/50 bg-background" />
                  </div>

                  <div className="glass rounded-xl p-5 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-sm font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-xs text-muted-foreground bg-secondary/50 rounded-full px-2.5 py-0.5 w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground/70 mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SKILLS ===================== */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <FadeInOnScroll>
            <SectionHeading title="Technical Skills" />
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
    </div>
  );
}
