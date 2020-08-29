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
                  <p>Height: {height} cm</p>
                  <p>Mass: {mass} kg</p>
                  <p>Hair Color: {hair_color}</p>
                  <p>Skin Color: {skin_color}</p>
                  <p>Eye Color: {eye_color}</p>
                </PhysicalInfoStyles>
                <OtherInfoStyles>
                  <p>Birth Year: {birth_year}</p>
                  <p>Gender: {gender}</p>
                </OtherInfoStyles>
              </CharacterCardStyle>
            );
          })}
    </CharactersContainerStyle>
  );
};

export default Character;
