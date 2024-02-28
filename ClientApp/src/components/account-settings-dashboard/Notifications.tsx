import * as React from 'react';
import styled from 'styled-components';
import { MainWrapper } from '../../views/AccountSettings';


interface INotificationsProps {
}
const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1400px;
  flex: 1 1 auto;


`;
const Notifications: React.FunctionComponent<INotificationsProps> = (props) => {
  return (
    <Container>

    </Container>
  );
};

export default Notifications;
