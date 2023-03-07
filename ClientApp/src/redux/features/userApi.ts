import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserAccountTypes } from '../../types/user-account';
// import { createSelector } from '@reduxjs/toolkit'
// import { RootState } from '../store';

export interface UserState {
    data: UserAccountTypes,
    isAuthenticated: boolean, 
    isLoading: boolean,
  }
interface UserLoginSchema {
    username: string;
    password: string;
}
// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({  baseUrl: process.env.NODE_ENV === 'production' ?
    'https://netfinance.azurewebsites.net/api/users' 
    :'https://localhost:7108/api/users', }), 
    tagTypes: ['User'],
    endpoints: (builder) => ({
      getAllUsers: builder.query<any, void>({
        // query: (name) => `pokemon/${name}`,
        query: ()=>''
      }),     

      loginUser: builder.query({
        query: (userForm: UserLoginSchema) => ({ 
          url: '/login',
          method: 'POST',
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          // Include the entire post object as the body of the request 
          body: userForm,
          credentials: "include"
 
        })
      }),

      verifyUser: builder.query<UserAccountTypes, void>({
        query: () => ({
          url: '/verify',
          method: 'POST',
          credentials: "include",
          provideTags: ['User']
          // Include the entire post object as the body of the request
        //   body: userForm
        })
      }),
      




    }),
  })

  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints


  export const { useLoginUserQuery, useVerifyUserQuery, useGetAllUsersQuery, } = userApi

