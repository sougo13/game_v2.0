import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertContext } from '../../context/alert/alertContext';
import './mainMenu.scss';

const MainMenu: React.FC = () => {

  const { hide } = useContext(AlertContext);

  useEffect(() => {
    hide();
  }, [])

  const navigate = useNavigate();

  const handleClick = (number: number) => {
    switch (number) {
      case 1:
        navigate('/glabels');
        break;
      case 2:
        navigate('/animalscount')
        break;
      case 3:
        navigate('/tenderly')
        break;
      case 4:
        navigate('/family')
        break;
      case 5:
        navigate('/oneMany')
        break;
    }
  }

  return (
    <div className='main-menu-page'>
      <h1>Говорим о весне</h1>
      <div className='images-container'>
        <div className='image-block'>
          <div className='image-title'>
            Март
          </div>
          <img className='month-image' src='./static/march.webp' />
        </div>
        <div className='image-block'>
          <div className='image-title'>
            Апрель
          </div>
          <img className='month-image' src='./static/april.webp' />
        </div>
        <div className='image-block'>
          <div className='image-title'>
            Май
          </div>
          <img className='month-image' src='./static/may.webp' />
        </div>
      </div>
      <div className="main-menu-container">
      <img className='fairy-test-img' src='./static/main_fairy.webp'/>
        <div onClick={() => handleClick(1)} className='main-menu-item'>
          Полянки весенних цветов
        </div>
        <div onClick={() => handleClick(2)} className='main-menu-item'>
          Посчитай лесных животных — один-два-пять
        </div>
        <div onClick={() => handleClick(3)} className='main-menu-item'>
          Назови ласково
        </div>
        <div onClick={() => handleClick(4)} className='main-menu-item'>
          Семья животных весной
        </div>
        <div onClick={() => handleClick(5)} className='main-menu-item'>
          Один-одна-одно-одни
        </div>
      </div>
    </div>
  )
}

export default MainMenu