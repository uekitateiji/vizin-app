export type CardProps = {
  applicant?: string;
  title: string;
  value: string;
  description: string;
  category?: string;
  imageUrl: any;
  date: string;
  rating?: number;   // ✅ Adicionado rating como number
  reviews?: number;
  categoryColor?: string;
};
