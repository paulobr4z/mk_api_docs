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
  const [startingPoint, setStartingPoint] = useState(0);
  const [selectedChar, setSelectedChar] = useState<ICharacter>();

  function handleCharSelected(char: ICharacter) {
    setSelectedChar(char);
    selectedCharacter(char);
  }

  function moveToinitialPoint() {
    if (startingPoint < 0) {
      setStartingPoint(startingPoint + ((180 * 6) + 48));
    }
    if(startingPoint == -188) {
      setStartingPoint(0);
    }
  }

  function moveToright() {
    if (Math.abs(startingPoint) >= 5828) return;
    if (Math.abs(startingPoint) < 5000) {
      setStartingPoint(startingPoint - ((180 * 6) + 48));
    } else {
      setStartingPoint(startingPoint - 188);
    }
  }

  return (
    <CarouselContainer>
      <a
        className="prev"
        onClick={moveToinitialPoint}
      >
        <img src={prev} alt="prev" />
      </a>
      <div className="wrapper">
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
        onClick={moveToright}
      >
        <img src={next} alt="next" />
      </a>
    </CarouselContainer>
  )  
}