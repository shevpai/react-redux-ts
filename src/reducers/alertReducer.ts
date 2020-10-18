import { AlertActionTypes } from './types';

const initialState = {
  visible: false,
};

export function alertReducer(state = initialState, action: AlertActionTypes) {
  switch (action.type) {
    default:
      return state;
  }
}
