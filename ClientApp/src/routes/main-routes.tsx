import { useRoutes, Navigate} from "react-router-dom";
import StockDetailPage from '../views/StockDetailPage'
import HomePage from "../views/HomePage";
import Login from "../views/Login";
import React from 'react'
import Register from "../views/Register";
import Account from "../views/Account";
import { userApi } from "../redux/features/userApi";
import PublicChat from "../views/PublicChat";
import { WebSocketProvider } from '../context/PublicChatWebSocket';
import AccountSettings from "../views/AccountSettings";
import EditProfile from "../components/account-settings-dashboard/edit-profile.tsx/EditProfile";
import ChangePassword from "../components/account-settings-dashboard/change-password/ChangePassword";
interface ComponentProps {
    pathName: string;
    loadStatus: any;
}

const MainRoutes: React.FunctionComponent<ComponentProps> = ({pathName, loadStatus}) => {
    // Check if user is currently logged in, if not redirect to login page
    const {data: userData, error} = userApi.endpoints.verifyUser.useQueryState()

    // console.log(userData)
    React.useEffect(()=>{
        console.log(error)
    },[error])
    return useRoutes([
        {
            path: '/account',
            element: userData && (!loadStatus.isLoading && loadStatus.status !== 'pending') ? <Account /> : <Navigate to="/" />  
        },
        {
            path: '/account/settings/',
            element: userData && (!loadStatus.isLoading && loadStatus.status !== 'pending') ? <AccountSettings /> : <Navigate to='/' />,
            children: [
                {
                    path: 'edit-profile',
                    element: <EditProfile />,

                },
                {
                    path: 'change-password',
                    element: <ChangePassword />
                }
            ]
        },
        {
            path: '/login',
            element: userData ? <Navigate to="/" /> : <Login /> 
        },
        {
            path: '/register',
            element: userData ? <Navigate to="/" /> : <Register /> 
        },
        {
            path: '/chat',
            element: userData ? <WebSocketProvider><PublicChat /> </WebSocketProvider>: <Navigate to="/" /> 
        },
        {
            path: '/quote/:symbol',
            element: <><StockDetailPage /></>
        },
        {
            path: '/',
            // Important: If user is not logged in, redirect to Login page
            element: <><HomePage /></>
        },
        {
            path: '*',
            // If path does not exist above, redirect to homepage
            element: <Navigate to=""/>
        }
    ])
}
 
export default MainRoutes; 