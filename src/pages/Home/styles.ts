import styled from 'styled-components'

import bgMain from '../../assets/images/bg_main.png'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  #home {
    display: flex;
    align-content: center;
    justify-content: center;
    position: relative;
    width: 100%;
    min-height: 800px;
    background-image: url(${bgMain});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    overflow: hidden;
  }

  #home::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(41, 40, 45, 0.32);
    backdrop-filter: blur(4px);
    z-index: -1;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1120px;

    .main-title {
      font-family: "Oswald";
      color: #ffffff;
      text-transform: uppercase;
      padding: 32px;
      background: rgba(160, 137, 76, 0.08);
      border: 1px solid #8F7F7F;
      backdrop-filter: blur(20px);
      border-radius: 12px;
      width: 50%;

      h2 {
        font-size: 48px;
        margin-bottom: 8px;
        line-height: 62px;
      }
  
      p {
        font-size: 24px;
        margin-bottom: 16px;
      }

      button {
        background-color: #000000;
        padding: 12px 16px;
        border-radius: 8px;
        color: #FFB902;
        font-weight: bold;
        margin-right: 8px;
      }
    }

    .main-image {
      position: relative;

      img {
        max-width: 600px;
      }

      .ellipse {
        position: absolute;
        top: -40%;
        left: 10%;
        width: 1300px;
        height: 1300px;
        border: 180px solid #FFB902;
        border-radius: 50%;
        z-index: -1;
      }
    }
  }
`

export const CharactersSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #000000 0%, #09090B 100%);
  width: 100%;
  padding-bottom: 120px;

  .character-main-image {
    position: relative;
    margin: 120px 0;
    margin-right: 64px;
    z-index: 1;

    img {
      max-width: 480px;
      max-height: 480px;
      object-fit: cover;
    }

  }

  .character-main-image::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border-radius: 50%;
    filter: blur(80px);
    background: rgba(255, 255, 255, 0.08);
    z-index: -1;
  }

  .character-description {
    display: flex;
    flex-direction: column;
    max-width: 600px;

    h3 {
      font-size: 64px;
      margin-bottom: 24px;
      color: #FDA90F;
    }

    p {
      font-size: 18px;
      line-height: 27px;
    }
  }
`

export const DocumentationSection = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  background-color: #000000;
  padding: 120px 0;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    h2 {
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 700;
      font-size: 42px;
      line-height: 56px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    h3 {
      font-family: 'Oswald';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 41px;
      text-transform: uppercase;
      margin-top: 32px;
      margin-bottom: 16px;
    }

    .url {
      width: 100%;
      background: #09090B;
      border: 1px solid #101013;
      border-radius: 4px;
      padding: 16px 32px;
      font-size: 24px;
      font-family: "Oswald";
      margin-bottom: 16px;

      strong {
        text-transform: uppercase;
      }
    }
  }

`
