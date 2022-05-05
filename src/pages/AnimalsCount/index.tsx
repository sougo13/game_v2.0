import { animalsCount } from './animalsCountData';
import AnimalsCountItem from './animalsCountItem';
import './animalsCount.scss';

const AnimalsCount = () => {

  return (
    <div className='animals-count-page'>
      <h1>Посчитай лесных животных — один-два-пять</h1>
      <div className='animals-count-fixed-fairy'>
        <img className='animals-count-fixed-fairy-img' src='./static/animalsCount/animalsCountFairy.webp' />
      </div>
      {
        animalsCount.map((animal, i) =>
          <AnimalsCountItem key={i} src={animal.src} count={animal.count} />)
      }
    </div>
  )
}

export default AnimalsCount;