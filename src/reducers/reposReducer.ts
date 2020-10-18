import { ItemSchema } from '../schemes/ItemSchema';
import { ReposActionTypes } from './types';

export type ReposState = {
  items: Array<ItemSchema>;
  isFetching: boolean;
  searchQuery: string;
  currentPage: number;
  perPage: number;
  totalCount: number;
};

const initialState: ReposState = {
  items: [],
  isFetching: false,
  searchQuery: 'stars:%3E1',
  currentPage: 1,
  perPage: 20,
  totalCount: 0,
};

export function reposReducer(state = initialState, action: ReposActionTypes) {
  switch (action.type) {
    default:
      return state;
  }
}
