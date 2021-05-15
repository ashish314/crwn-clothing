import React from 'react';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import {auth} from './../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const {name, value } = event.target;
        this.setState({[name] : value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            this.setState({
                email: '',
                password: ''
            });
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className='sign-in-container'>
                <h2 className='sign-in-title'>I already have a account</h2>
                <span className='sign-in-subtitle'>Sign in with your email and password</span>
                <form className='sign-in-form' onSubmit= {this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email'
                        value= {this.state.email}
                        onChangeHandler={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        onChangeHandler={this.handleChange}
                        value={this.state.value}
                        label='password'
                        required
                    />
                    <div className='button'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick= {signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
