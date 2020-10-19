import { ItemSchema } from './ItemSchema';

export type SearchSchema = {
  total_count: number;
  incomplete_results: boolean;
  items: Array<ItemSchema>;
};
