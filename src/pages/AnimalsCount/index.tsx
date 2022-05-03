import React from 'react';
import FixedFairy from '../../components/FixedFairy';
import './animalsCount.scss';
import { animalsCount } from './animalsCountData';
import AnimalsCountItem from './animalsCountItem';

const AnimalsCount = () => {
  return (
    <div className='animals-count-page'>
      <h1>Посчитай лесных животных — один-два-пять</h1>
      <FixedFairy src='' />
      {
        animalsCount.map((animal, i) =>
          <AnimalsCountItem key={i} src={animal.src} count={animal.count} />)
      }
    </div>
  )
}

export default AnimalsCount;