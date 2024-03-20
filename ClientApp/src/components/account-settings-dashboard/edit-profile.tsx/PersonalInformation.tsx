"use client"
import { Button, TextField } from '@mui/material';
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
  max-width: 800px;
  padding-left: 1.5rem;
  align-self: center;
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
  align-items: center;
  flex: 1 0 33%;
  justify-content: flex-start;
    /* align-items: flex-start; */
`;

interface formFieldsTypes {
    value: string;
    label: string;
    shouldMap: boolean;
    validations?: any;
    type?: string;
}

const formFields: Array<formFieldsTypes> = [
    {value: "username", label: "Username", shouldMap: true, validations: {minLength: 3, maxLength: 12}},
    {value: "first_name", label: "First Name", shouldMap: true},
    {value: "last_name", label: "Last Name", shouldMap: true},
    {value: "profile_picture", label: "Profile Picture", shouldMap: false},
    {value: "email", type: 'email',label: "Email", shouldMap: true},
    // {value: "password", type: 'password', label: "Password", shouldMap: true}

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
            type={ item.type ? item.type : 'text'}
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
  
  {/* <Button variant='contained'>Change Password</Button> */}
</InputContainer>




    </ThemeProvider>
    </Container>
  );
};

export default PersonalInformation;
