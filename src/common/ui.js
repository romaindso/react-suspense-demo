import styled from "styled-components";

export const Center = styled.div`
  text-align: center;
  display: flex;
  flex: 1;
  min-height: 400px;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: black;
`;

export const NavLink = styled.span`
  background-color: ${props => (props.isActive ? "white" : "#c4c4c4")};
  padding: 10px 5px;
  color: black;
  margin: 0 20px;

  &:hover {
    cursor: pointer;
    background-color: white;
  }
`;
