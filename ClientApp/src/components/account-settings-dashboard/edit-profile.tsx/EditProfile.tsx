'use client'
import * as React from 'react';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import ProfileImage from './ProfileImage';
import PersonalInformation from './PersonalInformation';
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from '@mui/material';
import { editUserProfile } from '../../../api-requests/user-requests';

type Inputs = {
  example: string
  exampleRequired: string
}

interface IEditProfileProps {
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* width: 100%; */
  max-width: 1400px;
  flex: 1 1 auto;
  border-radius: 6px;
  border: 1px solid grey;
  padding: 1rem;
`;




const EditProfile: React.FunctionComponent<IEditProfileProps> = () => {
  const {userData} = useOutletContext<{userData:any}>()


  React.useEffect(()=>{
    // console.log(userData)
  },[])


  const {register, handleSubmit, watch, formState: {errors},} = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs>  = (data) => {
    console.log(data)
// editUserProfile()

  }

  // console.log(watch("example")) // watch input value by passing the name of it

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>

      


  

      <ProfileImage register={register} userData={userData} />
    
      <PersonalInformation userData={userData} register={register}/>
    {/* Display/change username */}
    <Button 
    type='submit'
    sx={{width: '150px', alignSelf: 'center',}}
    variant='contained'>Submit</Button>
    </Container>
  );
};

export default EditProfile;
