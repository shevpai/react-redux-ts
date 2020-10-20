import { SearchSchema } from '../schemes/SearchScheme';
import {
  HIDE_ALERT,
  SHOW_ALERT,
  SET_CURRENT_PAGE,
  SET_REPOS,
  SET_SEARCH_QUERY,
  START_FETCHING,
  STOP_FETCHING,
  ReposActionTypes,
  AlertActionTypes,
} from './types';

// repos async
export const setRepos = (data: SearchSchema): ReposActionTypes => ({
  type: SET_REPOS,
  payload: data,
});

// repos sync
export const startFetching = (): ReposActionTypes => ({
  type: START_FETCHING,
});

export const stopFetching = (): ReposActionTypes => ({
  type: STOP_FETCHING,
});

export const setCurrentPage = (page: number): ReposActionTypes => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setSearchQuery = (query: string): ReposActionTypes => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

// alert
export const showAlert = (text: string, type: string, visible: boolean): AlertActionTypes => ({
  type: SHOW_ALERT,
  payload: { text, type, visible },
});

export const hideAlert = (): AlertActionTypes => ({
  type: HIDE_ALERT,
});
