import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    { this.props.token && <div>welcome, user!!!</div> }
                </div>
                { this.props.token && <Link to="/todos"><div>To-do</div></Link> }
                <Link to="/login"><div>log in</div></Link>
                <Link to="/signup"><div>sign up</div></Link>
                <div>                
                    <Link to='/login'><button onClick={() => this.props.logout()}>Logout</button></Link>
                </div>
            </div>
        )
    }
}
