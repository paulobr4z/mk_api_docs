import styled from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1120px;
  
  .prev {
    position: absolute;
    top: 50%;
    left: -50px;
    transform: translateY(-50%);
    color: #000000;
    cursor: pointer;
  }

  .next {
    position: absolute;
    top: 50%;
    right: -50px;
    transform: translateY(-50%);
    color: #000000;
    cursor: pointer;
  }

  .wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    background-color: #000000;
    max-width: 1120px;
    height: 212px;
    overflow: hidden;
  }

  .swiper {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    column-gap: 8px;
    transition: all 0.3s ease-in-out;
  }

  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 212px;
    background: linear-gradient(180deg, #5C460A 0%, rgba(8, 8, 8, 0) 100%);
    border: 3px solid #11191E;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
    overflow: hidden;

    img {
      height: 90%;
      object-fit: contain;
    }

    p {
      position: absolute;
      bottom: 4px;
      width: 100%;
      background-color: rgba(1, 1, 1, 0.4);
      padding: 4px ;
      text-align: center;
    }
  }
`