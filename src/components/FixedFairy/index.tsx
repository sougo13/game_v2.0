import React from 'react';
import './styles.scss';

interface FixedFairyProps {
  src: string;
}

const FixedFairy: React.FC<FixedFairyProps> = () => {
  return (
    <div className='fixed-fairy'>
      <img className='fixed-fairy-img' src='./static/animalsCount/animalsCountFairy.webp'/>
    </div>
  )
}

export default FixedFairy