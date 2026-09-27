export interface PipelineStep {
  title: string;
  description: string;
  detail: string;
}

export interface ProjectMetricPlaceholder {
  label: string;
  value: string;
  helper?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: "AI & Maritime Systems" | "FinTech & Web3" | "Full-Stack Enterprise";
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  featured: boolean;
  pipeline?: PipelineStep[];
  architecturePoints: string[];
  keyContributions: string[];
  challenges: string[];
  outcomes: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoBadge?: string;
  previewType: "pipeline" | "dashboard" | "workflow";
  highlights?: { label: string; text: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: "Internship" | "Contract / Project";
  descriptionPoints: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  specialization?: string;
  location: string;
  period: string;
  cgpa: string;
  focus: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  title: string;
  position: string;
  organization: string;
  domain: string;
  year: string;
  description: string;
  highlightBadge: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badgeType: string;
  verificationNote?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  email: string;
  phone: string;
  location: string;
}

export interface UserProfile {
  name: string;
  shortName: string;
  title: string;
  supportingLine: string;
  summary: string;
  aboutBio: string[];
  socials: SocialLinks;
  education: EducationItem[];
}
