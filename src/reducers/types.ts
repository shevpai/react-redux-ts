import { SearchSchema } from '../schemes/SearchScheme';

// Sync
export const START_FETCHING = 'START_FETCHING';
type StartFetching = {
  type: typeof START_FETCHING;
};

export const STOP_FETCHING = 'STOP_FETCHING';
type StopFetching = {
  type: typeof STOP_FETCHING;
};

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
type SetSearchQuery = {
  type: typeof SET_SEARCH_QUERY;
  payload: string;
};

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
type SetCurrentPage = {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
};

export const SHOW_ALERT = 'SHOW_ALERT';
type ShowAlert = {
  type: typeof SHOW_ALERT;
  payload: { text: string; type: string; visible: boolean };
};

export const HIDE_ALERT = 'HIDE_ALERT';
type HideAlert = {
  type: typeof HIDE_ALERT;
};

// Async
export const SET_REPOS = 'SET_REPOS';
export type SetRepos = {
  type: typeof SET_REPOS;
  payload: SearchSchema;
};

export type ReposActionTypes =
  | StartFetching
  | StopFetching
  | SetSearchQuery
  | SetCurrentPage
  | SetRepos;

export type AlertActionTypes = ShowAlert | HideAlert;
