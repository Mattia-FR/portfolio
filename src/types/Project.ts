export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
  stack?: string[];
  features?: string[];
}
