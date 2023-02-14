import { useRoutes, Navigate} from "react-router-dom";
import StockDetailPage from '../views/StockDetailPage'
import HomePage from "../views/HomePage";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import HomeSearchBar from "../components/search-bar/HomeSearchBar";
import Account from "../views/Account";
import { userApi } from "../redux/features/userApi";


const MainRoutes = () => {
    // Check if user is currently logged in, if not redirect to login page
    const {data: userData} = userApi.endpoints.verifyUser.useQueryState()

    // console.log(userData)
    return useRoutes([
        {
            path: '/account',
            element: userData ? <Account /> : <Navigate to="/" />  
        },
        {
            path: '/login',
            element: userData ? <Navigate to="/" /> : <Login /> 
        },
        {
            path: '/sign-up',
            element: userData ? <Navigate to="/" /> : <SignUp /> 
        },
        {
            path: '/quote/:symbol',
            element: <><HomeSearchBar /><StockDetailPage /></>
        },
        {
            path: '/',
            // Important: If user is not logged in, redirect to Login page
            element: <><HomeSearchBar/><HomePage /></>
        },
        {
            path: '*',
            // If path does not exist above, redirect to homepage
            element: <Navigate to=""/>
        }
    ])
}
 
export default MainRoutes; 