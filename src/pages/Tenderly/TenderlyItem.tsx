import React, { useState } from 'react';

interface TenderlyItemProps {
  src: string;
}

const TenderlyItem: React.FC<TenderlyItemProps> = ({ src }) => {

  const [active, setActive] = useState('');

  const handleClick = () => {
    setActive('active')
  }

  return (
    <div className={`tenderly-block`}>
      <img
        onClick={() => handleClick()}
        className={`tenderly-img ${active}`}
        src={src} />
    </div>
  )
}

export default TenderlyItem