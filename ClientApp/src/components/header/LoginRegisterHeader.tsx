import * as React from 'react';
import {Container, LogoLink, LeftSideWrapper} from './Header'
interface ILoginRegisterHeaderProps {
}

const LoginRegisterHeader: React.FunctionComponent<ILoginRegisterHeaderProps> = (props) => {
  return (
    <Container>
         <LeftSideWrapper>
        <LogoLink to='/'>
        {/* <SiteLogo src={siteLogo} alt='Site logo' /> */}
          .Net Finance
        </LogoLink>
    
    </LeftSideWrapper>
    </Container>
  );
};

export default LoginRegisterHeader;
