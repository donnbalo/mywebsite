import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "@/components/custom/icons";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
};

export function Footer() {
  return (
    <footer className="relative mt-auto" id="footer">
      <Separator className="opacity-50" />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Left: brand */}
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="text-sm font-semibold text-foreground">
              {siteConfig.name}
            </span>
            <span className="text-xs text-muted-foreground">
              {siteConfig.role}
            </span>
          </div>

          {/* Center: social icons */}
          <div className="flex items-center gap-3">
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              );
            })}
          </div>

          {/* Right: copyright */}
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
