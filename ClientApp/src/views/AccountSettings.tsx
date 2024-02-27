import * as React from 'react';
import styled from 'styled-components';
import MenuDrawer from '../components/account-settings-dashboard/MenuDrawer';
import EditProfile from '../components/account-settings-dashboard/EditProfile';
import {useLocation} from 'react-router-dom'
const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1400px;
  flex: 1 1 auto;


`;
interface IAccountSettingsProps {
}



const AccountSettings: React.FunctionComponent<IAccountSettingsProps> = (props) => {
    // const {data: userData} = userApi.endpoints.verifyUser.useQueryState()

    React.useEffect(()=>{
        console.log(window.location.pathname)
    },[])


    return (
    <Container>
        <MenuDrawer />

        {
            
        }
        
        {/* Main */}
    </Container>
  );
};

export default AccountSettings;
