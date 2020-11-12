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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                            onChange={(e) => this.setState({ email: e.target.value })} 
                            type='text'
                            placeholder='Email'>                       
                        </input>
                    </label>
                    <label>
                        <input 
                            onChange={(e) => this.setState({ password: e.target.value })} 
                            type='password'
                            placeholder='password'>                           
                        </input>
                    </label>
                    <button>Sign up</button>
                </form>
            </div>
        )
    }
}
