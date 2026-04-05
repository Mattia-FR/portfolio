export interface Project {
  // Identité
  id: string;
  title: string;
  description: string; // 2-3 lignes max
  status: "completed" | "in-progress";
  tier: "main" | "secondary"; // pour la hiérarchie visuelle

  // Contexte
  type: "solo" | "group";
  role?: string; // surtout utile pour les projets groupe

  // Technique
  stack: string[];
  highlights: string[]; // 2-3 points techniques max

  // Médias
  thumbnail: string; // image principale
  screenshots: string[]; // 2-4 max

  // Liens
  liveUrl?: string;
  videoUrl?: string; // si pas de démo live
  githubUrl: string[];
  githubNames?: string[];
}

export interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}
