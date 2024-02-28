'use client'
import * as React from 'react';
import styled from 'styled-components';
import { MainWrapper } from '../../views/AccountSettings';


interface IEditProfileProps {
}

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1400px;
  flex: 1 1 auto;


`;

const EditProfile: React.FunctionComponent<IEditProfileProps> = (props) => {
  return (
    <Container>
        This is the edit profile page
    </Container>
  );
};

export default EditProfile;
