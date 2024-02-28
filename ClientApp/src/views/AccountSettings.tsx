import * as React from 'react';
import styled from 'styled-components';
import MenuDrawer from '../components/account-settings-dashboard/MenuDrawer';
import EditProfile from '../components/account-settings-dashboard/EditProfile';
import {Outlet, useLocation} from 'react-router-dom'
import _ from 'lodash'

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1400px;
  flex: 1 1 auto;


`;



export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid white; */
    width: 100%;
    padding: 2rem;
    padding-top: 1rem;
    
`
const TabTitle = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
  /* background-color: grey; */
  padding: .8rem;
  color: white;
  font-weight: 400;
  font-size: 2rem;
  margin-top: 0;
`;
interface IAccountSettingsProps {
}



const AccountSettings: React.FunctionComponent<IAccountSettingsProps> = (props) => {
    // const {data: userData} = userApi.endpoints.verifyUser.useQueryState()
    let location = useLocation().pathname.split('/')
    const [pathName, setPathName] = React.useState<string>()
    React.useEffect(()=>{

        setPathName(_.startCase(location[location.length - 1].split('-').join(' ')))
        console.log(location)
    },[location])


    return (
    <Container>
        <MenuDrawer />

        <MainWrapper>  
            <TabTitle>{pathName}</TabTitle>
            <Outlet />

        </MainWrapper>

    </Container>
  );
};

export default AccountSettings;
