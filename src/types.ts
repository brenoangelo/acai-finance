export type Transaction = {
  title: string;
  amount: number;
  type: string;
  category?: string;
  change: number;
  weight: number;
  createdAt: string;
}