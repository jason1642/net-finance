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
  /* border: 1px solid white; */
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
  margin: 1rem 1rem 1rem 0;

`;
const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
    /* align-items: flex-start; */
`;

interface formFieldsTypes {
    value: string;
    label: string;
    shouldMap: boolean;

}

const formFields: Array<formFieldsTypes> = [
    {value: "username", label: "Username", shouldMap: true},
    {value: "first_name", label: "First Name", shouldMap: true},
    {value: "last_name", label: "Last Name", shouldMap: true},
    {value: "profile_picture", label: "Profile Picture", shouldMap: false},
    {value: "email", label: "Email", shouldMap: true},
    {value: "password", label: "Password", shouldMap: true}

]

const PersonalInformation: React.FunctionComponent<IPersonalInformationProps> = ({register, userData}) => {
  
  
    return (
    <Container>
        <ThemeProvider theme={theme}>

        <Title>Personal Information</Title>

<InputContainer>

{
    formFields.map((item:any)=>{

        return  item.shouldMap ? <InputWrapper id={item.value}>
    
        <TextField 
            label={item.label}
            defaultValue={userData[item.value]}
            {...register(item.value, {required: true})}
            sx={{
                color: 'white'
            }}
        />
        </InputWrapper> : <></>
    })
}
  
</InputContainer>



    </ThemeProvider>
    </Container>
  );
};

export default PersonalInformation;
