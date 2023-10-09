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
    background-color: #32323e;
  `;

  // const SiteLogo = styled.img`
  //   height: 100px;
  //   width: auto;
  // `;

 
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
          .Net Finance
        </LogoLink>
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