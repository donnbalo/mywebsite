import type { Metadata } from "next";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "@/components/custom/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeInOnScroll } from "@/components/custom/animated-background";
import { SectionHeading } from "@/components/custom/section-heading";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Donn Baloloy — reach out for collaboration, project inquiries, or just to connect.",
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Best way to reach me",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Donn Ian Baloloy",
    href: "https://www.linkedin.com/in/donn-ian-baloloy-0439b43a3",
    description: "Professional network",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "donnbalo",
    href: "https://github.com/donnbalo",
    description: "Open source & code",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "donn.balo",
    href: "https://www.facebook.com/donn.balo/",
    description: "Social",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "donn.balo",
    href: "https://www.instagram.com/donn.balo",
    description: "Social",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-6 pt-20 pb-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInOnScroll>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get in <span className="text-gradient-animated">Touch</span>
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100}>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Have a question, project idea, or just want to connect?
              I&apos;d love to hear from you.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-2xl">
          <FadeInOnScroll delay={150}>
            <div className="glass rounded-2xl p-8 text-center glow-green hover-glow">
              <div className="mb-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary animate-glow-pulse">
                  <Send className="h-7 w-7" />
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">
                Preferred: Email
              </h2>
              <p className="text-sm text-muted-foreground mb-5">
                The fastest way to reach me is via email. I typically
                respond within 24 hours.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "gap-2 rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shimmer-btn"
                )}
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* All Contact Methods */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <FadeInOnScroll>
            <SectionHeading
              title="All Channels"
              subtitle="Find me across these platforms"
            />
          </FadeInOnScroll>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactMethods.map((method, i) => (
              <FadeInOnScroll key={method.label} delay={i * 80}>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`contact-${method.label.toLowerCase()}`}
                  className="group flex items-center gap-4 rounded-xl glass p-5 hover-glow gradient-border transition-all"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_12px_oklch(0.72_0.19_150/20%)]">
                    <method.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {method.label}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {method.value}
                    </p>
                  </div>
                </a>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-md text-center">
          <FadeInOnScroll>
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary/60">
                <MapPin className="h-5 w-5" />
              </div>
              <p className="text-sm mt-1">Based in the Philippines</p>
              <p className="text-xs text-muted-foreground/60">
                Open to remote collaboration worldwide
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
