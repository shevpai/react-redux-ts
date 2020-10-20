import { ItemSchema } from '../schemes/ItemSchema';
import {
  SET_CURRENT_PAGE,
  SET_REPOS,
  SET_SEARCH_QUERY,
  START_FETCHING,
  STOP_FETCHING,
  ReposActionTypes,
  CLEAR_REPOS,
} from './types';

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

export function reposReducer(state = initialState, action: ReposActionTypes): ReposState {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload.items,
        totalCount: action.payload.total_count,
      };
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case STOP_FETCHING:
      return {
        ...state,
        isFetching: false,
      };
    case CLEAR_REPOS:
      return {
        ...state,
        items: [],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      // All action types must be used
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }

  return state;
}
