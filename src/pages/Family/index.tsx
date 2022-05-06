import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertContext } from '../../context/alert/alertContext';
import './family.scss';
import { children, parents } from './familyData';
import FamilyItem from './familyItem';

const Family = () => {

  const [currentParent, setCurrentParrent] = useState<number>(0);
  const [currentChild, setCurrentChild] = useState<number>(0);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const navigate = useNavigate();

  const { show } = useContext(AlertContext);

  useEffect(() => {
    if (currentParent !== 0 && currentChild !== 0) {
      if (currentChild === currentParent) {
        setCheckedItems([...checkedItems, currentParent]);
        setCurrentChild(0);
        setCurrentParrent(0);
        show(true);
      } else {
        show(false);
      }
    }

    if(checkedItems.length === parents.length){
      navigate('/final');
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