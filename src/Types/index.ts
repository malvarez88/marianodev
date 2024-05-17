export type Work = {
  id: number;
  slug: string;
  title: string;
  company: string;
  img?: string | undefined | null;
  description?: string;
  technologies?: string[];
};
