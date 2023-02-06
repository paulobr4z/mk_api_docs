import { Header } from "../../components/Header";
import { CharactersSection, DocumentationSection, HomeContainer } from "./styles";
import { Carousel } from "../../components/Carousel";
import { useEffect, useState } from "react";
import { getCharactersByGame } from "../../services";
import { ICharacter } from "../../types";
import { Footer } from "../../components/Footer";

import geras from '../../assets/images/geras.png'
import liu from '../../assets/images/liu.png'

export function Home() {
  const [charactersMK11, setCharactersMK11] = useState([]);
  const [selected, setSelected] = useState<ICharacter>();

  useEffect(() => {
    async function onGetCharactersMK11() {
      const response = await getCharactersByGame('MK11');

      setCharactersMK11(response.data);
      setSelected(response.data[3]);
    }

    onGetCharactersMK11();
  }, [])

  function selectedCharacter(char: ICharacter) {
    setSelected(char);
  }

  return (
    <HomeContainer>
      <Header />
      <section id="home">
        <div className="home-wrapper">
          <div className="main-title">
            <h2>Welcome to mk API</h2>
            <p>Choose Your Fighter</p>
            <span>
              <a href="#documentation">
                <button>
                  DOCS
                </button>
              </a>
              <a href="https://github.com/paulobr4z/mk_api" target="_blank" rel="noopener noreferrer">
                <button>
                  GITHUB
                </button>
              </a>
            </span>
          </div>
          <div className="main-image">
            <img src={geras} alt="geras" />
            <div className="ellipse"></div>
          </div>
        </div>
      </section>
      <CharactersSection>
        <div className="characters-wrapper">
          <div className="character-main-image">
              <img src={selected?.image || liu} alt="liu kang" />
          </div>
          <div className="character-description">
            <h3>{selected?.name}</h3>
            <p>
              {selected?.bio}
            </p>
          </div>
        </div>
        <div className="carousel-container">
          <Carousel 
            data={charactersMK11}
            selectedCharacter={(char:ICharacter) => selectedCharacter(char)}
          />
        </div>
      </CharactersSection>
      <DocumentationSection id="documentation">
        <div className="documentation-wrapper">
          <h2>
            Documentation
          </h2>
          <div className="url">
            <p><strong>BASE URL: </strong>https://mkapi.up.railway.app/api/</p>
          </div>
          <h3>
            characters
          </h3>
          <div className="url">
            <p><strong>get all: </strong>https://mkapi.up.railway.app/api/characters </p>
          </div>
          <div className="url">
            <p><strong>Get by id: </strong>https://mkapi.up.railway.app/api/characters/id</p>
          </div>
          <div className="url">
            <p><strong>Get by name: </strong>https://mkapi.up.railway.app/api/characters/name</p>
          </div>
          <div className="url">
            <p><strong>Get by Game: </strong>https://mkapi.up.railway.app/api/characters/game/mk11</p>
          </div>
        </div>
      </DocumentationSection>
      <Footer />
    </HomeContainer>
  )
}