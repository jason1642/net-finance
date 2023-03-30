import * as React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import {useForm} from 'react-hook-form'
import { Button } from '@mui/material';


interface IUserInputProps {
}

const Container = styled.form`
  display:flex;
  width: 80%;      
  color: white;       
  border-width: 0;
  border-radius: 12px;     
  /* justify-content: flex-end; */
  /* background-color: grey; */
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
  margin-top: .8rem;
`;

const TextBox = styled(Input.TextArea)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 85%;
  font-size: 1em;
  line-height: 1em;
  border-radius: 12px;
  background-color: #e3e3e3;
  &::-webkit-scrollbar {
      display: none;
    }
    ::-webkit-scrollbar-thumb {
    }

`

const SubmitButton = styled(Button)`
  display: flex;
  
`;

const UserInput: React.FunctionComponent<IUserInputProps> = (props) => {
  const {register, handleSubmit, watch, formState: {errors} } = useForm()

  const onSubmit = ()=> {
    console.log('On Submit Message Input')
  }

  const onErrors = () => {
    console.log('React hook form on errors')
  }



  return <Container onSubmit={handleSubmit(onSubmit, onErrors)}>
   <TextBox
      id="outlined-multiline-flexible"
      placeholder="Send a message"
      size='large'
      // minRows={1}
      {...register('messageInput')}
      autoSize={{minRows: 1, maxRows: 5}}
      />
      <SubmitButton
       size='large'
       variant='contained'
       >Send</SubmitButton>
  </Container>;
};

export default UserInput;
