import React from 'react';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from './../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword)
            return alert('Password dont match');
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(e) {
            console.log(e);
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name] : value });
    } 

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>sign up with email and password</h2>
                <span className='subtitle'>Sign up</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text"
                        name='displayName'
                        value={displayName}
                        label='displayName'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type="email"
                        name='email'
                        value={email}
                        label='email'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type="password"
                        name='password'
                        value={password}
                        label='password'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type="password"
                        name='confirmPassword'
                        value={confirmPassword}
                        label='confirmPassword'
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>Sign up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp