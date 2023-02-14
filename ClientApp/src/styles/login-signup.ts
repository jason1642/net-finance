import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: white;
  flex: 1 1 auto;
  flex-direction: column;
  max-width: 616px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 70px 0px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 42px;
  margin-bottom: 1rem;
  font-weight: 300;
  text-align: left;
  width: 100%;
`;

export const Input = styled.input`
  color: white;
  background-color: #3f3f4a;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 18px 22px;

   @media (min-width: 770px) {
    width: calc(43% - 8px);

    }
    &:focus-visible{ 
        border: none;
        outline: none;
    }
`;