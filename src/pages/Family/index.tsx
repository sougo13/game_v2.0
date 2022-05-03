import { useEffect, useState } from 'react';
import './family.scss';
import { children, parents } from './familyData';
import FamilyItem from './familyItem';

const Family = () => {

  const [currentParent, setCurrentParrent] = useState<number>(0);
  const [currentChild, setCurrentChild] = useState<number>(0);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);


  useEffect(() => {
    if (currentParent !== 0 && currentChild === currentParent) {
      setCheckedItems([...checkedItems, currentParent])
    }
  }, [currentParent, currentChild])

  return (
    <div className='family-page'>
      <h1>Семья животных весной</h1>
      <div className='family-game-container'>
        <div className='items-column'>
          {parents.map(parent =>
            <FamilyItem
              checked={checkedItems.indexOf(parent.id) !== -1}
              active={currentParent === parent.id}
              key={parent.id + 'parent'}
              src={parent.src}
              id={parent.id}
              setCurrentItem={setCurrentParrent}
            />)
          }
        </div>
        <div className='items-column'>
          {children.map((child) =>
            <FamilyItem
              checked={checkedItems.indexOf(child.id) !== -1}
              active={currentChild === child.id}
              key={child.id + 'child'}
              src={child.src}
              id={child.id}
              setCurrentItem={setCurrentChild}
            />)
          }
        </div>
      </div>
    </div>
  )
}

export default Family