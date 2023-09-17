import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 600px;
  margin: 10px;
  padding: 10px;
  background-color: aquamarine;
  border: 1px solid black;
  border-radius: 6px;

  &:hover {
    background-color: aqua;
  }
`;
export const Status = styled.p`
  font-size: 20px;
  color: ${props => (props.status === 'online' ? 'green' : 'red')};
`;

export const Link = styled.a`
  color: red;
  font-size: 20px;
`;

export const Link2 = styled(Link)`
  margin-top: 10px;
  color: purple;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;
