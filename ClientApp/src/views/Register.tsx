import * as React from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form'
import {Container, Title, Input as InputConstructor, EmailErrorMessage, PlaceholderErrorMessage,} from '../styles/login-signup'
import GreenThemedButton from '../components/buttons/GreenThemedButton';
import {registerUser} from '../api-requests/user-requests'
import { checkIfEmailExists } from '../api-requests/user-requests';
import * as EmailValidator from 'email-validator'


interface ISignUpProps {
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Form = styled.form`
  display:flex;
  flex-direction: column;
`;
const Disclaimer = styled.div`
    color: #8f94ab;
    max-width: 300px;
    padding-top: 1.5rem;
    font-size: 15px;
    text-align: center;
    font-weight: 300;
`
// This page is a multi-step form view
// First screen prompts for a valid email address
// Then goes to another form, first and last name, username and password 

const Input = styled(InputConstructor)`
    margin-bottom: .5rem;
    width: 100%;
`

const SignUp: React.FunctionComponent<ISignUpProps> = (props) => {

    // const navigate = useNavigate()

    const { register, handleSubmit, trigger, getValues, formState: {errors} } = useForm({defaultValues: {
        email: '',
        firstName: '',
        lastName: '',
        username: '',
        password: '',
    }}) 
    const [isValidEmail, setIsValidEmail] = React.useState<boolean>(false)
    // When verifying email - either is valid string or if already exists, have loading animation
    React.useEffect(()=>{
        console.log(errors)
    },[errors])

    const onFormSubmit = async ( formData:any) => {
        await registerUser(formData).then(res=>{
            console.log(res)
        }, err => {
            console.log(err)
        })
        console.log(formData)
    }
    const handleCheckEmail = async (event: any) => {
        event.preventDefault();
        if(EmailValidator.validate(getValues('email')) === false) {
            trigger('email')
            setIsValidEmail(false)
            return;
        }
        await checkIfEmailExists(getValues('email')).then(res=>{
            // console.log(getValues('email'), res)
            res.data === false ? setIsValidEmail(true) : setIsValidEmail(false)
            
        }).catch(err=>{ 
            console.log(err)
        })
    }
   
    const onErrors = (errors: any) => {
        console.log(errors)
    }

  return (
    <Container >
        <Title style={{margin: '0 auto', width: 'auto', marginBottom: '25px'}}>Sign Up.</Title>
        <Wrapper>
        {
            isValidEmail === false ?
             <Form onSubmit={handleCheckEmail}>
                <Input 
             {...register('email', {
                required: 'Email is required',
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email',
                },})}
             type='email'
                placeholder={'Email Address'}
                />

                {errors.email?.message ?
                    <EmailErrorMessage>{errors.email.message}</EmailErrorMessage>
                    : 
                    <PlaceholderErrorMessage/>
                    }
                <GreenThemedButton
                buttonProps={{style: {
                    margin: "1.5rem auto 0"
                }}}
                //  buttonProps={{disable:true}} 
                //  onClick={handleCheckEmail} 
                type='submit'
                 title={'Continue'} 
                 />
                <Disclaimer>By clicking “Continue”, you have read and agree to Net Finance's Terms of Use and Privacy Policy.</Disclaimer>
                </Form>
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
            onClick={handleSubmit(onFormSubmit, onErrors)}
        />
             </>
        }

</Wrapper>



    </Container>
  );
};

export default SignUp;
