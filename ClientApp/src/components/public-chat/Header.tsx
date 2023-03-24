import * as React from 'react';
import styled from 'styled-components';


interface IChatHeaderProps {
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0;
  font-size: 1.5rem;
  color: #eae8e8;
`;

const ChatHeader: React.FunctionComponent<IChatHeaderProps> = (props) => {
  return <Container>
    Public Chat
  </Container>;
};

export default ChatHeader;
