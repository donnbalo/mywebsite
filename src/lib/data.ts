export const siteConfig = {
  name: "Donn Baloloy",
  role: "Electronics Engineer | AI Engineer",
  shortBio:
    "I am an Electronics Engineer with roles spanning Test Product Engineering and Prompt Engineering. I specialize in the semiconductor industry, where I develop and execute test strategies to ensure the quality, reliability, and performance of integrated circuits. My work involves hardware validation, failure analysis, and process optimization, supported by a strong focus on precision and data driven decision making. I also leverage prompt engineering to enhance workflows, automate tasks, and improve technical problem solving efficiency.",
  email: "donn.baloloy@gmail.com",
  socials: [
    {
      name: "Email",
      url: "mailto:donn.baloloy@gmail.com",
      icon: "Mail",
    },
    {
      name: "GitHub",
      url: "https://github.com/donnbalo",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/donn-ian-baloloy-0439b43a3",
      icon: "Linkedin",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/donn.balo/",
      icon: "Facebook",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/donn.balo",
      icon: "Instagram",
    },
  ],
};

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "semiconductor-test-automation",
    title: "Semiconductor Test Automation Suite",
    description:
      "Automated test program development for IC validation, streamlining hardware verification workflows and reducing test cycle time.",
    techStack: ["Python", "LabVIEW", "SQL", "ATE"],
    featured: true,
  },
  {
    id: "ai-workflow-optimizer",
    title: "AI Workflow Optimizer",
    description:
      "An intelligent prompt engineering system that automates repetitive engineering tasks and enhances technical problem-solving efficiency.",
    techStack: ["Python", "OpenAI API", "LangChain", "React"],
    featured: true,
  },
  {
    id: "failure-analysis-dashboard",
    title: "Failure Analysis Dashboard",
    description:
      "Interactive data visualization dashboard for semiconductor failure analysis, enabling rapid root cause identification.",
    techStack: ["TypeScript", "Next.js", "D3.js", "PostgreSQL"],
    featured: true,
  },
  {
    id: "ic-quality-monitor",
    title: "IC Quality Monitor",
    description:
      "Real-time monitoring system for integrated circuit production quality metrics with anomaly detection capabilities.",
    techStack: ["Python", "TensorFlow", "Grafana", "MQTT"],
    featured: false,
  },
  {
    id: "test-data-pipeline",
    title: "Test Data Pipeline",
    description:
      "End-to-end data pipeline for processing and analyzing high-volume semiconductor test data with automated reporting.",
    techStack: ["Python", "Apache Airflow", "Pandas", "AWS"],
    featured: false,
  },
  {
    id: "prompt-engineering-toolkit",
    title: "Prompt Engineering Toolkit",
    description:
      "A collection of reusable prompt templates and evaluation frameworks for engineering applications.",
    techStack: ["TypeScript", "Node.js", "OpenAI", "MongoDB"],
    featured: false,
  },
];

export interface Skill {
  name: string;
  category: string;
}

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "C/C++", category: "Languages" },
  { name: "MATLAB", category: "Languages" },

  // Frameworks & Libraries
  { name: "Next.js", category: "Frameworks" },
  { name: "React", category: "Frameworks" },
  { name: "Node.js", category: "Frameworks" },
  { name: "LangChain", category: "Frameworks" },
  { name: "TensorFlow", category: "Frameworks" },
  { name: "Pandas", category: "Frameworks" },

  // Tools & Platforms
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "LabVIEW", category: "Tools" },
  { name: "Jira", category: "Tools" },
  { name: "Linux", category: "Tools" },

  // Domain Expertise
  { name: "ATE Programming", category: "Domain" },
  { name: "IC Validation", category: "Domain" },
  { name: "Failure Analysis", category: "Domain" },
  { name: "Prompt Engineering", category: "Domain" },
  { name: "Process Optimization", category: "Domain" },
  { name: "Data Analytics", category: "Domain" },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const experiences = [
  {
    role: "Electronics Engineer / Test Product Engineer",
    company: "Semiconductor Industry",
    period: "Present",
    description:
      "Developing and executing test strategies to ensure the quality, reliability, and performance of integrated circuits. Leading hardware validation, failure analysis, and process optimization initiatives.",
  },
  {
    role: "AI / Prompt Engineer",
    company: "Cross-functional",
    period: "Present",
    description:
      "Leveraging prompt engineering and AI tools to enhance engineering workflows, automate repetitive tasks, and improve technical problem-solving efficiency across teams.",
  },
];
