import { createSlice, current,  } from '@reduxjs/toolkit'
// current import used for debugging, to log or inspect the work in progress state
import { userLogin, verifyUser, } from '../async-actions/user-auth'
// import type { PayloadAction } from '@reduxjs/toolkit'


export interface UserState {
  data: any,
  isAuthenticated: boolean,
  isLoading: boolean,
}

const initialState: UserState = {
  data: {},
  isAuthenticated: false,
  isLoading: true,
}




// CURRENTLY NOT IN USE
// Use ./userApi file for cleaner fetching and caches



export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(current(state))
        return {
            data: {
                username: 'stateusername',
                email: 'email@gmail.com'
            },
            isAuthenticated: true,
            isLoading: false
        }
   
    },
   
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(userLogin.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(state, action)
      state.data = action.payload
      return ({...state, isAuthenticated: true})
    })
    builder.addCase(verifyUser.pending, (state: any, action) => {
        console.log('Pending verify user...')
        state.isLoading = true
        state.data = undefined
        // console.log(state
      })
    builder.addCase(verifyUser.fulfilled, (state: any, action) => {
      console.log(action.payload)
      console.log('Verify user successfully fulfilled')
          
      return ({...state, ...action.payload,})
      })
    builder.addCase(verifyUser.rejected, (state: any, action) => {
      // console.log(action.payload)
      console.log('REJECETED VERIFY USER')
        state.data = undefined
        state.isLoading = false
    //   return ({...state, isLoading: false,})
      })
    //  builder.addCase(logoutUser.fulfilled, (state: any, action)=>{
    //   console.log(action)
    //   return {...state, ...action.payload}
    //  })
  },
})

// Action creators are generated for each case reducer function
export const { setUserState, } = userSlice.actions

export default userSlice.reducer