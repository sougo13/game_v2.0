export enum AlertActionTypes {
  SHOW_ALERT = 'SHOW_ALERT',
  HIDE_ALERT = 'HIDE_ALERT'
}

export interface IAlertState {
  isShowed: boolean,
  correct: boolean,
  show: (ok: boolean) => void,
  hide: () => void
}

interface ShowAlertAction {
  type: AlertActionTypes.SHOW_ALERT,
  payload: boolean
}

interface HideAlertAction {
  type: AlertActionTypes.HIDE_ALERT
}

export type AlertAction = ShowAlertAction | HideAlertAction;

