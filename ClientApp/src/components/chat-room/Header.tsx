import * as React from 'react';
import styled from 'styled-components';


interface IChatHeaderProps {
  chatRoomData: any;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0;
  padding-bottom: 10px;

  font-size: 1.5rem;
  color: #eae8e8;
  border-bottom: 1px solid #b3b3b338;
`;

const ChatHeader: React.FunctionComponent<IChatHeaderProps> = ({chatRoomData}) => {
  return <Container>
    Public Chat
  </Container>;
};

export default ChatHeader;
