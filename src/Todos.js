import React, { Component } from 'react'
import { fetchTodos, createTodo } from './servers';

export default class Todos extends Component {
    
    state = {
        todos: [],
        todo: '',
        loading: false
    }
   
    componentDidMount = async () => {
        this.setState({ loading: true })
        const response =  await fetchTodos();
        
        this.setState({ todos: response.body, loading: false })
    }

    handleSubmit = async (e) => {
        const { todo } = this.state
        e.preventDefault();
        
        const newTodo = {
            todo: todo
        };

        await createTodo(newTodo)

        await fetchTodos();
        console.log(this.state.todos);
    }

    render() {
        return (
            <div>
                <h2>TODO LIST</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                        onChange={(e) => this.setState({ todo: e.target.value})} 
                        placeholder='add todo'></input>
                    </label>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
