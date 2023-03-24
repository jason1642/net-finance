import * as React from 'react';
import TextField from '@mui/material/TextField';


interface IUserInputProps {
}

const UserInput: React.FunctionComponent<IUserInputProps> = (props) => {
  return <>
   <TextField
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          maxRows={4}
        />
  </>;
};

export default UserInput;
