import React from 'react';
import { glabels } from './glabelsData';
import ImageItem from './ImageItem';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './glabels.scss';

const Glabels: React.FC = () => {
  return (
    <div className='glabels-page'>
      <h1 className='h1-title'>Полянки весенних цветов</h1>
      <div className='glabels-game-container'>
        <div className='glabels-fairy-block'>
          <img className='glabels-fairy-img' src='./static/glabels/glabels.webp' />
        </div>
        <div className='game-block'>
          <Carousel
            showThumbs={false}
            showStatus={false}
          >
            {glabels.map((glabel, i) => <ImageItem key={i} src1={glabel.src1} src2={glabel.src2} text={glabel.text} />)}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Glabels