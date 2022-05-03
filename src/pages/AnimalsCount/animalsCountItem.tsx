import React, { useState } from 'react';

interface AnimalsCountItemProps {
  src: string;
  count: number;
}

const AnimalsCountItem: React.FC<AnimalsCountItemProps> = ({ src, count }) => {

  const [active, setActive] = useState('');

  const handleClick = (answer: number) => {
    if (count === answer) {
      setActive('inactive');
    }
  }

  return (
    <div className={`animals-count-block ${active}`}>
      <img className='animals-count-img' src={src} />
      <div className='animals-count-answers-block'>
        <div onClick={() => handleClick(1)} className={`animals-count-answer ${active}`}>1</div>
        <div onClick={() => handleClick(2)} className={`animals-count-answer ${active}`}>2</div>
        <div onClick={() => handleClick(5)} className={`animals-count-answer ${active}`}>5</div>
      </div>
    </div>
  )
}

export default AnimalsCountItem