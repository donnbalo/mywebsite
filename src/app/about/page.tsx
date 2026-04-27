import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, GraduationCap, Cpu, Brain } from "lucide-react";
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
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent blur-lg" />
                <Image
                  src="/images/avatar.png"
                  alt="Donn Baloloy"
                  width={160}
                  height={160}
                  priority
                  className="relative rounded-3xl border-2 border-primary/20 object-cover"
                />
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={100}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About <span className="text-gradient">Me</span>
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll delay={200}>
            <p className="mt-2 text-lg text-muted-foreground">{siteConfig.role}</p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===================== BIO ===================== */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <FadeInOnScroll>
            <div className="glass rounded-2xl p-8 sm:p-10">
              <p className="text-base leading-relaxed text-foreground/90">
                {siteConfig.shortBio}
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ===================== WHAT I DO ===================== */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <FadeInOnScroll>
            <SectionHeading
              title="What I Do"
              subtitle="Two complementary disciplines driving innovation"
            />
          </FadeInOnScroll>

          <div className="grid gap-6 sm:grid-cols-2">
            <FadeInOnScroll delay={100}>
              <div className="glass rounded-2xl p-6 hover-glow h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Electronics Engineering
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Developing and executing test strategies for integrated circuits
                  in the semiconductor industry. My work spans hardware validation,
                  failure analysis, and process optimization — all driven by
                  precision and data-informed decision making.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="glass rounded-2xl p-6 hover-glow h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  AI & Prompt Engineering
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leveraging AI and prompt engineering to enhance engineering
                  workflows, automate repetitive tasks, and accelerate technical
                  problem-solving. I bridge the gap between traditional engineering
                  and modern AI capabilities.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ===================== EXPERIENCE ===================== */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <FadeInOnScroll>
            <SectionHeading
              title="Experience"
              subtitle="Professional journey and current roles"
            />
          </FadeInOnScroll>

          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            {experiences.map((exp, i) => (
              <FadeInOnScroll key={i} delay={i * 150}>
                <div className="relative flex gap-6 pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center">
                    <div className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
                  </div>

                  <div className="glass rounded-xl p-5 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-xs text-primary font-medium bg-primary/10 rounded-full px-3 py-1 w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground/80 mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <FadeInOnScroll>
            <SectionHeading
              title="Technical Skills"
              subtitle="Technologies and domains I specialize in"
            />
          </FadeInOnScroll>

          <div className="grid gap-8 sm:grid-cols-2">
            {skillCategories.map((category, i) => (
              <FadeInOnScroll key={category} delay={i * 100}>
                <div className="glass rounded-xl p-6">
                  <SkillCategory
                    category={category}
                    skills={skills.filter((s) => s.category === category)}
                  />
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
