import React from 'react';
import { tenderlyImages } from './tenderlyData';
import TenderlyItem from './TenderlyItem';
import './tenderly.scss';

const Tenderly: React.FC = () => {
  return (
    <div className='tenderly-page'>
      <h1>Назови ласково</h1>
      <div className='tenderly-fixed-fairy'>
        <img className='tenderly-fixed-fairy-img' src='./static/tenderly/tenderlyFairy.webp' />
      </div>
      {
        tenderlyImages.map((image, i) =>
          <TenderlyItem key={i} src={image.src} />)
      }
    </div>
  )
}

export default Tenderly;