"use client"
import { TextField } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';


interface IPersonalInformationProps {
    register: any;
}

const Container = styled.div`
  display:flex;
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

const PersonalInformation: React.FunctionComponent<IPersonalInformationProps> = ({register}) => {
  
  
    return (
    <Container>
        <Title>Personal Information</Title>



    <InputWrapper>
    <TextField 
        defaultValue={"test"}
        {...register("example")}
    />

    </InputWrapper>

    </Container>
  );
};

export default PersonalInformation;
