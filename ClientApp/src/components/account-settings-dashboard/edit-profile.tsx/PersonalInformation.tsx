"use client"
import { TextField } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { UserAccountTypes } from '../../../types/user-account';
import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

interface IPersonalInformationProps {
    register: any;
    userData: UserAccountTypes;
}

const Container = styled.div`
  display:flex;
  flex-direction: column;
  border: 1px solid white;
  /* width: 100%; */
  padding-left: 1.5rem;
`;

const Title = styled.h3`
  display: flex;
  color: white;
  font-weight: 400;
`;

const InputWrapper = styled.div`
  display: flex;

`;

const PersonalInformation: React.FunctionComponent<IPersonalInformationProps> = ({register, userData}) => {
  
  
    return (
    <Container>
        <ThemeProvider theme={theme}>

        <Title>Personal Information</Title>



    <InputWrapper>
    
    <TextField 
        label="Username"
        defaultValue={userData.username}
        {...register("example")}
        sx={{
            color: 'white'
        }}
    />

    </InputWrapper>
    </ThemeProvider>
    </Container>
  );
};

export default PersonalInformation;
