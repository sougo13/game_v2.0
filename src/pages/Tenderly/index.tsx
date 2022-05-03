import React from 'react';
import FixedFairy from '../../components/FixedFairy';
import './tenderly.scss';
import { tenderlyImages } from './tenderlyData';
import TenderlyItem from './TenderlyItem';

const Tenderly = () => {
  return (
    <div className='tenderly-page'>
      <h1>Назови ласково</h1>
      <FixedFairy src='' />
      {
        tenderlyImages.map((image, i) =>
          <TenderlyItem key={i} src={image.src} />)
      }
    </div>
  )
}

export default Tenderly;