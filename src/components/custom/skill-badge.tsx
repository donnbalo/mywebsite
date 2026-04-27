import { Code, Wrench, Layers, Cpu } from "lucide-react";
import type { Skill } from "@/lib/data";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Languages: Code,
  Frameworks: Layers,
  Tools: Wrench,
  Domain: Cpu,
};

export function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div className="group/badge flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-sm font-medium bg-secondary/50 text-foreground/80 border border-border/50 transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:border-primary/20 hover:shadow-[0_0_12px_oklch(0.72_0.19_150/10%)] cursor-default">
      <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover/badge:bg-primary group-hover/badge:shadow-[0_0_6px_oklch(0.72_0.19_150/50%)] transition-all duration-300" />
      {skill.name}
    </div>
  );
}

export function SkillCategory({
  category,
  skills,
}: {
  category: string;
  skills: Skill[];
}) {
  const Icon = categoryIcons[category] || Code;

  return (
    <div className="glass rounded-xl p-6 hover-glow space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-4.5 w-4.5" />
        </div>
        <h3 className="text-sm font-semibold text-primary/90 uppercase tracking-wider">
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
