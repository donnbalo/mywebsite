"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "@/components/custom/icons";
import { siteConfig } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-auto" id="footer">
      {/* Animated gradient divider */}
      <div className="gradient-line" />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Left: brand */}
          <div className="flex flex-col items-center gap-1.5 sm:items-start">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary font-mono text-xs font-bold">
                DB
              </span>
              <span className="text-sm font-semibold text-foreground">
                {siteConfig.name}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              {siteConfig.role}
            </span>
          </div>

          {/* Center: social icons */}
          <div className="flex items-center gap-2">
            {siteConfig.socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  id={`footer-${social.name.toLowerCase()}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_12px_oklch(0.72_0.19_150/15%)]"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              );
            })}
          </div>

          {/* Right: copyright + back to top */}
          <div className="flex flex-col items-center gap-3 sm:items-end">
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_0_12px_oklch(0.72_0.19_150/10%)]"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
            <p className="text-xs text-muted-foreground/60">
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
