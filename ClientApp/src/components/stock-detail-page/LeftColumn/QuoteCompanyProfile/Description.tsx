import React, { useState } from 'react';
import styled from 'styled-components'


const Container = styled.div`
margin-top: 2rem;
display: flex;
flex-direction: column;
width: 100%;
`;
const Header = styled.div`
display: flex;
justify-content: space-between;

`;
const Button = styled.div`
padding: 0 3px;
padding-bottom: 5px;
font-size: 20px;
height: 20px;
color: #6e7288;
background-color: #32323e;
text-align: center;
width: 20px;
font-weight: 900;
&:hover{
  cursor: pointer;
}
`;
const Content = styled.div`
  font-size: 14px;
  padding-bottom: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: ${(p:{display: string})=>p.display};
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
`;


interface ComponentProps{ 
  companyProfile: any;
}
const Description:React.FunctionComponent<ComponentProps> = ({companyProfile, }) => {

  const [displayBlock, setDisplayBlock] = useState<string>('-webkit-box')



  return (
    <Container>
      <Header>
        <div style={{ fontSize: '24px', marginBottom: '1.5rem' }}>Description</div>
        <Button onClick={() => displayBlock === '-webkit-box' ? setDisplayBlock('block') : setDisplayBlock('-webkit-box')}>+</Button>
      </Header>
      <Content display={displayBlock}>
        {companyProfile.description ? companyProfile.description : ''}
      </Content>
    </Container>
  );
}

export default Description;