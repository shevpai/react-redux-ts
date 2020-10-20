import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../reducers/rootReducer';
import { AlertState } from '../reducers/alertReducer';
import { hideAlert, showAlert } from '../reducers/actions';

export function useAlert() {
  const dispatch = useDispatch();
  const alert = useSelector<AppState, AlertState>((state) => state.alert);

  const hide = (): void => {
    dispatch(hideAlert());
  };

  const show = (text: string, type: string, visible: boolean): void => {
    dispatch(showAlert(text, type, visible));
    setTimeout(hide, 5000);
  };

  return {
    hide,
    show,
    alert,
  };
}
