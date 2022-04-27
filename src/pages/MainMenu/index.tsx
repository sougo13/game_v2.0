import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.scss';

const MainMenu = () => {

  const navigate = useNavigate();

  const handleClick = (number: number) => {
    switch (number) {
      case 1:
        navigate('/game1');
        break;
      case 2:
        navigate('/game2')
        break;
      case 3:
        navigate('/game3')
        break;
      case 4:
        navigate('/game4')
        break;
      case 5:
        navigate('/game5')
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
      <div className='fairy-container'> 
      <img className='fairy-img' src='./static/main_fairy.webp'/>
      </div>
    </div>
  )
}

export default MainMenu