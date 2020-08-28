import styled from "styled-components";

export const CharacterCardStyle = styled.div`
  background-color: white;
  border: 2px solid black;

  width: 40rem;
  margin: 0 auto;

  display: grid;

  grid-template-rows: repeat(2, 1fr);

  align-items: center;

  .name {
    max-width: 30rem;
    grid-area: name;
  }

  grid-template-areas: "name pI" "name oI";
`;

export const PhysicalInfoStyles = styled.div`
  grid-area: pI;
`;

export const OtherInfoStyles = styled.div`
  grid-area: oI;
`;

export const CharactersContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
