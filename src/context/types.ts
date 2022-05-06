export enum AlertActionTypes {
  SHOW_ALERT = 'SHOW_ALERT',
  HIDE_ALERT = 'HIDE_ALERT'
}

export interface IAlertState {
  isShowed: boolean,
  correct: boolean,
  left: boolean,
  show: (ok: boolean, left?: boolean) => void,
  hide: () => void
}

interface ShowAlertAction {
  type: AlertActionTypes.SHOW_ALERT,
  payload: {
    ok: boolean,
    left: boolean
  }
}

interface HideAlertAction {
  type: AlertActionTypes.HIDE_ALERT
}

export type AlertAction = ShowAlertAction | HideAlertAction;

