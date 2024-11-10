import Button from "../../../UI/button/Button";
import FormGroup from "../../../UI/form-group/FormGroup";
import { useForm } from 'react-hook-form';

export default function SignUp() {
    const { register, handleSubmit } = useForm();

    const onCreateAccount = (data: unknown) => console.log("DATA", data, typeof data);

    return (
        <form onSubmit={handleSubmit(onCreateAccount)}>
            <FormGroup 
                labelText="First name"
                labelProps={{ 
                    htmlFor: 'firstName'
                }}
                inputProps={{ 
                    inputAttributes: {
                        id: 'firstName-sign-up',
                        name: 'firstName', 
                        type: 'text'
                    }
                }} 
            />

            <FormGroup 
                labelText='Last name'
                labelProps={{ 
                    htmlFor: 'lastName'
                }}
                inputProps={{ 
                    inputAttributes: {
                        id: 'lastName-sign-up',
                        name: 'lastName', 
                        type: 'text'
                    }
                }} 
            />

            <FormGroup 
                labelText="Email"
                labelProps={{ 
                    htmlFor: 'email'
                }}
                inputProps={{ 
                    inputAttributes: {
                        id: 'email-sign-up',
                        name: 'email', 
                        type: 'email'
                    }
                }} 
            />

            <FormGroup 
                labelText= 'Password' 
                labelProps={{ 
                    htmlFor: 'password'
                }}
                inputProps={{ 
                    inputAttributes: {
                        id: 'password-sign-up',
                        name: 'password', 
                        type: 'password'
                    }
                }} 
            />

            <FormGroup 
                labelText= 'Confirmation password'
                labelProps={{ 
                    htmlFor: 'confirmPassword'
                }}
                inputProps={{ 
                    inputAttributes: {
                        id: 'confirmation-password-sign-up',
                        name: 'confirmPassword', 
                        type: 'password'
                    }
                }} 
            />
    
            <Button type="submit">Sign Up</Button>
        </form>
    )
}