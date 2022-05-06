import React, { useContext } from 'react';
import { AlertContext } from '../../context/alert/alertContext';
import './styles.scss';

const AnswerFairy: React.FC = () => {

  const { correct, isShowed, left } = useContext(AlertContext);

  return (
    <>
      <div className={`answer-fairy 
      ${(isShowed && correct) ? 'active' : ''}
      ${(left && correct) ? 'left' : ''}`}>
        <img
          className='answer-fairy-img'
          src='./static/ok.webp'
        />
      </div>
      <div className={`answer-fairy 
      ${(isShowed && !correct) ? 'active' : ''}
      ${(left && !correct) ? 'left' : ''}`}>
        <img
          className='answer-fairy-img'
          src='./static/wrong.webp'
        />
      </div>
    </>
  )
}

export default AnswerFairy