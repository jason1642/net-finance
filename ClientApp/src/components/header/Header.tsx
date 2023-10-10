import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import NavButtons from './NavButtons'
import { userApi} from '../../redux/features/userApi'

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 31px;
    padding: 13px 1.5rem 1rem 2rem; 
    width: 100%;
    max-width: 1550px;
    align-self: center;
    background-color: #32323e;
  `;

  // const SiteLogo = styled.img`
  //   height: 100px;
  //   width: auto;
  // `;

 
interface ComponentProps {

}
const LeftSideWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  gap: .9em;
  align-items: center;
  /* align-items: flex-end; */
`;
const LogoLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 1.9em;
  margin: 0 .6rem;
`;
export const StyledLink = styled(Link)`
color: white;
display: block;
font-size: .9em;
font-weight: 400;
text-decoration: none;
padding: 6px 0px;
border-bottom: 1px solid transparent;

font-family: Helvetica, Arial, sans-serif;
&:hover {
border-bottom: 1px solid #52e3c2;
/* margin-top: 1px; */
}
`;
const Header: React.FunctionComponent<ComponentProps>  = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const {data: userData, isLoading} = userApi.endpoints.verifyUser.useQueryState()



  // console.log(windowWidth)
  React.useEffect(() => {
    // console.log(userData)
  }, [userData])

  return (
    <Container>
    
        <LeftSideWrapper>
        <LogoLink to='/'>
        {/* <SiteLogo src={siteLogo} alt='Site logo' /> */}
          .Net Finance
        </LogoLink>
    <StyledLink to=''>HOME</StyledLink>
      <StyledLink to={userData && !isLoading ? '/account' : '/login'}>PORTFOLIO</StyledLink>
      {/* <StyledLink to=''>HUBS</StyledLink> */}
      <StyledLink to='chat'>CHAT</StyledLink>
    </LeftSideWrapper>

      {/* {windowWidth <= 768 ? 'X' : <LinkBatch />} */}
      {/* <Menu> */}
      {/* <StyledLink to=''>HUBS</StyledLink> */}
      
      {/* <StyledLink to=''>COMPARE</StyledLink> */}
      {
      <NavButtons 
           userData={userData}
           isLoading={isLoading}
       />
      }
      {/* </Menu> */}
    </Container>
  );
}

export default Header;