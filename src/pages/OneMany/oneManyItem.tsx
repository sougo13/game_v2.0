import React, { useState } from 'react';
import './oneMany.scss';

interface OneManyItemProps {
  src1: string,
  src2: string,
  id: number,
}

const OneManyItem: React.FC<OneManyItemProps> = ({ src1, src2, id }) => {

  const [active, setActive] = useState('');

  const handleClick = () => {
    setActive('active');
  }

  return (
    <div className={`one-many-item-block`}>
      <img
        onClick={handleClick}
        className={`one-many-main-img ${active}`}
        src={src1} />
      <img
        className={`one-many-second-img ${active}`}
        src={src2} />
    </div>
  )
}

export default OneManyItem