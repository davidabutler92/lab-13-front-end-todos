import React, { Component } from 'react'

export default class SignUp extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
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
