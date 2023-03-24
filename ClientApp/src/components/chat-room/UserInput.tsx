import * as React from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

interface IUserInputProps {
}

const Container = styled.div`
  display:flex;
  width: 100%;      
  border: 1px solid white;
  color: white;             
  /* justify-content: flex-end; */
`;

const UserInput: React.FunctionComponent<IUserInputProps> = (props) => {
  return <Container>
   <TextField
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          
          sx={{flexGrow: 1, color: "#ffffff5"}}
          maxRows={4}
        />
  </Container>;
};

export default UserInput;
