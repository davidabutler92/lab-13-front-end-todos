import React, { Component } from 'react'
import { fetchTodos, createTodo, updateTodo } from './todosApi';

export default class Todos extends Component {
    
    state = {
        todos: [],
        todo: '',
        loading: false
    }

    fetchTodoSetState = async () => {
        this.setState({ loading: true })
        const response =  await fetchTodos();
        this.setState({ todos: response.body, loading: false })      
    }

    componentDidMount = async () => {
        await this.fetchTodoSetState();
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const newTodo = {
            todo: this.state.todo
        };

        await createTodo(newTodo) 
        await this.fetchTodoSetState();
    }

    handleCompletedTodo = async (someId) => {
        await updateTodo(someId)
        await this.fetchTodoSetState(); 
    }

    render() {
        
const {
    todos,
    loading,
} = this.state;


        return (
            <div className='list'>
                <h2>Todo List</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                        required 
                        onChange={(e) => this.setState({ todo: e.target.value})} 
                        placeholder='add todo'></input>
                    </label>
                    <button
                    className='button2'>Add</button>
                </form>
                {
                    loading 
                        ? 'LOADING' 
                        : todos.map(todo => <div className='list' key={`${todo.todo}`} style={{ 
                            textDecoration: todo.completed ? 'line-through' : 'none' }
                        }>
                        {todo.todo}
                        {
                            todo.completed ? '' : <button 
                                className='button2'
                                onClick={() => this.handleCompletedTodo(todo.id)}>
                                Completed
                            </button>
                        }
                        </div>)
                }
            </div>
        )
    }
}
