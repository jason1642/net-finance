import * as React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import styled from 'styled-components';

interface IGreenThemedButtonProps {
  title: string;
  onClick?: Function;
  buttonProps?: any;
  type?: string;
}

const Container = styled(ButtonUnstyled)`
  color: white;
  display: block;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  padding: 18px 22px;
  font-family: D-din Exp,GT America,"system-ui",BlinkMacSystemFont,-apple-system,Segoe UI,Helvetica Neue,Helvetica,sans-serif;
  background-color: #52e3c2;
  padding: .7rem 1rem;
  color: #393945;
  border-radius: 3px;
  width: calc(50% - 8px);
  margin-top: 15px;
  border-width: 0px;
  border-radius: 4px;

  &:hover {
    background-color: #48ac99;
    cursor: pointer;
  }
`

const GreenThemedButton: React.FunctionComponent<IGreenThemedButtonProps> = ({buttonProps, type = 'button', title, onClick = ()=>{}}) => {
  return (
    <Container type={type} {...buttonProps} onClick={(e)=>onClick(e)}>
      {title}
    </Container>
  );
};

export default GreenThemedButton;
