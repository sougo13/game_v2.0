import React from 'react';
import './styles.scss';

interface AnswerFairyProps {
  ok: boolean
}

const AnswerFairy: React.FC<AnswerFairyProps> = ({ ok }) => {
  return (
    <div className='answer-fairy'>
      <img
        className='answer-fairy-img'
        src={`./static/${ok ? 'ok.webp' : 'wrong'}`} />
    </div>
  )
}

export default AnswerFairy