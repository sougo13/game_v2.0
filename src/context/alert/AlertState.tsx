import React, { useReducer, useState } from 'react'
import { AlertActionTypes } from '../types';
import { AlertContext, defaultValuse } from './alertContext'
import { alertReducer } from './alertReducer';

interface AlertStateProps {
  children: JSX.Element;
}

const AlertState: React.FC<AlertStateProps> = ({ children }) => {

  const [state, dispatch] = useReducer(alertReducer, defaultValuse);
  const [timer, setTimer] = useState<any>(null);

  const show = (ok: boolean, left: boolean = false): void => {

    clearTimeout(timer);

    dispatch({
      type: AlertActionTypes.SHOW_ALERT,
      payload: {
        ok,
        left
      }
    })

    setTimer(setTimeout(() => {
      hide();
    }, 3500))
  }

  const hide = (): void => {
    dispatch({
      type: AlertActionTypes.HIDE_ALERT
    })
  }

  return (
    <AlertContext.Provider value={{
      ...state,
      show,
      hide
    }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertState