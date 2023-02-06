import { useEffect, useRef, useState } from "react";
import { ICharacter } from "../../types";
import { CarouselContainer } from "./styles";

import prev from '../../assets/images/left.svg';
import next from '../../assets/images/right.svg';

interface ICarousel {
  data: ICharacter[]
  selectedCharacter: (character:ICharacter) => void;
}

export function Carousel({
  data,
  selectedCharacter
}: ICarousel) {
  const ref = useRef<HTMLDivElement>(null);
  const refWrapper = useRef<HTMLDivElement>(null);
  const [startingPoint, setStartingPoint] = useState(0);
  const [step, setStep] = useState(0);

  console.log(step,Math.abs(startingPoint), refWrapper.current!?.offsetWidth * step);

  function handleCharSelected(char: ICharacter) {
    selectedCharacter(char);
  }

  function moveToLeft() {    
    if (startingPoint < 0) {
      setStartingPoint(Math.abs(188 * Math.floor(refWrapper.current!?.offsetWidth / 180)) + startingPoint);
    }
  }

  function moveToRight() {
    setStep(Math.floor(ref.current!?.offsetWidth / refWrapper.current!?.offsetWidth))
    if (Math.abs(startingPoint) < refWrapper.current!?.offsetWidth * step) {      
      setStartingPoint(-Math.abs(188 * Math.floor(refWrapper.current!?.offsetWidth / 180)) + startingPoint);
    }
  }

  return (
    <CarouselContainer>
      <a
        className="prev"
        onClick={moveToLeft}
      >
        <img src={prev} alt="prev" />
      </a>
      <div className="wrapper" ref={refWrapper}>
        <div 
          className="swiper"
          style={{left:startingPoint}}
          ref={ref}
        >
          {data.map(item => (
            <div 
              className="card" 
              key={item.name} 
              onClick={() => handleCharSelected(item)}
            >
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <a 
        className="next" 
        onClick={moveToRight}
      >
        <img src={next} alt="next" />
      </a>
    </CarouselContainer>
  )  
}