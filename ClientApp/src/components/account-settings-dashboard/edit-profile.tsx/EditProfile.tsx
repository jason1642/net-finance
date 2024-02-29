'use client'
import * as React from 'react';
import styled from 'styled-components';
import { MainWrapper } from '../../../views/AccountSettings';
import { useOutletContext } from 'react-router-dom';
import ProfileImage from './ProfileImage';


interface IEditProfileProps {
}

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1400px;
  flex: 1 1 auto;


`;




const EditProfile: React.FunctionComponent<IEditProfileProps> = () => {
  const {userData} = useOutletContext<{userData:any}>()

  React.useEffect(()=>{
    console.log(userData)
  },[])

  return (
    <Container>
      <ProfileImage userData={userData} />
    
    </Container>
  );
};

export default EditProfile;
