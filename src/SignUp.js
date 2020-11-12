import React, { Component } from 'react'
import { createUser } from './todosApi';

export default class SignUp extends Component {

    state = {
        email: '',
        password: '',
        loading: false
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true })

        const user = await createUser(this.state);

        await this.setState({ loading: false })

        this.props.handleTokenUserChange(user.body.token, user.body.email)

        this.props.history.push('/todos')
    }

    render() {
        return (
            <div className='list'>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                            required
                            onChange={(e) => this.setState({ email: e.target.value })} 
                            type='text'
                            placeholder='Email'>                       
                        </input>
                    </label>
                    <label>
                        <input 
                            required
                            onChange={(e) => this.setState({ password: e.target.value })} 
                            type='password'
                            placeholder='password'>                           
                        </input>
                    </label>
                    <button 
                    className='button2'>Sign up</button>
                </form>
            </div>
        )
    }
}
