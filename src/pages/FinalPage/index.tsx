import React, { useContext, useEffect } from 'react';
import { AlertContext } from '../../context/alert/alertContext';
import './styled.scss';

const FinalPage: React.FC = () => {

  const { hide } = useContext(AlertContext);

  useEffect(() => {
    hide();
  }, [])

  return (
    <div className='final-page'>
      <h1 className='final-title'>Молодец!</h1>
      <div className='final-content-block'>
        <img
          className='final-butterfly1'
          src='./static/final/butterfly2.webp'
        />
        <img
          className='final-butterfly2'
          src='./static/final/butterfly2.webp'
        />
        <img
          className='final-butterfly'
          src='./static/final/butterfly.webp'
        />
        <img
          className='final_fairy'
          src='./static/final/final_fairy.webp'
        />
      </div>
    </div>
  )
}

export default FinalPage