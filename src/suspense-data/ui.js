import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  max-width: 500px;
  margin: auto;
`;

export const Title = styled.div`
  background: #eb643b;
  color: white;
  font-size: 32px;
  padding: 10px;
  text-align: center;
`;

export const Todo = styled.li`
  list-style-type: none;
  background: white;
  color: #24a29a;
  padding: 10px;
  font-size: 24px;
  margin: 0px 0px 5px;
`;

export const Todos = styled.ul`
  margin: 0;
  padding: 0px;
`;

export const Center = styled.div`
  text-align: center;
  display: flex;
  flex: 1;
  min-height: 300px;
  align-items: center;
  justify-content: center;
`;
