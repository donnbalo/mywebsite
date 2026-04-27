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
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Donn Ian Baloloy",
    href: "https://www.linkedin.com/in/donn-ian-baloloy-0439b43a3",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "donnbalo",
    href: "https://github.com/donnbalo",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "donn.balo",
    href: "https://www.facebook.com/donn.balo/",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "donn.balo",
    href: "https://www.instagram.com/donn.balo",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-6 pt-20 pb-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInOnScroll>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Get in Touch
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100}>
            <p className="mt-3 text-base text-muted-foreground/70 max-w-md mx-auto">
              Have a question, project idea, or just want to connect?
              I&apos;d love to hear from you.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-md">
          <FadeInOnScroll delay={150}>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary/60">
                  <Send className="h-6 w-6" />
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                Preferred: Email
              </h2>
              <p className="text-sm text-muted-foreground/70 mb-5">
                The fastest way to reach me. I typically respond within 24 hours.
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
      <section className="px-6 py-10">
        <div className="mx-auto max-w-md">
          <FadeInOnScroll>
            <SectionHeading title="All Channels" />
          </FadeInOnScroll>

          <div className="space-y-3">
            {contactMethods.map((method, i) => (
              <FadeInOnScroll key={method.label} delay={i * 60}>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`contact-${method.label.toLowerCase()}`}
                  className="group flex items-center gap-4 rounded-xl glass p-4 transition-all duration-300 hover:border-primary/15"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary/60 transition-colors duration-200 group-hover:text-primary">
                    <method.icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                      {method.label}
                    </p>
                    <p className="text-xs text-muted-foreground/60 truncate">
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
      <section className="px-6 py-10">
        <div className="mx-auto max-w-md text-center">
          <FadeInOnScroll>
            <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
              <MapPin className="h-4 w-4" />
              <p className="text-xs">Based in the Philippines · Open to remote collaboration</p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
