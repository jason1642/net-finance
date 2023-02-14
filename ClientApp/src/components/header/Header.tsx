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
    padding: 20px 1.5rem 1rem 2rem;
    background-color: #32323e;
  `;

  // const SiteLogo = styled.img`
  //   height: 100px;
  //   width: auto;
  // `;

  export const StyledLink = styled(Link)`
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
interface ComponentProps {

}

const LogoLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
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
      <LogoLink to='/'>
        {/* <SiteLogo src={siteLogo} alt='Site logo' /> */}
          .Net Finance |
        </LogoLink>
      {/* {windowWidth <= 768 ? 'X' : <LinkBatch />} */}
      {/* <Menu> */}
      <StyledLink to=''>HUBS</StyledLink>
      <StyledLink to=''>CHAT</StyledLink>
      <StyledLink to=''>COMPARE</StyledLink>
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