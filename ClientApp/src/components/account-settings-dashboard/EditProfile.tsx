'use client'
import * as React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
`;
interface IEditProfileProps {
}

const EditProfile: React.FunctionComponent<IEditProfileProps> = (props) => {
  return (
    <Container>
        This is the edit profile page
    </Container>
  );
};

export default EditProfile;
