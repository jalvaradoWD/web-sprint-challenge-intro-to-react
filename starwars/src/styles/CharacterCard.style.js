import styled from "styled-components";

export const CharacterCardStyle = styled.div`
  h2,
  p {
    margin: 0;
  }
  background-color: white;
  border: 5px solid black;
  border-radius: 5px;

  width: 40rem;
  margin: 0 auto;

  display: grid;

  grid-template-rows: 5fr auto;
  grid-template-columns: 5fr 3fr;

  align-items: center;

  .name {
    max-width: 30rem;
    grid-area: name;
  }

  grid-template-areas: "name pI" "name oI";
`;

export const PhysicalInfoStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  row-gap: 1rem;

  background-color: lightgray;

  grid-area: pI;
`;

export const OtherInfoStyles = styled.div`
  grid-area: oI;

  background-color: coral;
  align-self: center;

  padding: 1rem;
`;

export const CharactersContainerStyle = styled.div`
  display: flex;
  row-gap: 1rem;
  flex-flow: wrap;
  justify-content: space-around;

  margin: 5rem 0;
`;
