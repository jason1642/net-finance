import { Button } from '@mui/material';
import React from 'react';
import { removeTokensLogout } from '../../api-requests/user-requests';
import { useNavigate, Link} from 'react-router-dom';
import styled from 'styled-components'

interface ComponentProps {
  userData: any;
  isLoading: boolean;
}

 const StyledLink = styled(Link)`
color: white;
display: block;
font-size: 12px;
font-weight: 500;
text-decoration: none;
padding: 6px 0px;
font-family: Helvetica, Arial, sans-serif;
&:hover {
border-bottom: 1px solid #52e3c2;
margin-top: 1px;
}
`;


const RightSideWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  gap: .9em;
`;
const RightSideStyledLink = styled(Link)`
color: white;
display: block;
font-size: .85em;
font-weight: 500;
text-decoration: none;
padding: 6px 0px;
border-bottom: 1px solid transparent;
font-family: Helvetica, Arial, sans-serif;
&:hover {
border-bottom: 1px solid #52e3c2;
}
`;

const LinkBatch: React.FunctionComponent<ComponentProps>  = ({userData, isLoading,}) => {
  const navigate = useNavigate()



  return (
    <>
      <StyledLink to=''>HOME</StyledLink>
      <StyledLink to={userData && !isLoading ? '/account' : '/login'}>PORTFOLIO</StyledLink>
      {/* <StyledLink to=''>HUBS</StyledLink> */}
      <StyledLink to='chat'>CHAT</StyledLink>
      {/* <StyledLink to=''>COMPARE</StyledLink> */}
      {/* <StyledLink to=''>SCREENER</StyledLink> */}
      <div style={{ flexGrow: .7, display: 'flex' }}></div>
     
      <RightSideWrapper>
          <RightSideStyledLink to=''>Help</RightSideStyledLink>
      {userData && !isLoading && <RightSideStyledLink to='account'>Account</RightSideStyledLink>}
      </RightSideWrapper>
    

      {

      userData && !isLoading ?   
        <Button
        onClick={()=>{
          removeTokensLogout()
          navigate('/')
          window.location.reload()
        }
        }
        style={{
          backgroundColor: '#52e3c2',
          padding: '.4rem .7rem',
          color: 'black',
          borderRadius: '3px',
          textTransform: 'none',
        }}
      >Log out</Button>
     :
         <StyledLink
        style={{
          backgroundColor: '#52e3c2',
          padding: '.7rem 1rem',
          color: 'black',
          borderRadius: '3px',
        }}
        to='login'>Login</StyledLink>
        
   }
   
    </>
  );
}

export default LinkBatch;