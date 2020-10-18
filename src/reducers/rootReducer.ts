import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { alertReducer } from './alertReducer';
import { reposReducer } from './reposReducer';

const rootReducer = combineReducers({
  repos: reposReducer,
  alert: alertReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
export type AppState = ReturnType<typeof rootReducer>;
