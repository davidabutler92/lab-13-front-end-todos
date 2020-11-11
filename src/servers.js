import request from 'superagent';

const URL = 'https://warm-bayou-77109.herokuapp.com'

export function fetchTodos() {
    const TOKEN = localStorage.getItem('TOKEN');
    try {
        return request
                .get(`${URL}/api/todos`)
                .set('Authorization', TOKEN)
    } catch(err) {
        throw err;
    }
}

export function createTodo(user) {
    const TOKEN = localStorage.getItem('TOKEN');
    try {
        return request
                .post(`${URL}/api/todos`, user)
                .set('Authorization', TOKEN)
    } catch(err) {
        throw err;
    }
}
