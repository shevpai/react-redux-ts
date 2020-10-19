import { 
  SHOW_ALERT,
  HIDE_ALERT,
  AlertActionTypes } from './types';

type AlertState = {
  text?: string,
  type?: string,
  visible: boolean
}

const initialState: AlertState = {
  visible: false,
};

export function alertReducer(state = initialState, action: AlertActionTypes): AlertState {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...action.payload
      }
    case HIDE_ALERT:
      return {
        visible: false
      }
    default:
      // All action types must be used
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }

  return state
}
