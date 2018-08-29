import styled from "styled-components";

export const Container = styled.div`
  font-family: Tahoma, cursive;
  background: white;
  max-width: 500px;
  margin: 50px auto;
`;

export const Title = styled.div`
  background: ${props => (props.primary ? "#eb643b" : "white")};
  color: ${props => (props.primary ? "white" : "#eb643b")};
  font-size: 32px;
  padding: 10px;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
`;
