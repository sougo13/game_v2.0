import React, { useEffect, useState } from 'react';
import { animalsCount } from './animalsCountData';
import AnimalsCountItem from './animalsCountItem';
import { useNavigate } from 'react-router-dom';
import './animalsCount.scss';

const AnimalsCount: React.FC = () => {

  const [count, setCount] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (count === animalsCount.length) {
      navigate('/final');
    }
  }, [count])

  const inc = () => {
    setCount(count + 1);
  }

  return (
    <div className='animals-count-page'>
      <h1>Посчитай лесных животных — один-два-пять</h1>
      <div className='animals-count-fixed-fairy'>
        <img className='animals-count-fixed-fairy-img' src='./static/animalsCount/animalsCountFairy.webp' />
      </div>
      <div className='animals-count-column'>
        {
          animalsCount.map((animal, i) =>
            <AnimalsCountItem key={i} src={animal.src} count={animal.count} inc={inc} />)
        }
      </div>
    </div>
  )
}

export default AnimalsCount;