import React from 'react';
import { glabels } from './glabels';
import './Glabels.scss';
import ImageItem from './ImageItem';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Glabels = () => {
  return (
    <div className='glabels-page'>
      <h1>Полянки весенних цветов</h1>
      <div className='glabels-game-container'>
        <img className='glabels-fairy-img' src='./static/glabels/glabels.webp' />
        <div className='fairy-block'>
        </div>
        <div className='game-block'>
          <Carousel showStatus={false}>
            {glabels.map(glabel => <ImageItem src1={glabel.src1} src2={glabel.src2} text={glabel.text} />)}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Glabels