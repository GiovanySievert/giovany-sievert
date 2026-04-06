export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  githubUrls?: { label: string; url: string }[];
  liveUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
