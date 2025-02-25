export type IProject = {
  title: string;
  thumbnail: string;
  description: string;
  liveLink: string;
  codeLink: string;
  tags?: string[];
  technologies: string[];
  featured?: boolean;
  order: number;
};
