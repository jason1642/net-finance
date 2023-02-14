import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ?
    'https://netfinance.azurewebsites.net/api/users' 
    :'https://localhost:7108/api',
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



export const removeTokensLogout = async () => 
    await api.post('/logout').then(res=>{
        console.log(res)
        return res
    }, err=> {
        console.log(err)
        return err
    })