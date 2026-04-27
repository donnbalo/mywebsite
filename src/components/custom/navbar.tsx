"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slide-down ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
      style={{
        borderBottom: scrolled
          ? "1px solid oklch(0.72 0.19 150 / 10%)"
          : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo / Name */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight"
          id="nav-logo"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary font-mono text-sm font-bold transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_oklch(0.72_0.19_150/20%)]">
            DB
          </span>
          <span className="hidden sm:inline text-foreground group-hover:text-primary transition-colors duration-300">
            Donn Baloloy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-${link.name.toLowerCase()}`}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {/* Hover pill background */}
                <span
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-primary/10"
                      : "bg-transparent group-hover:bg-primary/5"
                  }`}
                />
                <span className="relative">{link.name}</span>
                {/* Active indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-primary shadow-[0_0_8px_oklch(0.72_0.19_150/40%)]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={
              <Button
                variant="ghost"
                size="icon"
                id="nav-mobile-toggle"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 glass-strong border-border">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 pt-8">
              <div className="flex items-center gap-2 px-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary font-mono text-sm font-bold">
                  DB
                </span>
                <span className="text-lg font-bold">Donn Baloloy</span>
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
