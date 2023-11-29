import * as React from 'react';
import styled from 'styled-components';
import {useForm, Controller} from 'react-hook-form'
import { Button } from '@mui/material';
import { Input } from 'antd';
import { sendChatRoomMessage } from '../../api-requests/chat-room-requests';


interface IUserInputProps {
  userId: string;
  roomId: string;
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

const UserInput: React.FunctionComponent<IUserInputProps> = ({userId, roomId}) => {
  const { handleSubmit, setValue, watch, control } = useForm({
    defaultValues: {
      messageInput: ''
    }
  })
  // const [disableButton, setDisableButton] 
  const onSubmit = (data: any)=> {
    const {messageInput} = data
    console.log(messageInput)


    messageInput.length > 0 && sendChatRoomMessage({
      sender_id: userId,
      room_id: roomId,
      message: messageInput
    }).then(res=>{ 
      setValue('messageInput', '')
    })
  }

  const onErrors = () => {
    console.log('React hook form on errors')
  }

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => {
      subscription.unsubscribe()
    }
  }, [watch]);

  return (<Container onSubmit={handleSubmit(onSubmit, onErrors)}>
    <Controller
      control={control}
      name="messageInput"
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
      })=>
        <TextBox
          id="outlined-multiline-flexible"
          placeholder="Send a message"
          value={value}
          onChange={onChange} // send value to hook form
          size='large'
          onPressEnter={()=>null}
          autoSize={{minRows: 1, maxRows: 5}}
            />
        }
      />
      <SubmitButton
       size='large'
       variant='contained'
       type='submit'
       disabled={watch('messageInput').length === 0 ? true : false}
       >Send</SubmitButton>
  </Container>)
};

export default UserInput;
