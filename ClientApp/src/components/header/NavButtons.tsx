import { Button } from '@mui/material';
import React from 'react';
import {StyledLink} from './Header'
import { removeTokensLogout } from '../../api-requests/user-requests';
import { useNavigate} from 'react-router-dom';

interface ComponentProps {
  userData: any;
  isLoading: boolean;
}

const LinkBatch: React.FunctionComponent<ComponentProps>  = ({userData, isLoading,}) => {
  const navigate = useNavigate()



  return (
    <>
      <StyledLink to=''>HOME</StyledLink>
      <StyledLink to=''>PORTFOLIO</StyledLink>
      {/* <StyledLink to=''>HUBS</StyledLink> */}
      <StyledLink to=''>CHAT</StyledLink>
      {/* <StyledLink to=''>COMPARE</StyledLink> */}
      {/* <StyledLink to=''>SCREENER</StyledLink> */}
      <div style={{ flexGrow: .7, display: 'flex' }}></div>
      <StyledLink to=''>HELP</StyledLink>
      <StyledLink to='account'>Account</StyledLink>

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