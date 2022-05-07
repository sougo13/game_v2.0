import React from 'react';
import { oneManyItems } from './oneManyData';
import OneManyItem from './oneManyItem';
import './oneMany.scss';

const OneMany: React.FC = () => {

  return (
    <div className='one-many-page'>
      <h1>Один-одна-одно-одни</h1>
      <div className='one-many-game-container'>
        {oneManyItems.map(item =>
          <OneManyItem
            key={item.id + 'parent'}
            src1={item.src1}
            src2={item.src2}
            id={item.id}
          />)
        }
      </div>
    </div>
  )
}

export default OneMany