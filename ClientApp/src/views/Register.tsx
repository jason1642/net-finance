import * as React from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form'
import {Container, Title, Input as InputConstructor, } from '../styles/login-signup'
import GreenThemedButton from '../components/buttons/GreenThemedButton';
import { useAppDispatch } from '../redux/store';



interface ISignUpProps {
}

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
const Disclaimer = styled.div`
    color: #8f94ab;
    max-width: 300px;
    padding-top: 32px;
    font-size: 15px;
    text-align: center;
    font-weight: 300;
`
// This page is a multi-step form view
// First screen prompts for a valid email address
// Then goes to another form, first and last name, username and password 

const Input = styled(InputConstructor)`
    margin-bottom: 16px;
    width: 100%;
`

const SignUp: React.FunctionComponent<ISignUpProps> = (props) => {

    const dispatch = useAppDispatch()
    // const navigate = useNavigate()

    const { register, handleSubmit,  } = useForm({defaultValues: {
        email: '',
        firstName: '',
        lastName: '',
        username: '',
        password: '',
    }}) 
    const [isValidEmail, setIsValidEmail] = React.useState<boolean>(true)
    // When verifying email - either is valid string or if already exists, have loading animation


    const onFormSubmit = async (formData:any) => {

        console.log(formData)
    }


    const onErrors = (errors: any) => {
        console.log(errors)
    }

  return (
    <Container >
        <Title style={{margin: '0 auto', width: 'auto', marginBottom: '25px'}}>Sign Up.</Title>
        <Form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        {
            isValidEmail ?
             <><Input 
             {...register('email')}
                placeholder={'Email Address'}
                />
                <GreenThemedButton buttonProps={{disable:true}} onClick={()=>{setIsValidEmail(true)}} title={'CONTINUE'} />
                <Disclaimer>By clicking “Continue”, you have read and agree to Net Finance's Terms of Use and Privacy Policy.</Disclaimer>
                </>
             : 
             <>
                <Input
                    {...register('firstName')}
                    placeholder={'First Name'}
                />
                <Input
                    {...register('lastName')}
                    placeholder={'Last Name'}
                />
                <Input
                    {...register('username')}
                    placeholder={'Username'}
                />
                <Input
                    {...register('password')}
                    placeholder={'Password'}
                    type='password'
                />

        <GreenThemedButton
            buttonProps={{style: {width: '100%', fontWeight: '400', padding: '18px 22px'}}} 
            title='SIGN UP'
        />
             </>
        }

</Form>



    </Container>
  );
};

export default SignUp;
