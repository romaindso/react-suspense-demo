import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  font-family: Tahoma, cursive;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  background: #0c2f73;
  color: #ffca08;
  font-size: 32px;
  padding: 15px;
  text-align: center;
`;

export const PokemonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const PokemonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #3a9eff;
  border: 2px solid #4b47ff;
  width: 200px;
  height: 200px;
  margin: 20px;
`;

export const ImageWrapper = styled.div`
  align-self: center;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Name = styled.h1`
  align-items: flex-end;
  background: #3561e8;
  color: #ffca08;
  font-size: 20px;
  padding: 15px;
  margin: 0;
  text-align: center;
  text-transform: capitalize;
`;
