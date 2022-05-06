import { createContext } from "react"
import { IAlertState } from "../types";

export const defaultValuse: IAlertState = {
  isShowed: false,
  correct: false,
  left: false,
  hide() { },
  show() { },
}

export const AlertContext = createContext(defaultValuse);