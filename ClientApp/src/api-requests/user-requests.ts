import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ?
    'https://netfinance.azurewebsites.net/api/users' 
    :'https://localhost:7108/api/users',
    withCredentials: true,
})


// interface UserLoginSchema {
//     username: string;
//     password: string;
// }


// LoginUser / verifyUser are currently not used anywhere, redux user actions handles it but is still here for reference
// const loginUser = async (userInput: UserLoginSchema) => 
//     await api.post('/login', userInput).then(res=>{
//         console.log(res)
//         return res.data
//     }, err=>err)
// const verifyUser = async ()=> 
//    await api.post('/verify').then(res=>{
//     console.log(res)
//    },err=>{console.log(err)})






interface RegisterFormData {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}
// Register user is in this file rather than the userApi.ts Redux file because it does not need to set the 
// global state with anything.
export const registerUser = async(formData:RegisterFormData)=>{
    await api.post('/register', formData).then(res=>{

    },err=>{
        console.log(err)
        return err
    })
}

export const checkIfEmailExists = async (email: string)=>
    await api.get(`/check-email-exists/${email}`).then(res=>res,err=>err)



export const removeTokensLogout = async () => 
    await api.post('/logout').then(res=>{
        console.log(res)
        return res
    }, err=> {
        console.log(err)
        return err
    })