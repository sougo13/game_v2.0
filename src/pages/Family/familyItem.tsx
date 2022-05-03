import React from 'react';
import './family.scss';

interface FamilyItemProps {
  src: string,
  id: number,
  active: boolean,
  setCurrentItem: any,
  checked: boolean
}

const FamilyItem: React.FC<FamilyItemProps> = ({ src, id, active, setCurrentItem, checked }) => {

  const handleClick = () => {
    if (!checked) {
      if (active) {
        setCurrentItem(0);
      } else {
        setCurrentItem(id);
      }
    }
  }

  return (
    <div className={`family-item-block ${active ? 'active' : ''}`}>
      <img
        onClick={handleClick}
        className={`family-item-img ${active ? 'active' : ''} ${checked ? 'inactive' : ''}`}
        src={src} />
    </div>
  )
}

export default FamilyItem