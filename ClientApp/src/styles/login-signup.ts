import { TextField } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: white;
  flex: 1 1 auto;
  flex-direction: column;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  /* padding: 70px 0px; */
`;

export const Title = styled.div`
  display: flex;
  font-size: 42px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  font-weight: 300;
  text-align: left;
  width: auto;
`;

export const Input = styled(TextField)`
  color: white;
  background-color: #3f3f4a;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  padding: 18px 22px;
  display: flex;
  align-self: center;
  width: calc(100% - 1rem);
  margin: 0 auto;
   @media (max-width: 770px) {
    width: calc(43% - 8px);

    }
    &:focus-visible{ 
        border: none;
        outline: none;
    }
`;


export const EmailErrorMessage = styled.div`
  display: flex;
  color: #ffef00;
  height: 1.2rem;

  /* width: 100%; */
  margin: 0 auto;
`;

export const PlaceholderErrorMessage = styled.div`
  display:flex;
  height: 1.2rem;
`;

export const InputWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;