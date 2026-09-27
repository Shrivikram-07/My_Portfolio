import { SkillCategory } from "@/lib/types";

export const skillsData: SkillCategory[] = [
  {
    name: "Programming Languages",
    description: "Core languages used for algorithms, systems programming, and backend logic.",
    skills: ["Python", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    name: "Frontend Engineering",
    description: "Modern component-driven web interfaces, responsive styling, and fast build tools.",
    skills: ["HTML", "CSS", "React.js", "Vite", "Tailwind CSS"],
  },
  {
    name: "Backend & Systems",
    description: "RESTful architecture, server runtimes, web frameworks, and secure authentication.",
    skills: ["Node.js", "Express.js", "Flask", "Django", "REST APIs", "JWT", "bcrypt"],
  },
  {
    name: "Databases & Storage",
    description: "Relational data modeling, querying, optimization, and persistence.",
    skills: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    name: "Data & Machine Learning",
    description: "Data manipulation, statistical analysis, computer vision, and NLP modeling.",
    skills: ["Pandas", "NumPy", "Scikit-learn", "NLP", "Data Analysis"],
  },
  {
    name: "Developer Tools & Environment",
    description: "Version control, collaboration, CI/CD foundations, and code craftsmanship.",
    skills: ["Git", "GitHub", "VS Code"],
  },
];
