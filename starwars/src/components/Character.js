// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  CharacterCardStyle,
  CharactersContainerStyle,
  PhysicalInfoStyles,
  OtherInfoStyles,
} from "../styles/CharacterCard.style";

const Character = () => {
  const [characterList, setCharacterList] = useState();

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => setCharacterList(res.data.results));
  }, []);

  return (
    <CharactersContainerStyle>
      {characterList === undefined || characterList === null
        ? null
        : characterList.map((character) => {
            const {
              name,
              height,
              mass,
              hair_color,
              skin_color,
              eye_color,
              birth_year,
              gender,
            } = character;

            return (
              <CharacterCardStyle>
                <h2 className="name">{name}</h2>
                <PhysicalInfoStyles>
                  <p className="height">{height}</p>
                  <p className="mass">{mass}</p>
                  <p className="hairColor">{hair_color}</p>
                  <p className="skinColor">{skin_color}</p>
                  <p className="eyeColor">{eye_color}</p>
                </PhysicalInfoStyles>
                <OtherInfoStyles>
                  <p className="birth_year">{birth_year}</p>
                  <p className="gender">{gender}</p>
                </OtherInfoStyles>
              </CharacterCardStyle>
            );
          })}
    </CharactersContainerStyle>
  );
};

export default Character;
