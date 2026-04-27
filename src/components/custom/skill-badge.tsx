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
    <span className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground bg-secondary/40 border border-border/30 transition-colors duration-200 hover:text-foreground hover:border-border/50 cursor-default">
      {skill.name}
    </span>
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
    <div className="glass rounded-xl p-5 space-y-4">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/8 text-primary/60">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
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
