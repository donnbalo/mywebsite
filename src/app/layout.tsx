import type { Metadata } from "next";
import { Montserrat, Lato, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/custom/navbar";
import { Footer } from "@/components/custom/footer";
import { AnimatedBackground } from "@/components/custom/animated-background";
import { TooltipProvider } from "@/components/ui/tooltip";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Donn Baloloy | Electronics Engineer & AI Engineer",
    template: "%s | Donn Baloloy",
  },
  description:
    "Personal portfolio of Donn Baloloy — Electronics Engineer and AI Engineer specializing in semiconductor test engineering, IC validation, and prompt engineering.",
  keywords: [
    "Electronics Engineer",
    "AI Engineer",
    "Semiconductor",
    "Test Engineering",
    "Prompt Engineering",
    "IC Validation",
    "Portfolio",
  ],
  authors: [{ name: "Donn Baloloy" }],
  openGraph: {
    title: "Donn Baloloy | Electronics Engineer & AI Engineer",
    description:
      "Personal portfolio of Donn Baloloy — Electronics Engineer and AI Engineer specializing in semiconductor test engineering and prompt engineering.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lato.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col relative">
        <TooltipProvider>
          <AnimatedBackground />
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
