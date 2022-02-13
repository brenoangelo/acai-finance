export type Transaction = {
  id: number;
  title: string;
  deposit?: number;
  spent?: number;
  type: string;
  category?: string;
  weight?: number;
  createdAt: string;
}

export type Filter = {
  category: string;
  date: string;
  search: string;
}