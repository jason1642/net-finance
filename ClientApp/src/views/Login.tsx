import * as React from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form'
import GreenThemedButton from '../components/buttons/GreenThemedButton';
import { Link } from 'react-router-dom';
import {Container, Title, Input, } from '../styles/login-signup'
import { userLogin } from '../redux/async-actions/user-auth';
import { useAppDispatch } from '../redux/store';
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom';


interface ILoginProps {
}

const Wrapper = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 14px;
    width: 100%;
    justify-content: space-between;
    align-items: center;

`

const ForgotPasswordButton = styled(Link)`
  color: #52e3c2;
  background-color: transparent;
  border: none;
  text-decoration: none;
  margin-top: 15px;
  &:hover{ 
    cursor: pointer;
  }
`;
// interface UserLoginSchema {
//     username: string;
//     password: string;
// }

// Error handling
// Api request

const Login: React.FunctionComponent<ILoginProps> = () => {
    // const user = useAppSelector((state: RootState) => state.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()



    const {register, handleSubmit,
      //  formState: {errors} 
       } = useForm({
        defaultValues: {
            username: '', 
            password: ''
        }
    })
    

    const onFormSubmit = async (formData:any) => {
        let timerInterval: any
        console.log(formData)
        await dispatch(userLogin(formData)).then(res => {
            console.log(res)
          if (res.payload.status === 200) {   
            Swal.fire({
              title: 'Successfully logged in!!',
              html: '...redirecting you to the home page now',
              timer: 1000,
              timerProgressBar: true,
              didOpen: () => {
                timerInterval = setInterval(() => {
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then(() => {
              navigate('/')
              window.location.reload()
            })
            
          } else {
            Swal.fire({
              title: 'Wrong username or password',
              icon: 'error',
              html: 'Sorry, wrong username or password. Please try again',
              timer: 1500,
              willClose: () => {
                clearInterval(timerInterval)
              }
            })
          }
        })
      };

    const onErrors = (errors: any) => {
        console.log(errors)
    }


  return (
    <Container >
       
       
        <Title>Log in to Net Finance.</Title>



    <Wrapper onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <Input
            {...register('username')}
            placeholder={'Username or email'}
            
        />
        <Input
            {...register('password')}
            type='password'
         
            placeholder={'Password'}
        />


    <ButtonWrapper>
    <GreenThemedButton type='submit' title='Log In'/>
    <ForgotPasswordButton to='/forgot-password' >Forgot Password?</ForgotPasswordButton>
    </ButtonWrapper>

    </Wrapper>
    
    </Container>
  );
};

export default Login;