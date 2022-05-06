import { Reducer } from "react"
import { AlertAction, AlertActionTypes, IAlertState } from "../types"

export const alertReducer: Reducer<IAlertState, AlertAction> = (state, action) => {
  switch (action.type) {
    case AlertActionTypes.SHOW_ALERT:
      return { ...state, isShowed: true, correct: action.payload.ok, left: action.payload.left }
    case AlertActionTypes.HIDE_ALERT:
      return { ...state, isShowed: false }
    default:
      return state
  }
}