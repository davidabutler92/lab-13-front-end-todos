import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css';

export default class Header extends Component {
    render() {
        return (
            <div className='headerDiv'>
                <div className='userName'>
                    { this.props.token && <div>{ this.props.userName}</div> }
                </div>
                <div>                
                    { this.props.token && 
                    <Link 
                        className='
                        blockInline 
                        link 
                        underlineNone'
                        to="/todos">
                            <div>To-do</div></Link> }
                    <Link 
                        className='blockInline 
                        link 
                        underlineNone'
                        to="/login"><div>log in</div></Link>
                    <Link 
                        className='
                        blockInline 
                        link 
                        underlineNone'
                        to="/signup"><div>sign up</div></Link>
                    <Link 
                    to='/login'><button 
                    className='button'
                    onClick={() => this.props.logout()}>Logout</button>
                    </Link>
                </div>
            </div>
        )
    }
}
